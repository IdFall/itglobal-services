-- Déjà appliqué sur le projet Supabase (asxcdwfmhwcmclyavtvx). Gardé ici comme historique de la base.

-- Administrateurs autorisés à modifier les images (ajoutés par e-mail)
create table public.itg_admins (
  email text primary key
);
alter table public.itg_admins enable row level security;
create policy "admins lisent leur ligne" on public.itg_admins for select to authenticated
  using (email = (auth.jwt() ->> 'email'));

create or replace function public.itg_is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.itg_admins a where a.email = (auth.jwt() ->> 'email'));
$$;
revoke execute on function public.itg_is_admin() from public, anon;
grant execute on function public.itg_is_admin() to authenticated;

-- Une ligne par emplacement d'image du site (galerie, entreprises, logos clients)
create table public.itg_images (
  slot text primary key,
  url text not null,
  label text,
  updated_at timestamptz not null default now()
);
alter table public.itg_images enable row level security;
create policy "lecture publique" on public.itg_images for select to anon, authenticated using (true);
create policy "admins insèrent" on public.itg_images for insert to authenticated with check (public.itg_is_admin());
create policy "admins modifient" on public.itg_images for update to authenticated using (public.itg_is_admin()) with check (public.itg_is_admin());
create policy "admins suppriment" on public.itg_images for delete to authenticated using (public.itg_is_admin());

-- Stockage des fichiers images
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('itg-images', 'itg-images', true, 5242880, array['image/jpeg','image/png','image/webp','image/svg+xml']);

create policy "itg admins envoient" on storage.objects for insert to authenticated
  with check (bucket_id = 'itg-images' and public.itg_is_admin());
create policy "itg admins remplacent" on storage.objects for update to authenticated
  using (bucket_id = 'itg-images' and public.itg_is_admin());
create policy "itg admins suppriment" on storage.objects for delete to authenticated
  using (bucket_id = 'itg-images' and public.itg_is_admin());

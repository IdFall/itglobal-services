# Site ITGlobal Services (React + Vite + Supabase)

## Lancer le site en local
```
cp .env.example .env
npm install
npm run dev        # site : http://localhost:5173  ·  tableau de bord : http://localhost:5173/admin.html
```

## Mettre en ligne
```
npm run build      # produit dist/ (site + admin.html) à déposer chez l'hébergeur
```
Sur Vercel ou Netlify : relier le dépôt GitHub, commande `npm run build`, dossier `dist`,
et ajouter les variables `VITE_SUPABASE_URL` et `VITE_SUPABASE_KEY` (voir `.env.example`).

## Tableau de bord des images (`/admin.html`)
Permet de remplacer les images de la galerie, de la section Entreprises et les logos clients,
sans toucher au code. Les images sont stockées dans Supabase (bucket `itg-images`, table `itg_images`).

Donner l'accès à une personne :
1. Supabase > Authentication > Users > **Add user** (e-mail + mot de passe, cocher « Auto confirm »).
2. Supabase > SQL Editor : `insert into itg_admins (email) values ('son-email@exemple.com');`

Seuls les e-mails présents dans `itg_admins` peuvent modifier les images.

## Modifier les textes
Tout le texte (coordonnées, produits, services, conseils) est dans `src/data/site.js`.
Les champs `provisoire: true` sont surlignés en jaune sur le site jusqu'à confirmation.

## Organisation du code
- `src/components/` : une section du site par fichier
- `src/data/site.js` : contenu ; `src/data/slots.js` : emplacements d'images gérés par le tableau de bord
- `src/admin/` : tableau de bord
- `src/lib/` : connexion Supabase et chargement des images

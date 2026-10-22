import { useEffect, useState } from 'react';
import { supabase, BUCKET } from '../lib/supabase.js';
import { chargerImages } from '../lib/images.jsx';
import { compresser } from '../lib/compresser.js';
import { sections } from '../data/slots.js';
import Scene from '../components/Scene.jsx';

function Connexion() {
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [erreur, setErreur] = useState('');
  const [enCours, setEnCours] = useState(false);

  const connecter = async (e) => {
    e.preventDefault();
    setEnCours(true); setErreur('');
    const { error } = await supabase.auth.signInWithPassword({ email, password: mdp });
    if (error) setErreur('E-mail ou mot de passe incorrect.');
    setEnCours(false);
  };

  return (
    <form className="adm-login" onSubmit={connecter}>
      <h1>Tableau de bord</h1>
      <p className="form-note">Connectez-vous pour modifier les images du site.</p>
      <label htmlFor="email">E-mail<input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
      <label htmlFor="mdp">Mot de passe<input id="mdp" type="password" autoComplete="current-password" value={mdp} onChange={(e) => setMdp(e.target.value)} required /></label>
      {erreur && <p className="adm-err">{erreur}</p>}
      <button className="btn btn-accent" type="submit" disabled={enCours}>{enCours ? 'Connexion…' : 'Se connecter'}</button>
    </form>
  );
}

function Emplacement({ slot, image, avecNom, largeurMax, onChange }) {
  const [etat, setEtat] = useState('');
  const [nom, setNom] = useState(image?.label ?? slot.defaut ?? '');
  useEffect(() => { setNom(image?.label ?? slot.defaut ?? ''); }, [image, slot.defaut]);

  const envoyer = async (fichier) => {
    if (!fichier) return;
    setEtat('Préparation de l\'image…');
    let pret;
    try {
      pret = await compresser(fichier, largeurMax);
    } catch {
      setEtat("Ce format d'image n'est pas pris en charge. Essayez une photo JPG ou PNG.");
      return;
    }
    if (pret.blob.size > 5 * 1024 * 1024) { setEtat('Image trop lourde, même après compression (5 Mo maximum).'); return; }
    setEtat('Envoi…');
    const chemin = `${slot.id}-${Date.now()}.${pret.ext}`;
    const up = await supabase.storage.from(BUCKET).upload(chemin, pret.blob, { cacheControl: '3600', contentType: pret.blob.type });
    if (up.error) { setEtat("Échec de l'envoi : " + up.error.message); return; }
    const url = supabase.storage.from(BUCKET).getPublicUrl(chemin).data.publicUrl;
    const { error } = await supabase.from('itg_images').upsert({ slot: slot.id, url, label: avecNom ? nom : null, updated_at: new Date().toISOString() });
    if (error) { setEtat("Image envoyée mais non enregistrée : vérifiez que votre compte est administrateur."); return; }
    setEtat('Image mise à jour');
    onChange();
  };

  const enregistrerNom = async () => {
    if (!image) return;
    const { error } = await supabase.from('itg_images').update({ label: nom, updated_at: new Date().toISOString() }).eq('slot', slot.id);
    setEtat(error ? "Le nom n'a pas pu être enregistré." : 'Nom enregistré');
    onChange();
  };

  const retirer = async () => {
    const { error } = await supabase.from('itg_images').delete().eq('slot', slot.id);
    setEtat(error ? "L'image n'a pas pu être retirée." : "Image retirée, l'illustration par défaut est de retour");
    onChange();
  };

  return (
    <article className="adm-slot">
      <div className="adm-preview">
        {image ? <img src={image.url} alt={slot.nom} /> : slot.scene ? <Scene name={slot.scene} label={slot.nom} /> : <span className="logo-ph">Logo</span>}
      </div>
      <div className="adm-body">
        <strong>{slot.nom}</strong>
        <span className="form-note">{image ? 'Image personnalisée' : 'Illustration par défaut'}</span>
        {avecNom && (
          <label htmlFor={`nom-${slot.id}`}>Nom de l'entreprise
            <input id={`nom-${slot.id}`} value={nom} onChange={(e) => setNom(e.target.value)} onBlur={enregistrerNom} />
          </label>
        )}
        <div className="adm-acts">
          <label className="btn btn-accent adm-file" htmlFor={`f-${slot.id}`}>
            {image ? "Remplacer l'image" : 'Choisir une image'}
            <input id={`f-${slot.id}`} type="file" accept="image/*" onChange={(e) => { envoyer(e.target.files[0]); e.target.value = ''; }} />
          </label>
          {image && <button type="button" className="btn adm-ghost" onClick={retirer}>Retirer</button>}
        </div>
        {etat && <span className="adm-state" role="status">{etat}</span>}
      </div>
    </article>
  );
}

export default function Admin() {
  const [session, setSession] = useState(null);
  const [pret, setPret] = useState(false);
  const [images, setImages] = useState({});

  useEffect(() => {
    if (!supabase) { setPret(true); return; }
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setPret(true); });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  const recharger = () => chargerImages().then(setImages);
  useEffect(() => { if (session) recharger(); }, [session]);

  if (!supabase) return <main className="adm"><p>La connexion à Supabase n'est pas configurée (fichier .env).</p></main>;
  if (!pret) return null;
  if (!session) return <main className="adm"><Connexion /></main>;

  return (
    <main className="adm">
      <header className="adm-head">
        <div>
          <h1>Images du site</h1>
          <p className="form-note">Connecté : {session.user.email}. Les changements apparaissent sur le site dès le prochain chargement de la page.</p>
        </div>
        <div className="adm-acts">
          <a className="btn adm-ghost" href="./" target="_blank" rel="noopener">Voir le site</a>
          <button type="button" className="btn adm-ghost" onClick={() => supabase.auth.signOut()}>Se déconnecter</button>
        </div>
      </header>
      {sections.map((sec) => (
        <section key={sec.titre} className="adm-sec">
          <h2>{sec.titre}</h2>
          <p className="form-note adm-size">Taille conseillée : {sec.taille}. Les photos sont réduites et compressées automatiquement à l'envoi ; l'image est recadrée au centre si les proportions diffèrent.</p>
          <div className="adm-grid">
            {sec.slots.map((slot) => (
              <Emplacement key={slot.id} slot={slot} image={images[slot.id]} avecNom={sec.avecNom} largeurMax={sec.largeurMax} onChange={recharger} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

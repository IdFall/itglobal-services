import { contact } from '../data/site.js';
import Provisoire from './Provisoire.jsx';

const menus = [
  { titre: 'Matériel', href: '#produits', liens: [['Ordinateurs et écrans', '#produits'], ['Imprimantes et consommables', '#produits'], ['Accessoires', '#produits'], ['Vidéosurveillance', '#produits']] },
  { titre: 'Maintenance', href: '#maintenance', liens: [['Dépannage et réparation', '#maintenance'], ['Installation de postes', '#maintenance'], ['Contrat de maintenance', '#entreprises'], ['Récupération de données', '#maintenance']] },
  { titre: 'Réseau', href: '#maintenance', liens: [['Wi-Fi et câblage', '#maintenance'], ['Sécurité informatique', '#maintenance'], ['Sauvegarde', '#maintenance']] },
];

export function TopBar() {
  const h = contact.horaires[0];
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="group">
          <span className="tagline">Votre partenaire informatique au quotidien</span>
          <span>📍 <Provisoire>{contact.ville}</Provisoire></span>
          <span>🕘 <Provisoire on={!!h.provisoire}>{h.heures}</Provisoire></span>
        </div>
        <div className="group links">
          <a href="#contact">Demande de support</a>
          <a href="#galerie">Galerie</a>
          <a href="#references">Références</a>
          <a href="#conseils">Conseils</a>
          <a href={contact.facebook} target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="logo" href="#accueil" aria-label="ITGlobal Services, accueil">
          <span className="logo-mark">IT</span>
          <span>ITGlobal Services<small>Dakar · Sénégal</small></span>
        </a>
        <nav className="nav" aria-label="Navigation principale">
          {menus.map((m) => (
            <div className="item" key={m.titre}>
              <a href={m.href}>{m.titre}</a>
              <div className="menu">
                {m.liens.map(([t, href]) => <a key={t} href={href}>{t}</a>)}
              </div>
            </div>
          ))}
          <a href="#galerie">Galerie</a>
          <a href="#entreprises">Entreprises</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-accent" href="#contact">Demander un devis</a>
      </div>
    </header>
  );
}

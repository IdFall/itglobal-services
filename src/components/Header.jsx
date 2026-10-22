import { useEffect, useState } from 'react';
import { contact } from '../data/site.js';
import logo from '../assets/logo-itglobal.png';
import Provisoire from './Provisoire.jsx';

const menus = [
  { titre: 'Produits', href: '#produits', liens: [['Ordinateurs portables et fixes', '#produits'], ['Serveurs', '#produits'], ['Imprimantes et consommables', '#produits'], ['Accessoires et papeterie', '#produits'], ['Logiciels', '#produits']] },
  { titre: 'Services', href: '#maintenance', liens: [['Maintenance informatique', '#maintenance'], ['Vidéosurveillance et contrôle d’accès', '#maintenance'], ['Réseaux informatiques', '#maintenance'], ['Contrat de maintenance', '#entreprises'], ['Sites web et impression', '#maintenance']] },
];

export function TopBar() {
  const h = contact.horaires[0];
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="group">
          <span className="tagline">Maintenance · Électronique · Réseaux · Ventes</span>
          <span>📍 {contact.adresse}</span>
          <span>📞 {contact.telephone}</span>
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

const liensSimples = [['Formations', '#formations'], ['Galerie', '#galerie'], ['Entreprises', '#entreprises'], ['Références', '#references'], ['Contact', '#contact']];

export function Header() {
  const [ouvert, setOuvert] = useState(false);
  const fermer = () => setOuvert(false);

  useEffect(() => {
    if (!ouvert) return;
    const onKey = (e) => e.key === 'Escape' && fermer();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [ouvert]);

  return (
    <header className="top">
      <div className="wrap">
        <a className="logo" href="#accueil" aria-label="IT Global Services, accueil" onClick={fermer}>
          <img src={logo} alt="" className="logo-img" />
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
          {liensSimples.filter(([t]) => t !== 'Références' && t !== 'Galerie').map(([t, href]) => <a key={t} href={href}>{t}</a>)}
        </nav>
        <a className="btn btn-accent cta-top" href="#contact">Demander un devis</a>
        <button type="button" className="burger" aria-expanded={ouvert} aria-controls="menu-mobile" aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOuvert(!ouvert)}>
          <span /><span /><span />
        </button>
      </div>
      <nav id="menu-mobile" className="mobile-menu" hidden={!ouvert} aria-label="Menu">
        <div className="wrap">
          {menus.map((m) => (
            <div key={m.titre} className="mm-group">
              <p className="mm-title">{m.titre}</p>
              {m.liens.map(([t, href]) => <a key={t} href={href} onClick={fermer}>{t}</a>)}
            </div>
          ))}
          <div className="mm-group">
            <p className="mm-title">Plus</p>
            {liensSimples.map(([t, href]) => <a key={t} href={href} onClick={fermer}>{t}</a>)}
          </div>
          <a className="btn btn-accent" href="#contact" onClick={fermer}>Demander un devis</a>
        </div>
      </nav>
    </header>
  );
}

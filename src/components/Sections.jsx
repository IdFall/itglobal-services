import { stats, produits, services, etapes, pointsEntreprise, atouts, conseils } from '../data/site.js';
import Provisoire from './Provisoire.jsx';
import Scene from './Scene.jsx';
import { useImages } from '../lib/images.jsx';

const icones = {
  laptop: <><rect x="5" y="6" width="22" height="14" rx="1.5" /><path d="M2 25h28l-2-5H4z" /></>,
  desktop: <><rect x="3" y="4" width="26" height="17" rx="1.5" /><path d="M12 27h8M16 21v6" /></>,
  printer: <><path d="M9 11V4h14v7" /><rect x="4" y="11" width="24" height="11" rx="1.5" /><path d="M9 18h14v10H9z" /></>,
  mouse: <><rect x="10" y="3" width="12" height="26" rx="6" /><path d="M16 3v9M10 12h12" /></>,
  router: <><rect x="4" y="18" width="24" height="8" rx="1.5" /><path d="M9 18l-3-10M23 18l3-10M9 22h.01M13 22h.01" /></>,
  camera: <><rect x="4" y="9" width="17" height="12" rx="2" /><path d="M21 13l7-3v10l-7-3M10 21v6M6 27h8" /></>,
};

function SecHead({ eyebrow, titre, children, style }) {
  return (
    <div className="sec-head" style={style}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{titre}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function Products() {
  return (
    <section className="block" id="produits">
      <div className="wrap">
        <div className="stats" style={{ marginBottom: 64 }}>
          {stats.map((s) => (
            <div className="stat" key={s.libelle}>
              <Provisoire as="b" on={!!s.provisoire}>{s.valeur}</Provisoire>
              <span>{s.libelle}</span>
            </div>
          ))}
        </div>
        <SecHead eyebrow="Boutique" titre="Le matériel qu'on vend">
          Du neuf et de l'accessoire pour équiper une maison, un bureau ou une salle informatique. Demandez la disponibilité et le prix du jour.
        </SecHead>
        <div className="products">
          {produits.map((p) => (
            <article className="product" key={p.titre}>
              <svg viewBox="0 0 32 32" aria-hidden="true">{icones[p.icone]}</svg>
              <h3>{p.titre}</h3>
              <p>{p.texte}</p>
              <span className="ref">{p.ref}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Maintenance() {
  return (
    <section className="block maint" id="maintenance">
      <div className="wrap">
        <SecHead eyebrow="Atelier" titre="Maintenance et dépannage informatique">
          Ordinateur lent, écran cassé, virus, imprimante bloquée : on diagnostique, on vous donne un devis, et on répare seulement après votre accord.
        </SecHead>
        <div className="maint-grid">
          <div className="services">
            {services.map((s) => (
              <div className="service" key={s.titre}><h3>{s.titre}</h3><span className="tag">{s.tag}</span><p>{s.texte}</p></div>
            ))}
          </div>
          <div>
            <h3 className="process-title">Comment se passe une réparation</h3>
            <ol className="process">
              {etapes.map((e) => <li key={e.titre}><h3>{e.titre}</h3><p>{e.texte}</p></li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Business() {
  const photo = useImages().entreprises?.url;
  return (
    <section className="block" id="entreprises">
      <div className="wrap pro">
        <div className="pro-left">
          <SecHead eyebrow="Entreprises" titre="Pourquoi confier votre informatique à un prestataire ?" style={{ marginBottom: 0 }}>
            L'informatique, c'est notre métier. En nous confiant la maintenance de votre parc, vous vous concentrez sur le vôtre. Nous intervenons pour les PME, commerces, écoles, cabinets et administrations.
          </SecHead>
          <figure className="pro-img">
            {photo ? <img src={photo} alt="Installation réseau chez un client" loading="lazy" /> : <Scene name="network" label="Installation réseau chez un client" />}
            <figcaption>Baie réseau installée et câblée par notre équipe</figcaption>
          </figure>
        </div>
        <div className="points">
          {pointsEntreprise.map((p) => <div key={p.titre}><h3>{p.titre}</h3><p>{p.texte}</p></div>)}
          <p><a className="btn btn-accent" href="#contact">Demander un contrat de maintenance</a></p>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="block" id="pourquoi" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SecHead eyebrow="Pourquoi nous" titre="Un seul interlocuteur pour tout votre informatique" />
        <div className="why">
          {atouts.map((a) => <div key={a.titre}><h3>{a.titre}</h3><p>{a.texte}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function Tips() {
  return (
    <section className="block maint" id="conseils">
      <div className="wrap">
        <SecHead eyebrow="Conseils" titre="Nos conseils informatiques">Des astuces simples pour garder votre matériel en bon état.</SecHead>
        <div className="posts">
          {conseils.map((c) => (
            <article className="post" key={c.titre}><span className="meta">{c.theme}</span><h3>{c.titre}</h3><p>{c.texte}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Summary() {
  return (
    <section className="block">
      <div className="wrap summary">
        <h2>En résumé</h2>
        <p>ITGlobal Services vend du matériel informatique et électronique, installe vos postes et vos réseaux, et assure la maintenance et le dépannage de vos équipements. Particulier ou entreprise, vous avez un seul interlocuteur pour acheter, installer et réparer.</p>
      </div>
    </section>
  );
}

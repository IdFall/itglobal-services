import { stats, produits, logiciels, services, etapes, pointsEntreprise, atouts, formations, conseils } from '../data/site.js';
import cablesReseau from '../assets/photos/cables-reseau.webp';
import Provisoire from './Provisoire.jsx';
import { useImages } from '../lib/images.jsx';


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
        <SecHead eyebrow="Nos produits" titre="Ordinateurs et matériel informatique de qualité">
          Ordinateurs de marque, serveurs, imprimantes, accessoires et consommables. Demandez la disponibilité et le prix du jour.
        </SecHead>
        <div className="products">
          {produits.map((p) => (
            <article className="product" key={p.titre}>
              <div className="product-img"><img src={p.photo} alt={p.titre} loading="lazy" /></div>
              <h3>{p.titre}</h3>
              <p>{p.texte}</p>
              <span className="ref">{p.ref}</span>
            </article>
          ))}
        </div>
        <div className="soft">
          <h3 className="process-title">Les logiciels que nous installons</h3>
          <ul className="soft-list">
            {logiciels.map((l) => (
              <li key={l.nom}><img src={l.logo} alt="" loading="lazy" /><span><strong>{l.nom}</strong>{l.texte}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Maintenance() {
  return (
    <section className="block maint" id="maintenance">
      <div className="wrap">
        <SecHead eyebrow="Axes d'intervention" titre="Maintenance, électronique et réseaux">
          Nous sommes spécialisés dans la maintenance, la sécurité électronique et l'informatique. Voici nos cinq domaines d'intervention.
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
          <SecHead eyebrow="Contrat de maintenance" titre="Votre parc informatique entre de bonnes mains" style={{ marginBottom: 0 }}>
            Pour les clients sous contrat de maintenance, nous appliquons trois méthodes complémentaires. Vous vous concentrez sur votre métier, nous nous occupons de votre informatique.
          </SecHead>
          <figure className="pro-img">
            <img src={photo ?? cablesReseau} alt="Câblage réseau" loading="lazy" />
            <figcaption>Réalisation de travaux de câblage informatique</figcaption>
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
        <SecHead eyebrow="Notre modèle" titre="Le meilleur de l'ingénierie informatique et électronique" />
        <div className="why">
          {atouts.map((a) => <div key={a.titre}><h3>{a.titre}</h3><p>{a.texte}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function Training() {
  return (
    <section className="block maint" id="formations">
      <div className="wrap">
        <SecHead eyebrow="Nos formations" titre="Des formations pratiques en informatique et bureautique">
          La maîtrise des outils informatiques est devenue indispensable dans le milieu professionnel. Nos formations s'adressent aux étudiants, aux professionnels et aux entreprises, avec un encadrement qualifié.
        </SecHead>
        <div className="trainings">
          {formations.map((f) => (
            <article className="training" key={f.titre}>
              <img src={f.photo} alt="" loading="lazy" />
              <div>
                <h3>{f.titre}</h3>
                <ul>{f.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 24 }}><a className="btn btn-accent" href="#contact">S'inscrire à une formation</a></p>
      </div>
    </section>
  );
}

export function Tips() {
  return (
    <section className="block" id="conseils">
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
        <h2>Notre mission</h2>
        <p>Vous présenter le meilleur marché d'ingénierie informatique et électronique. IT Global Services est spécialisée dans la maintenance, la sécurité électronique et l'informatique, et fournit des ordinateurs et du matériel informatique de qualité certifiée. Nous comblons le fossé entre les consommateurs, les marques et les fabricants d'équipements informatiques, en assurant un service après-vente de qualité et responsable.</p>
      </div>
    </section>
  );
}

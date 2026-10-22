import { useEffect, useState } from 'react';
import { galerie as galerieBase } from '../data/site.js';
import Scene from './Scene.jsx';
import { useImages } from '../lib/images.jsx';

const FILTRES = ['Tout', ...new Set(galerieBase.map((g) => g.categorie))];

function Visuel({ item }) {
  return item.photo
    ? <img src={item.photo} alt={item.titre} loading="lazy" />
    : <Scene name={item.scene} label={item.titre} />;
}

export default function Gallery() {
  const images = useImages();
  const galerie = galerieBase.map((g) => ({ ...g, photo: images[`galerie-${g.scene}`]?.url ?? g.photo }));
  const [filtre, setFiltre] = useState('Tout');
  const [ouvert, setOuvert] = useState(null);
  const items = filtre === 'Tout' ? galerie : galerie.filter((g) => g.categorie === filtre);

  useEffect(() => {
    if (ouvert === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOuvert(null);
      if (e.key === 'ArrowRight') setOuvert((i) => (i + 1) % items.length);
      if (e.key === 'ArrowLeft') setOuvert((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [ouvert, items.length]);

  const courant = ouvert !== null ? items[ouvert] : null;

  return (
    <section className="block" id="galerie">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">En images</p>
          <h2>La boutique, l'atelier et nos installations</h2>
          <p>Passez nous voir en boutique, ou découvrez quelques interventions réalisées chez nos clients.</p>
        </div>
        <div className="filters" role="tablist" aria-label="Filtrer la galerie">
          {FILTRES.map((f) => (
            <button key={f} type="button" role="tab" aria-selected={filtre === f} className={filtre === f ? 'chip on' : 'chip'} onClick={() => setFiltre(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="gallery">
          {items.map((item, i) => (
            <button key={item.titre} type="button" className={item.grande && filtre === 'Tout' ? 'tile big' : 'tile'} onClick={() => setOuvert(i)}>
              <Visuel item={item} />
              <span className="tile-cap">
                <span className="tile-cat">{item.categorie}</span>
                <strong>{item.titre}</strong>
              </span>
            </button>
          ))}
        </div>
        {galerie.some((g) => !g.photo) && (
          <p className="form-note" style={{ marginTop: 14 }}>Illustrations provisoires : elles seront remplacées par les photos de la boutique.</p>
        )}
      </div>

      {courant && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={courant.titre} onClick={() => setOuvert(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <Visuel item={courant} />
            <figcaption>
              <span><strong>{courant.titre}</strong> · {courant.legende}</span>
              <span className="lb-nav">
                <button type="button" onClick={() => setOuvert((ouvert - 1 + items.length) % items.length)} aria-label="Image précédente">←</button>
                <span>{ouvert + 1} / {items.length}</span>
                <button type="button" onClick={() => setOuvert((ouvert + 1) % items.length)} aria-label="Image suivante">→</button>
                <button type="button" onClick={() => setOuvert(null)} aria-label="Fermer">✕</button>
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

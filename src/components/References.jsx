import { references as base } from '../data/site.js';
import { useImages } from '../lib/images.jsx';

export default function References() {
  const images = useImages();
  const references = base.map((r, i) => {
    const img = images[`reference-${i + 1}`];
    return img ? { ...r, nom: img.label || r.nom, logo: img.url } : r;
  });
  const provisoire = references.some((r) => !r.logo);
  return (
    <section className="block" id="references" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Références</p>
          <h2>Ils nous ont fait confiance</h2>
          <p>Entreprises, écoles et institutions qui nous confient leur matériel, leur réseau ou la maintenance de leur parc.</p>
        </div>
        <ul className="logos">
          {references.map((r) => (
            <li key={r.nom} className="logo-tile" title={`${r.nom} · ${r.secteur}`}>
              {r.logo
                ? <img src={r.logo} alt={r.nom} loading="lazy" />
                : <span className="logo-slot"><span className="logo-ph" aria-hidden="true">{r.nom.split(' ').map((m) => m[0]).join('')}</span><span>{r.nom}<small>{r.secteur}</small></span></span>}
            </li>
          ))}
        </ul>
        {provisoire && <p className="form-note" style={{ marginTop: 14 }}>Emplacements provisoires : ils seront remplacés par les logos des clients.</p>}
      </div>
    </section>
  );
}

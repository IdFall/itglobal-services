import { useEffect, useRef } from 'react';
import techEchelle from '../assets/photos/technicien-echelle.webp';
import { useImages } from '../lib/images.jsx';

// Pistes de circuit imprimé dessinées en fond
function CircuitBackground() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    const draw = () => {
      const r = c.getBoundingClientRect(), d = window.devicePixelRatio || 1;
      c.width = r.width * d; c.height = r.height * d;
      const ctx = c.getContext('2d');
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const col = getComputedStyle(document.documentElement).getPropertyValue('--trace').trim() || '#2a8cff';
      ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 1; ctx.globalAlpha = 0.35;
      let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
      const step = 28;
      for (let i = 0; i < 38; i++) {
        let x = Math.round(rnd() * r.width / step) * step, y = Math.round(rnd() * r.height / step) * step;
        ctx.beginPath(); ctx.moveTo(x, y);
        for (let k = 0; k < 6; k++) {
          const dir = Math.floor(rnd() * 4), len = step * (1 + Math.floor(rnd() * 4));
          if (dir === 0) x += len; else if (dir === 1) y += len; else if (dir === 2) { x += len; y += len; } else { x += len; y -= len; }
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
      }
    };
    draw();
    let t;
    const onResize = () => { clearTimeout(t); t = setTimeout(draw, 150); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return <canvas ref={ref} aria-hidden="true" />;
}


export default function Hero() {
  const photo = useImages().hero?.url;
  return (
    <section className="hero" id="accueil">
      <CircuitBackground />
      <div className="wrap">
        <div>
          <p className="eyebrow" style={{ color: 'var(--accent)' }}>Maintenance · Sécurité électronique · Informatique</p>
          <h1 style={{ marginTop: 14 }}>Votre partenaire en <em>informatique et électronique</em> à Dakar.</h1>
          <p className="lead">Maintenance de PC, serveurs et imprimantes toutes marques, vidéosurveillance, réseaux et vente de matériel informatique de qualité certifiée. Une équipe jeune et compétente, au Centre commercial El Mansour de Grand Dakar.</p>
          <div className="ctas">
            <a className="btn btn-accent" href="#contact">Demander une intervention</a>
            <a className="btn btn-ghost" href="#produits">Voir le matériel</a>
          </div>
          <div className="facts">
            <span><b>Toutes marques</b> PC, serveurs, imprimantes</span>
            <span><b>Sur site</b> ou en boutique</span>
            <span><b>Formations</b> bureautique et réseaux</span>
          </div>
        </div>
        <figure className="hero-photo">
          <img src={photo ?? techEchelle} alt="Technicien IT Global Services en intervention" />
          <figcaption className="hero-badge"><span className="dot done" />Notre équipe sur le terrain</figcaption>
        </figure>
      </div>
    </section>
  );
}

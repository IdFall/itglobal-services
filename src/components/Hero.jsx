import { useEffect, useRef } from 'react';

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

const suivi = [
  ['done', 'Reçu en atelier'],
  ['done', 'Diagnostic effectué'],
  ['now', 'Réparation en cours'],
  ['', 'Prêt à récupérer'],
];

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <CircuitBackground />
      <div className="wrap">
        <div>
          <p className="eyebrow" style={{ color: 'var(--accent)' }}>Vente · Maintenance · Installation</p>
          <h1 style={{ marginTop: 14 }}>Prestataire informatique pour <em>particuliers et entreprises</em>.</h1>
          <p className="lead">Vente de matériel, maintenance, installation de postes et de réseaux : ITGlobal Services équipe et dépanne votre informatique au Sénégal, en boutique ou sur site.</p>
          <div className="ctas">
            <a className="btn btn-accent" href="#contact">Déposer une demande de réparation</a>
            <a className="btn btn-ghost" href="#produits">Voir le matériel</a>
          </div>
          <div className="facts">
            <span><b>Diagnostic</b> avant tout devis</span>
            <span><b>Prix</b> en FCFA, sans surprise</span>
            <span><b>Intervention</b> en boutique ou sur site</span>
          </div>
        </div>
        <aside className="ticket" aria-label="Exemple de fiche de dépôt">
          <div className="ticket-head"><strong>Fiche de dépôt</strong><span>N° 2026-0418</span></div>
          <dl>
            <dt>Appareil</dt><dd>PC portable 15"</dd>
            <dt>Panne</dt><dd>Ne démarre plus</dd>
            <dt>Diagnostic</dt><dd>Disque dur HS</dd>
            <dt>Solution</dt><dd>SSD 512 Go + système</dd>
            <dt>Devis</dt><dd>validé par le client</dd>
          </dl>
          <div className="steps-mini">
            {suivi.map(([etat, texte]) => (
              <div key={texte} className={etat ? undefined : 'later'}><span className={`dot ${etat}`} />{texte}</div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

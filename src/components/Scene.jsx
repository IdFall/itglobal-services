// Illustrations affichées tant qu'aucune vraie photo n'est fournie.
// Les couleurs viennent des classes .s-* (voir styles.css) pour suivre le thème clair/sombre.

const scenes = {
  shop: (
    <>
      <rect className="s-bg" width="400" height="300" />
      <rect className="s-line" x="0" y="230" width="400" height="70" />
      <rect className="s-band" x="40" y="60" width="320" height="170" rx="4" />
      <rect className="s-accent" x="40" y="60" width="320" height="34" rx="4" />
      <text className="s-sign" x="200" y="83" textAnchor="middle">ITGLOBAL SERVICES</text>
      <rect className="s-glass" x="60" y="110" width="130" height="100" rx="2" />
      <rect className="s-glass" x="210" y="110" width="60" height="120" rx="2" />
      <rect className="s-glass" x="285" y="110" width="55" height="100" rx="2" />
      <rect className="s-surface" x="75" y="150" width="46" height="30" rx="2" />
      <rect className="s-ink" x="70" y="180" width="56" height="5" rx="2" />
      <rect className="s-surface" x="132" y="140" width="44" height="40" rx="2" />
      <rect className="s-trace" x="137" y="145" width="34" height="24" />
      <circle className="s-accent" cx="262" cy="172" r="3" />
    </>
  ),
  laptops: (
    <>
      <rect className="s-bg" width="400" height="300" />
      <rect className="s-line" x="20" y="200" width="360" height="12" rx="3" />
      {[50, 160, 270].map((x, i) => (
        <g key={x}>
          <rect className="s-band" x={x} y="110" width="90" height="62" rx="4" />
          <rect className={i === 1 ? 's-accent' : 's-trace'} x={x + 6} y="116" width="78" height="50" rx="2" opacity=".85" />
          <path className="s-ink" d={`M${x - 10} 172h110l-6 10h-98z`} />
          <rect className="s-surface" x={x + 25} y="186" width="40" height="12" rx="2" />
          <text className="s-price" x={x + 45} y="195" textAnchor="middle">FCFA</text>
        </g>
      ))}
    </>
  ),
  repair: (
    <>
      <rect className="s-bg" width="400" height="300" />
      <rect className="s-line" x="0" y="210" width="400" height="90" />
      <rect className="s-band" x="90" y="120" width="220" height="90" rx="6" />
      <rect className="s-trace" x="110" y="135" width="80" height="60" rx="3" opacity=".7" />
      <rect className="s-accent" x="205" y="140" width="34" height="22" rx="2" />
      <rect className="s-surface" x="250" y="140" width="40" height="10" rx="2" />
      <rect className="s-surface" x="250" y="156" width="40" height="10" rx="2" />
      {[120, 135, 150, 165, 180].map((x) => <rect key={x} className="s-ink" x={x} y="188" width="6" height="12" />)}
      <path className="s-ink-stroke" d="M300 60l-60 90" />
      <circle className="s-accent" cx="238" cy="152" r="5" />
      <path className="s-ink-stroke" d="M90 70l40 55" />
      <circle className="s-ink" cx="88" cy="66" r="9" />
    </>
  ),
  printers: (
    <>
      <rect className="s-bg" width="400" height="300" />
      <rect className="s-line" x="30" y="215" width="340" height="10" rx="3" />
      <rect className="s-band" x="60" y="135" width="150" height="80" rx="6" />
      <rect className="s-surface" x="85" y="105" width="100" height="34" />
      <rect className="s-ink" x="80" y="175" width="110" height="6" rx="3" />
      <rect className="s-surface" x="90" y="181" width="90" height="26" />
      {[[240, 's-trace'], [270, 's-accent'], [300, 's-ink'], [330, 's-trace']].map(([x, c]) => (
        <g key={x}><rect className={c} x={x} y="160" width="24" height="55" rx="3" /><rect className="s-surface" x={x + 5} y="172" width="14" height="18" rx="1" /></g>
      ))}
    </>
  ),
  network: (
    <>
      <rect className="s-bg" width="400" height="300" />
      <rect className="s-band" x="130" y="40" width="140" height="220" rx="6" />
      {[60, 110, 160, 210].map((y, r) => (
        <g key={y}>
          <rect className="s-ink" x="145" y={y} width="110" height="36" rx="2" />
          {[0, 1, 2, 3, 4, 5].map((p) => (
            <g key={p}>
              <rect className="s-surface" x={153 + p * 16} y={y + 10} width="10" height="9" />
              <circle className={(p + r) % 3 ? 's-ok' : 's-accent'} cx={158 + p * 16} cy={y + 27} r="2" />
            </g>
          ))}
        </g>
      ))}
      <path className="s-cable" d="M255 80c60 0 60 90 120 90M255 130c50 0 40 100 120 100M145 180c-60 0-50-90-120-90" />
    </>
  ),
  cctv: (
    <>
      <rect className="s-bg" width="400" height="300" />
      <rect className="s-line" x="0" y="0" width="70" height="300" />
      <rect className="s-ink" x="60" y="80" width="30" height="40" rx="3" />
      <path className="s-band" d="M90 90l150 -10 10 50 -150 10z" />
      <circle className="s-trace" cx="245" cy="105" r="16" />
      <circle className="s-ink" cx="245" cy="105" r="8" />
      <circle className="s-accent" cx="120" cy="100" r="4" />
      <path className="s-beam" d="M260 95l130 -40v140z" />
      <rect className="s-band" x="250" y="210" width="110" height="68" rx="4" />
      <rect className="s-trace" x="256" y="216" width="47" height="26" opacity=".6" />
      <rect className="s-trace" x="307" y="216" width="47" height="26" opacity=".4" />
      <rect className="s-trace" x="256" y="246" width="47" height="26" opacity=".5" />
      <rect className="s-trace" x="307" y="246" width="47" height="26" opacity=".7" />
    </>
  ),
};

export default function Scene({ name, label }) {
  return (
    <svg className="scene" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
      {scenes[name] ?? scenes.shop}
    </svg>
  );
}

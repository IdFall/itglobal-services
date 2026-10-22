// Surligne une information à confirmer avec la boutique.
export default function Provisoire({ on = true, children, as: Tag = 'span', className = '' }) {
  return <Tag className={on ? `placeholder ${className}`.trim() : className || undefined} title={on ? 'Information à confirmer' : undefined}>{children}</Tag>;
}

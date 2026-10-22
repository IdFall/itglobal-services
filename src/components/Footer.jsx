import { contact } from '../data/site.js';
import Provisoire from './Provisoire.jsx';

const colonnes = [
  { titre: 'Matériel', liens: [['Ordinateurs', '#produits'], ['Imprimantes', '#produits'], ['Accessoires', '#produits'], ['Vidéosurveillance', '#produits']] },
  { titre: 'Services', liens: [['Dépannage', '#maintenance'], ['Réseau et Wi-Fi', '#maintenance'], ['Contrat entreprise', '#entreprises'], ['Galerie', '#galerie'], ['Références', '#references'], ['Conseils', '#conseils']] },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap cols">
        <div>
          <h4>ITGlobal Services</h4>
          <p>Vente de matériel informatique et électronique, maintenance, réseaux et sécurité. Dakar, Sénégal.</p>
        </div>
        {colonnes.map((c) => (
          <div key={c.titre}><h4>{c.titre}</h4><ul>{c.liens.map(([t, h]) => <li key={t}><a href={h}>{t}</a></li>)}</ul></div>
        ))}
        <div>
          <h4>Contact</h4>
          <ul>
            <li><Provisoire on={contact.provisoire}>{contact.telephone}</Provisoire></li>
            <li><Provisoire on={contact.provisoire}>{contact.email}</Provisoire></li>
            <li><a href={contact.facebook} target="_blank" rel="noopener">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} ITGlobal Services</span>
        <span>Mentions légales · Conditions de vente</span>
      </div>
    </footer>
  );
}

import { contact } from '../data/site.js';

const colonnes = [
  { titre: 'Matériel', liens: [['Ordinateurs', '#produits'], ['Imprimantes', '#produits'], ['Accessoires', '#produits'], ['Vidéosurveillance', '#produits']] },
  { titre: 'Services', liens: [['Dépannage', '#maintenance'], ['Réseau et Wi-Fi', '#maintenance'], ['Contrat entreprise', '#entreprises'], ['Formations', '#formations'], ['Galerie', '#galerie'], ['Références', '#references'], ['Conseils', '#conseils']] },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap cols">
        <div>
          <h4>ITGlobal Services</h4>
          <p>Maintenance, sécurité électronique, réseaux informatiques, vente de matériel et formations. Grand Dakar, Sénégal.</p>
        </div>
        {colonnes.map((c) => (
          <div key={c.titre}><h4>{c.titre}</h4><ul>{c.liens.map(([t, h]) => <li key={t}><a href={h}>{t}</a></li>)}</ul></div>
        ))}
        <div>
          <h4>Contact</h4>
          <ul>
            <li>{contact.telephone}</li>
            <li>{contact.email}</li>
            <li>{contact.adresse}</li>
            <li><a href={contact.facebook} target="_blank" rel="noopener">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} IT Global Services</span>
        <span>RC : {contact.rc} · NINEA : {contact.ninea}</span>
      </div>
    </footer>
  );
}

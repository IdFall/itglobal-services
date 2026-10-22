import { Fragment, useState } from 'react';
import { contact, typesDemande } from '../data/site.js';
import Provisoire from './Provisoire.jsx';

// Exemple pré-rempli pour montrer le fonctionnement du formulaire
const exemple = { nom: 'Awa Diop', tel: '77 000 00 00', type: typesDemande[0], msg: "Mon ordinateur portable ne s'allume plus depuis hier." };

export default function Contact() {
  const [form, setForm] = useState(exemple);
  const [message, setMessage] = useState('');
  const [copie, setCopie] = useState(false);
  const maj = (champ) => (e) => setForm({ ...form, [champ]: e.target.value });

  const envoyer = (e) => {
    e.preventDefault();
    if (!form.nom.trim()) return;
    setMessage(`Bonjour ITGlobal Services,\nDemande : ${form.type}\nNom : ${form.nom}\nTéléphone : ${form.tel || 'non précisé'}\n\n${form.msg}`);
    setCopie(false);
  };

  const copier = () => {
    navigator.clipboard?.writeText(message).then(() => {
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    }).catch(() => {});
  };

  return (
    <section className="block contact" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Contact</p>
          <h2>Demandez un devis ou un prix</h2>
          <p>Décrivez votre besoin. Le formulaire prépare un message que vous pouvez envoyer directement sur WhatsApp.</p>
        </div>
        <div className="contact-grid">
          <form onSubmit={envoyer} noValidate>
            <div className="row">
              <label htmlFor="nom">Nom<input id="nom" required autoComplete="name" value={form.nom} onChange={maj('nom')} /></label>
              <label htmlFor="tel">Téléphone<input id="tel" type="tel" autoComplete="tel" value={form.tel} onChange={maj('tel')} /></label>
            </div>
            <label htmlFor="type">Votre demande
              <select id="type" value={form.type} onChange={maj('type')}>
                {typesDemande.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label htmlFor="msg">Détails<textarea id="msg" value={form.msg} onChange={maj('msg')} /></label>
            <button className="btn btn-accent" type="submit">Préparer mon message</button>
            <p className="form-note">Exemple pré-rempli : remplacez par votre demande.</p>
            {message && (
              <div className="result">
                <pre>{message}</pre>
                <div className="acts">
                  <a className="btn btn-dark" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener">Ouvrir WhatsApp</a>
                  <button className="btn btn-accent" type="button" onClick={copier}>{copie ? 'Message copié' : 'Copier le message'}</button>
                </div>
              </div>
            )}
          </form>
          <div className="coords">
            <div className="coord"><span className="k">Téléphone / WhatsApp</span><span className="v"><Provisoire on={contact.provisoire}>{contact.telephone}</Provisoire></span></div>
            <div className="coord"><span className="k">Adresse</span><span className="v"><Provisoire on={contact.provisoire}>{contact.adresse}</Provisoire></span></div>
            <div className="coord"><span className="k">E-mail</span><span className="v"><Provisoire on={contact.provisoire}>{contact.email}</Provisoire></span></div>
            <div className="coord"><span className="k">Horaires</span>
              <div className="hours">
                {contact.horaires.map((h) => <Fragment key={h.jours}><span>{h.jours}</span><Provisoire on={!!h.provisoire}>{h.heures}</Provisoire></Fragment>)}
              </div>
            </div>
            <div className="coord"><span className="k">Facebook</span><a className="v" href={contact.facebook} target="_blank" rel="noopener">facebook.com/itglobalservices.sn</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}

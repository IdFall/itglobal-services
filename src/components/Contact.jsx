import { Fragment, useState } from 'react';
import { contact, typesDemande } from '../data/site.js';
import Provisoire from './Provisoire.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const vide = { nom: '', tel: '', email: '', type: typesDemande[0], msg: '', piege: '' };

export default function Contact() {
  const [form, setForm] = useState(vide);
  const [etat, setEtat] = useState(''); // '', 'envoi', 'ok', 'erreur'
  const [erreur, setErreur] = useState('');
  const maj = (champ) => (e) => setForm({ ...form, [champ]: e.target.value });

  const texteWhatsApp = `Bonjour ITGlobal Services,\nDemande : ${form.type}\nNom : ${form.nom}\nTéléphone : ${form.tel || 'non précisé'}\n\n${form.msg}`;

  const envoyer = async (e) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.msg.trim()) { setErreur('Indiquez au moins votre nom et votre demande.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) { setErreur('Indiquez une adresse e-mail valide pour que nous puissions vous répondre.'); return; }
    setErreur('');
    setEtat('envoi');
    try {
      const rep = await fetch(`https://formsubmit.co/ajax/${contact.emailFormulaire}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nouvelle demande du site : ${form.type} (${form.nom})`,
          _template: 'table',
          _captcha: 'false',
          _honey: form.piege,
          _replyto: form.email.trim(),
          Nom: form.nom,
          Téléphone: form.tel || 'non précisé',
          'E-mail': form.email.trim(),
          Demande: form.type,
          Détails: form.msg,
        }),
      });
      const data = await rep.json().catch(() => ({}));
      if (!rep.ok || String(data.success) === 'false') throw new Error(data.message || 'envoi refusé');
      setEtat('ok');
      setForm(vide);
    } catch {
      setEtat('erreur');
    }
  };

  return (
    <section className="block contact" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Contact</p>
          <h2>Demandez un devis ou un prix</h2>
          <p>Décrivez votre besoin : votre demande nous parvient par e-mail et nous vous recontactons rapidement.</p>
        </div>
        <div className="contact-grid">
          <form onSubmit={envoyer} noValidate>
            <div className="row">
              <label htmlFor="nom">Nom<input id="nom" required autoComplete="name" placeholder="Votre nom" value={form.nom} onChange={maj('nom')} /></label>
              <label htmlFor="email">E-mail<input id="email" type="email" required autoComplete="email" placeholder="vous@exemple.com" value={form.email} onChange={maj('email')} /></label>
            </div>
            <label htmlFor="tel">Téléphone (facultatif)<input id="tel" type="tel" autoComplete="tel" placeholder="77 000 00 00" value={form.tel} onChange={maj('tel')} /></label>
            <label htmlFor="type">Votre demande
              <select id="type" value={form.type} onChange={maj('type')}>
                {typesDemande.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label htmlFor="msg">Détails<textarea id="msg" required placeholder="Ex. : mon ordinateur portable ne s'allume plus depuis hier." value={form.msg} onChange={maj('msg')} /></label>
            {/* Champ invisible anti-robots */}
            <input className="piege" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.piege} onChange={maj('piege')} />
            <button className="btn btn-accent" type="submit" disabled={etat === 'envoi'}>{etat === 'envoi' ? 'Envoi…' : 'Envoyer ma demande'}</button>
            {erreur && <p className="form-err" role="alert">{erreur}</p>}
            {etat === 'ok' && (
              <div className="result" role="status">
                <strong>Merci, votre demande a bien été envoyée.</strong>
                <p>Nous vous recontactons au plus vite, aux horaires d'ouverture.</p>
              </div>
            )}
            {etat === 'erreur' && (
              <div className="result" role="alert">
                <strong>L'envoi n'a pas abouti.</strong>
                <p>Vous pouvez nous écrire directement sur WhatsApp, votre message est déjà prêt.</p>
                <div className="acts">
                  <a className="btn btn-dark" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(texteWhatsApp)}`} target="_blank" rel="noopener"><WhatsAppIcon size={18} /> Ouvrir WhatsApp</a>
                </div>
              </div>
            )}
          </form>
          <div className="coords">
            <div className="coord"><span className="k">Téléphone / WhatsApp</span><span className="v">{contact.telephone}</span></div>
            <div className="coord"><span className="k">Adresse</span><span className="v">{contact.adresse}</span></div>
            <div className="coord"><span className="k">E-mail</span><span className="v">{contact.email}</span></div>
            <div className="coord"><span className="k">Horaires</span>
              <div className="hours">
                {contact.horaires.map((h) => <Fragment key={h.jours}><span>{h.jours}</span><Provisoire on={!!h.provisoire}>{h.heures}</Provisoire></Fragment>)}
              </div>
            </div>
            <div className="coord"><span className="k">Facebook</span><a className="v" href={contact.facebook} target="_blank" rel="noopener">facebook.com/itglobalservices.sn</a></div>
            <a className="btn-wa" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Bonjour ITGlobal Services, ')}`} target="_blank" rel="noopener">
              <WhatsAppIcon /> Écrivez-nous sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

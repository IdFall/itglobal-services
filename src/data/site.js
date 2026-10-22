// Toutes les informations du site sont ici : modifiez ce fichier pour mettre à jour le contenu.
// Les valeurs marquées `provisoire: true` sont à confirmer avec la boutique.

export const contact = {
  telephone: '+221 XX XXX XX XX',
  whatsapp: '', // format international sans + ni espaces, ex. 221770000000
  adresse: 'Adresse de la boutique, Dakar',
  ville: 'Dakar',
  email: 'contact@itglobalservices.sn',
  facebook: 'https://www.facebook.com/itglobalservices.sn/',
  horaires: [
    { jours: 'Lun – Ven', heures: '09:00 – 19:00', provisoire: true },
    { jours: 'Samedi', heures: '09:00 – 14:00', provisoire: true },
    { jours: 'Dimanche', heures: 'Fermé' },
  ],
  provisoire: true,
};

export const stats = [
  { valeur: '< 4 h', libelle: "Délai d'intervention à Dakar", provisoire: true },
  { valeur: '7j/7', libelle: 'Assistance par téléphone et WhatsApp' },
  { valeur: 'Gratuit', libelle: 'Diagnostic avant devis' },
  { valeur: '500+', libelle: 'Appareils réparés', provisoire: true },
];

export const produits = [
  { icone: 'laptop', titre: 'Ordinateurs portables', texte: "Modèles bureautique, étudiants et professionnels, configurés et prêts à l'emploi.", ref: 'HP · Dell · Lenovo · Asus' },
  { icone: 'desktop', titre: 'PC de bureau et écrans', texte: 'Unités centrales, tout-en-un et moniteurs pour postes de travail.', ref: 'Écrans 19" à 27"' },
  { icone: 'printer', titre: 'Imprimantes et consommables', texte: "Imprimantes jet d'encre et laser, cartouches, toners et papier.", ref: 'Encre · Toner · Ramettes A4' },
  { icone: 'mouse', titre: 'Accessoires', texte: 'Claviers, souris, câbles, chargeurs, sacoches, clés USB et disques externes.', ref: 'USB · HDMI · Type-C' },
  { icone: 'router', titre: 'Réseau et Wi-Fi', texte: "Routeurs, switchs, points d'accès, câblage RJ45 pour maisons et bureaux.", ref: 'Cat 6 · Wi-Fi 6' },
  { icone: 'camera', titre: 'Vidéosurveillance', texte: 'Caméras, enregistreurs et kits complets, avec installation sur demande.', ref: 'IP · Analogique · Accès mobile' },
];

// Galerie : ajoutez vos photos dans src/assets/photos/ puis importez-les ici,
// ex. `import facade from '../assets/photos/facade.jpg'` et `photo: facade`.
// Sans photo, une illustration s'affiche à la place.
export const galerie = [
  { categorie: 'Boutique', titre: 'Notre boutique', legende: "L'espace de vente à Dakar", scene: 'shop', photo: null, grande: true },
  { categorie: 'Boutique', titre: 'Rayon ordinateurs', legende: 'Portables et PC de bureau en démonstration', scene: 'laptops', photo: null },
  { categorie: 'Atelier', titre: "L'atelier de réparation", legende: 'Diagnostic et remplacement de pièces', scene: 'repair', photo: null },
  { categorie: 'Boutique', titre: 'Imprimantes et consommables', legende: 'Cartouches, toners et papier en stock', scene: 'printers', photo: null },
  { categorie: 'Installations', titre: 'Installation réseau', legende: 'Baie de brassage et câblage chez un client', scene: 'network', photo: null },
  { categorie: 'Installations', titre: 'Vidéosurveillance', legende: "Pose de caméras pour un commerce", scene: 'cctv', photo: null },
];

export const services = [
  { titre: 'Réparation PC et portables', tag: 'Matériel', texte: 'Écran, clavier, charnière, carte mère, alimentation, ventilation.' },
  { titre: 'Installation système et logiciels', tag: 'Logiciel', texte: 'Windows, pilotes, suite bureautique, antivirus, sauvegarde.' },
  { titre: 'Nettoyage et suppression de virus', tag: 'Sécurité', texte: 'Désinfection, optimisation et nettoyage interne de la machine.' },
  { titre: 'Récupération de données', tag: 'Données', texte: "Sur disque dur, SSD ou clé USB endommagés, quand c'est possible." },
  { titre: "Maintenance d'imprimantes", tag: 'Matériel', texte: "Bourrage, tête d'impression, réinitialisation, installation réseau." },
  { titre: 'Installation de postes', tag: 'Sur site', texte: "Mise en service d'ordinateurs Windows, macOS ou Linux, comptes, imprimantes partagées." },
  { titre: 'Réseau, Wi-Fi et câblage', tag: 'Réseau', texte: 'Câblage RJ45, Wi-Fi qui couvre tout le bâtiment, liaison entre plusieurs bureaux.' },
  { titre: 'Sécurité et sauvegarde', tag: 'Sécurité', texte: 'Pare-feu, antivirus, sauvegardes automatiques pour ne jamais perdre vos fichiers.' },
  { titre: 'Assistance à distance', tag: 'À distance', texte: 'Prise en main sécurisée de votre ordinateur pour régler un souci sans vous déplacer.' },
];

export const etapes = [
  { titre: "Vous déposez l'appareil", texte: "En boutique, ou on vient le chercher pour les entreprises. Vous recevez une fiche de dépôt." },
  { titre: 'On fait le diagnostic', texte: "On identifie la panne et ce qu'il faut remplacer ou réinstaller." },
  { titre: 'Vous validez le devis', texte: "Prix en FCFA et délai annoncés à l'avance. Rien n'est fait sans votre accord." },
  { titre: 'On répare et on teste', texte: 'Pièces de qualité et test complet avant la remise.' },
  { titre: 'Vous récupérez votre appareil', texte: "On vous prévient par téléphone ou WhatsApp dès qu'il est prêt." },
];

export const pointsEntreprise = [
  { titre: 'Contrat de maintenance mensuel ou annuel', texte: 'Visites préventives, mises à jour et dépannages inclus, pour un coût fixe et prévisible.' },
  { titre: 'Un interlocuteur unique', texte: 'Matériel, logiciels, réseau, imprimantes : un seul numéro à appeler quand quelque chose ne marche pas.' },
  { titre: 'Intervention rapide', texte: "Assistance à distance immédiate, et déplacement sur site quand c'est nécessaire." },
  { titre: 'Suivi de votre parc', texte: 'Inventaire des postes, licences et garanties, avec des conseils pour vos prochains achats.' },
];

export const atouts = [
  { titre: 'Vente et réparation réunies', texte: 'Vous achetez, on installe, et on reste là quand il faut réparer.' },
  { titre: 'Devis clair', texte: "Le prix est annoncé avant l'intervention, en FCFA." },
  { titre: 'Conseil adapté', texte: 'On vous oriente vers le matériel qui correspond à votre usage et à votre budget.' },
  { titre: 'Particuliers et entreprises', texte: "Du portable d'un étudiant au parc d'une PME." },
];

export const conseils = [
  { theme: 'Entretien', titre: "Chaleur et poussière : protéger son ordinateur portable", texte: "Avec la chaleur, un portable s'encrasse vite. Un nettoyage interne une fois par an évite les surchauffes et les arrêts brutaux." },
  { theme: 'Électricité', titre: 'Pourquoi brancher son PC sur un onduleur', texte: 'Les coupures et les variations de tension abîment les alimentations et les disques. Un onduleur protège le matériel et vos fichiers.' },
  { theme: 'Données', titre: 'La sauvegarde en 3 copies', texte: "Gardez vos fichiers importants sur l'ordinateur, sur un disque externe et dans le cloud. Si l'un lâche, les deux autres restent." },
];

export const typesDemande = [
  'Réparation / dépannage',
  'Achat de matériel',
  'Installation réseau ou vidéosurveillance',
  'Contrat de maintenance entreprise',
];

// Références clients : ajoutez les logos dans src/assets/logos/ puis importez-les ici,
// ex. `import logoX from '../assets/logos/x.png'` et `logo: logoX`.
// N'ajoutez que des clients qui ont donné leur accord pour apparaître sur le site.
export const references = [
  { nom: 'Client 1', secteur: 'Commerce', logo: null },
  { nom: 'Client 2', secteur: 'École', logo: null },
  { nom: 'Client 3', secteur: 'Cabinet', logo: null },
  { nom: 'Client 4', secteur: 'PME', logo: null },
  { nom: 'Client 5', secteur: 'Administration', logo: null },
  { nom: 'Client 6', secteur: 'Hôtellerie', logo: null },
  { nom: 'Client 7', secteur: 'Santé', logo: null },
  { nom: 'Client 8', secteur: 'ONG', logo: null },
];

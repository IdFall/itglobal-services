// Toutes les informations du site sont ici : modifiez ce fichier pour mettre à jour le contenu.
// Source : présentation « PRESENTATION IT GLOBAL SERVICES 01 » (mai 2026).
// Les valeurs marquées `provisoire: true` sont encore à confirmer avec l'entreprise.

import boutique from '../assets/photos/boutique-logo.webp';
import portablesDell from '../assets/photos/portables-dell.webp';
import atelier from '../assets/photos/atelier-reparation.webp';
import imprimante from '../assets/photos/imprimante.webp';
import techCablage from '../assets/photos/technicien-cablage.webp';
import techChantier from '../assets/photos/technicien-chantier.webp';
import portableHp from '../assets/photos/portable-hp.webp';
import pcBureau from '../assets/photos/pc-bureau.webp';
import serveur from '../assets/photos/serveur-proliant.webp';
import casque from '../assets/photos/accessoires-casque.webp';
import papeterie from '../assets/photos/papeterie.webp';
import formationBureautique from '../assets/photos/formation-bureautique.webp';
import formationReseaux from '../assets/photos/formation-reseaux.webp';

import arla from '../assets/logos/arla.webp';
import fidelia from '../assets/logos/fidelia.webp';
import eaConsulting from '../assets/logos/ea-consulting.webp';
import bis from '../assets/logos/british-international-school.webp';
import africaAssistance from '../assets/logos/africa-assistance.webp';
import sika from '../assets/logos/sika.webp';
import scm from '../assets/logos/scm-darussalam.webp';

import kaspersky from '../assets/logiciels/kaspersky.webp';
import office365 from '../assets/logiciels/office365.webp';
import windows from '../assets/logiciels/windows.webp';
import macos from '../assets/logiciels/macos.webp';
import sage from '../assets/logiciels/sage-saari.webp';
import glpi from '../assets/logiciels/glpi.webp';

export const contact = {
  telephone: '+221 77 429 67 20',
  whatsapp: '221774296720',
  adresse: '138, Centre commercial El Mansour, Grand Dakar',
  ville: 'Grand Dakar',
  email: 'itglobalservices3@gmail.com',
  facebook: 'https://www.facebook.com/itglobalservices.sn/',
  rc: 'SN-DKR-2022-A-1631',
  ninea: '00912668',
  horaires: [
    { jours: 'Lun – Ven', heures: '09:00 – 19:00', provisoire: true },
    { jours: 'Samedi', heures: '09:00 – 14:00', provisoire: true },
    { jours: 'Dimanche', heures: 'Fermé', provisoire: true },
  ],
};

export const stats = [
  { valeur: '2022', libelle: 'Entreprise immatriculée à Dakar' },
  { valeur: 'Toutes marques', libelle: 'PC, portables, serveurs, imprimantes' },
  { valeur: '3 niveaux', libelle: 'Maintenance préventive, curative et évolutive' },
  { valeur: '5 pôles', libelle: 'Maintenance, électronique, réseaux, ventes, communication' },
];

export const produits = [
  { photo: portableHp, titre: 'Ordinateurs portables', texte: 'Des marques reconnues pour leur performance et leur fiabilité, pour les professionnels comme pour les étudiants.', ref: 'HP · Dell · Lenovo · MacBook' },
  { photo: pcBureau, titre: 'Ordinateurs fixes', texte: 'PC de bureau robustes et ordinateurs All-in-One, qui regroupent unité centrale et écran pour gagner de la place.', ref: 'PC bureau · All-in-One' },
  { photo: serveur, titre: 'Serveurs', texte: "Pour centraliser, sécuriser et partager les données de l'entreprise, héberger vos applications et gérer vos utilisateurs.", ref: 'HP ProLiant' },
  { photo: imprimante, titre: 'Imprimantes et consommables', texte: 'Imprimantes laser et jet d’encre, cartouches, toners et consommables informatiques.', ref: 'Laser · Jet d’encre · Toners' },
  { photo: casque, titre: 'Accessoires', texte: 'Casques, batteries externes, claviers, souris, câbles et tous les accessoires du quotidien.', ref: 'Audio · Énergie · Connectique' },
  { photo: papeterie, titre: 'Papeterie', texte: 'Classeurs, cahiers, fournitures de bureau et articles scolaires.', ref: 'Bureau · Scolaire' },
];

export const logiciels = [
  { logo: kaspersky, nom: 'Kaspersky', texte: 'Protection contre les virus et menaces en ligne.' },
  { logo: office365, nom: 'Microsoft 365', texte: 'Suite bureautique et outils collaboratifs.' },
  { logo: windows, nom: 'Microsoft Windows', texte: 'Installation et mise à jour du système.' },
  { logo: macos, nom: 'macOS', texte: 'Le système des ordinateurs Apple.' },
  { logo: sage, nom: 'Sage Saari', texte: 'Gestion comptable, facturation et paie.' },
  { logo: glpi, nom: 'GLPI', texte: 'Suivi des tickets et du parc informatique.' },
];

// Galerie : photos par défaut issues de la présentation. Chaque image peut être remplacée
// depuis le tableau de bord (/admin.html) sans toucher au code.
export const galerie = [
  { categorie: 'Boutique', titre: 'IT Global Services', legende: 'Vente, maintenance et réseaux à Grand Dakar', scene: 'shop', photo: boutique, grande: true },
  { categorie: 'Boutique', titre: 'Ordinateurs portables', legende: 'HP, Dell, Lenovo et MacBook', scene: 'laptops', photo: portablesDell },
  { categorie: 'Atelier', titre: 'Maintenance hardware', legende: 'Diagnostic et remplacement de pièces', scene: 'repair', photo: atelier },
  { categorie: 'Boutique', titre: 'Imprimantes et consommables', legende: 'Imprimantes, toners et cartouches', scene: 'printers', photo: imprimante },
  { categorie: 'Installations', titre: 'Câblage informatique', legende: 'Travaux de câblage réalisés par notre équipe', scene: 'network', photo: techCablage },
  { categorie: 'Installations', titre: 'Sur le chantier', legende: 'Intervention de notre équipe chez un client', scene: 'cctv', photo: techChantier },
];

// Les 5 axes d'intervention
export const services = [
  { titre: 'Maintenance informatique', tag: 'Soft et hard', texte: 'PC, ordinateurs portables toutes marques, serveurs, imprimantes, etc.' },
  { titre: 'Électronique', tag: 'Sécurité', texte: 'Installation et configuration de caméras de vidéosurveillance et de systèmes de contrôle d’accès sécurisés.' },
  { titre: 'Réseaux informatiques', tag: 'Réseau', texte: 'Câblage, maintenance, administration réseau et déploiement des outils collaboratifs Microsoft 365.' },
  { titre: 'Ventes', tag: 'Boutique', texte: 'Ordinateurs de marque, accessoires et consommables informatiques.' },
  { titre: 'Communication et marketing', tag: 'Digital', texte: 'Conception de sites web et impression numérique sur objets.' },
];

export const etapes = [
  { titre: "Vous déposez l'appareil", texte: 'En boutique au Centre commercial El Mansour, ou nous intervenons sur site pour les entreprises.' },
  { titre: 'Nous faisons le diagnostic', texte: "Nous identifions la panne, logicielle ou matérielle, et ce qu'il faut remplacer." },
  { titre: 'Vous validez le devis', texte: "Le prix et le délai sont annoncés avant l'intervention." },
  { titre: 'Nous réparons et testons', texte: 'Remplacement des pièces nécessaires et test complet avant la remise.' },
  { titre: 'Vous récupérez votre appareil', texte: "Nous vous prévenons par téléphone ou WhatsApp dès qu'il est prêt." },
];

// Méthodes appliquées aux clients sous contrat de maintenance
export const pointsEntreprise = [
  { titre: 'Maintenance préventive', texte: 'Vérification des parties électroniques, entretien des machines et analyse de l’état du réseau informatique.' },
  { titre: 'Maintenance curative', texte: 'Intervention sur site, prise en charge de la réparation et remplacement des pièces de rechange nécessaires.' },
  { titre: 'Maintenance évolutive', texte: 'Amélioration et normalisation de l’environnement technique, mises à jour système, extensions mémoire et formation bureautique.' },
];

export const atouts = [
  { titre: 'Une équipe jeune et compétente', texte: 'Une équipe dynamique, disponible pour toutes vos demandes liées à notre domaine d’intervention.' },
  { titre: 'Un service après-vente responsable', texte: 'Nous faisons le lien entre les clients, les marques et les fabricants d’équipements informatiques.' },
  { titre: 'Du matériel de qualité certifiée', texte: 'Ordinateurs et matériels informatiques de marques reconnues.' },
  { titre: 'Un accompagnement dans la durée', texte: 'Nous vous accompagnons à travers les mutations technologiques de l’informatique et de la communication.' },
];

export const formations = [
  { photo: formationBureautique, titre: 'Secrétariat bureautique', points: ['Word (rapports)', 'Excel (calculs)', 'PowerPoint (présentations)', 'Internet et messagerie', 'Outils collaboratifs Microsoft 365'] },
  { photo: atelier, titre: 'Pratique en maintenance', points: ['Informatique', 'Ingénierie', 'Hardware et software', 'Sécurité', 'Réseaux'] },
  { photo: formationReseaux, titre: 'Administration réseaux', points: ['Câblage', 'Configuration', 'Partage', 'Sécurité'] },
];

export const conseils = [
  { theme: 'Entretien', titre: "Chaleur et poussière : protéger son ordinateur portable", texte: "Avec la chaleur, un portable s'encrasse vite. Un nettoyage interne une fois par an évite les surchauffes et les arrêts brutaux." },
  { theme: 'Électricité', titre: 'Pourquoi brancher son PC sur un onduleur', texte: 'Les coupures et les variations de tension abîment les alimentations et les disques. Un onduleur protège le matériel et vos fichiers.' },
  { theme: 'Données', titre: 'La sauvegarde en 3 copies', texte: "Gardez vos fichiers importants sur l'ordinateur, sur un disque externe et dans le cloud. Si l'un lâche, les deux autres restent." },
];

export const typesDemande = [
  'Réparation / maintenance',
  'Achat de matériel',
  'Vidéosurveillance ou contrôle d’accès',
  'Réseau informatique',
  'Contrat de maintenance entreprise',
  'Formation',
  'Site web ou impression',
];

// Références clients (logos de la présentation). Chaque logo peut être remplacé depuis le tableau de bord.
export const references = [
  { nom: 'Arla', secteur: 'Agroalimentaire', logo: arla },
  { nom: 'Fidelia Risk Solution', secteur: 'Assurance', logo: fidelia },
  { nom: "E'A Consulting", secteur: 'Conseil', logo: eaConsulting },
  { nom: 'British International School', secteur: 'Éducation', logo: bis },
  { nom: 'Africa Assistance Internationale', secteur: 'Assistance', logo: africaAssistance },
  { nom: 'Sika', secteur: 'Construction', logo: sika },
  { nom: 'SCM Darussalam', secteur: 'Services', logo: scm },
  { nom: 'Votre entreprise ?', secteur: 'Rejoignez-nous', logo: null },
];

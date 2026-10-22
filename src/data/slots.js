import { galerie, references } from './site.js';
import techEchelle from '../assets/photos/technicien-echelle.webp';
import cablesReseau from '../assets/photos/cables-reseau.webp';

// Emplacements d'images modifiables depuis le tableau de bord (/admin.html)
export const sections = [
  {
    titre: "Image d'accueil (en haut de page)",
    taille: 'Format portrait 4:5, idéalement 1200 × 1500 px : une personne, par exemple un technicien ou l\'équipe',
    largeurMax: 1200,
    slots: [{ id: 'hero', nom: "Photo de l'accueil", defautPhoto: techEchelle }],
  },
  {
    titre: 'Galerie « En images »',
    taille: 'Format paysage 4:3, idéalement 1600 × 1200 px (JPG ou WebP)',
    largeurMax: 1600,
    slots: galerie.map((g) => ({ id: `galerie-${g.scene}`, nom: g.titre, scene: g.scene, defautPhoto: g.photo })),
  },
  {
    titre: 'Section Contrat de maintenance',
    taille: 'Format paysage 4:3, idéalement 1200 × 900 px (JPG ou WebP)',
    largeurMax: 1200,
    slots: [{ id: 'entreprises', nom: 'Image de la section Contrat de maintenance', defautPhoto: cablesReseau }],
  },
  {
    titre: 'Logos clients « Ils nous ont fait confiance »',
    taille: 'Logo horizontal, environ 400 × 160 px, PNG à fond transparent ou SVG',
    largeurMax: 800,
    avecNom: true,
    slots: references.map((r, i) => ({ id: `reference-${i + 1}`, nom: `Logo ${i + 1}`, defaut: r.nom, defautPhoto: r.logo })),
  },
];

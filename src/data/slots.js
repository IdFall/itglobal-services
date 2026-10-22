import { galerie, references } from './site.js';

// Emplacements d'images modifiables depuis le tableau de bord (/admin.html)
export const sections = [
  {
    titre: "Image d'accueil (en haut de page)",
    taille: 'Format portrait 4:5, idéalement 1200 × 1500 px : une personne, par exemple un technicien ou l\'équipe',
    largeurMax: 1200,
    slots: [{ id: 'hero', nom: "Photo de l'accueil", scene: 'tech' }],
  },
  {
    titre: 'Galerie « En images »',
    taille: 'Format paysage 4:3, idéalement 1600 × 1200 px (JPG ou WebP)',
    largeurMax: 1600,
    slots: galerie.map((g) => ({ id: `galerie-${g.scene}`, nom: g.titre, scene: g.scene })),
  },
  {
    titre: 'Section Entreprises',
    taille: 'Format paysage 4:3, idéalement 1200 × 900 px (JPG ou WebP)',
    largeurMax: 1200,
    slots: [{ id: 'entreprises', nom: 'Image de la section Entreprises', scene: 'network' }],
  },
  {
    titre: 'Logos clients « Ils nous ont fait confiance »',
    taille: 'Logo horizontal, environ 400 × 160 px, PNG à fond transparent ou SVG',
    largeurMax: 800,
    avecNom: true,
    slots: references.map((r, i) => ({ id: `reference-${i + 1}`, nom: `Logo ${i + 1}`, defaut: r.nom })),
  },
];

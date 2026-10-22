import { galerie, references } from './site.js';

// Emplacements d'images modifiables depuis le tableau de bord (/admin.html)
export const sections = [
  {
    titre: 'Galerie « En images »',
    slots: galerie.map((g) => ({ id: `galerie-${g.scene}`, nom: g.titre, scene: g.scene })),
  },
  {
    titre: 'Section Entreprises',
    slots: [{ id: 'entreprises', nom: 'Image de la section Entreprises', scene: 'network' }],
  },
  {
    titre: 'Logos clients « Ils nous ont fait confiance »',
    avecNom: true,
    slots: references.map((r, i) => ({ id: `reference-${i + 1}`, nom: `Logo ${i + 1}`, defaut: r.nom })),
  },
];

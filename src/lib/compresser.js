// Réduit et compresse une image dans le navigateur avant l'envoi.
// Les SVG sont envoyés tels quels. Retourne { blob, ext } ou lève une erreur si l'image est illisible.

const versBlob = (canvas, type, qualite) => new Promise((ok) => canvas.toBlob(ok, type, qualite));

async function decoder(fichier) {
  if ('createImageBitmap' in window) {
    try { return await createImageBitmap(fichier); } catch { /* on essaie avec <img> */ }
  }
  const url = URL.createObjectURL(fichier);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function compresser(fichier, largeurMax) {
  if (fichier.type === 'image/svg+xml') return { blob: fichier, ext: 'svg' };

  const img = await decoder(fichier);
  const echelle = Math.min(1, largeurMax / img.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(img.width * echelle);
  canvas.height = Math.round(img.height * echelle);
  canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

  // WebP garde la transparence (logos) et pèse peu ; JPEG en secours si le navigateur ne sait pas l'encoder
  const webp = await versBlob(canvas, 'image/webp', 0.82);
  if (webp && webp.type === 'image/webp') return { blob: webp, ext: 'webp' };
  const jpeg = await versBlob(canvas, 'image/jpeg', 0.82);
  return { blob: jpeg, ext: 'jpg' };
}

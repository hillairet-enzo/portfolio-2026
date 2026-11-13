// Vérifie si une image a bien été déposée dans public/images/.
const fichiers = Object.keys(import.meta.glob('/public/images/**/*.{jpg,jpeg,png,webp,avif}'));

export const imageExiste = (fichier: string) => fichiers.includes(`/public/images/${fichier}`);

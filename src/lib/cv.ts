import { profil } from '../data/profil';

// Les boutons « CV » ne s'affichent que si le PDF est bien dans public/.
const pdfs = Object.keys(import.meta.glob('/public/*.pdf'));

export const aCv = pdfs.includes(`/public${profil.cv}`);

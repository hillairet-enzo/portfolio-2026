// Animations de la page : apparition au défilement, titres mot par mot, parallaxe du hero,
// barre de progression, reflet du verre qui suit la souris, boutons « magnétiques ».
// Tout est coupé si le système demande moins d'animations.
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
const racine = document.documentElement;

const borne = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));

// ───── barre de progression + parallaxe du hero (toutes les pages) ─────
// On écrit directement sur les éléments concernés (jamais sur <html>) pour ne pas recalculer
// les styles de toute la page à chaque image, et seulement transform / opacity (rendu par la carte graphique).
const barre = document.querySelector<HTMLElement>('.progres');
const hero = document.querySelector<HTMLElement>('.hero');
const image = hero?.querySelector<HTMLElement>('.hero__image') ?? null;
const contenuHero = hero?.querySelector<HTMLElement>('.hero__centre, .hero__corps') ?? null;
let attente = false;
function majDefilement() {
  attente = false;
  const y = window.scrollY;
  if (barre) {
    const total = racine.scrollHeight - window.innerHeight;
    barre.style.transform = `scaleX(${total > 0 ? borne(y / total) : 0})`;
  }
  if (hero && !reduit) {
    const h = hero.offsetHeight || 1;
    if (y > h * 1.1 && hero.dataset.fini === '1') return; // hero hors écran : plus rien à faire
    const p = borne(y / h);
    hero.dataset.fini = y > h ? '1' : '0';
    if (image) {
      image.style.translate = `0 ${p * h * 0.12}px`;
      image.style.scale = String(1 + p * 0.08);
    }
    if (contenuHero) {
      contenuHero.style.opacity = String(borne(1 - p * 1.5));
      contenuHero.style.translate = `0 ${-p * 56}px`;
    }
  }
}
majDefilement();
window.addEventListener(
  'scroll',
  () => {
    if (!attente) {
      attente = true;
      requestAnimationFrame(majDefilement);
    }
  },
  { passive: true },
);

if (!reduit) {
  // ───── éléments qui apparaissent quand on arrive dessus ─────
  const cibles: [string, string][] = [
    ['.etiquette', 'etiquette'],
    ['.ap__texte', 'texte'],
    ['.ap__large .photo, .ap__haute .photo, .carte .photo', 'photo'],
    ['.carte__corps', 'texte'],
    ['.galerie__trio article', 'texte'],
    ['.arc__commandes', 'texte'],
    ['.carte--tous', 'texte'],
    ['.carrousel__commandes', 'texte'],
    ['.methode__intro p', 'texte'],
    ['.methode__liste li', 'texte'],
    ['.contact-bloc .contenu > *', 'texte'],
    ['.contact-page > *', 'texte'],
    ['.projet-corps > *', 'texte'],
    ['.pj__image .photo', 'photo'],
    ['.pj__fiche > div', 'texte'],
    ['.pj__entete, .pj__choix, .pj__texte, .pj__medias > *', 'texte'],
    ['.pj__choix li', 'texte'],
    ['.pj__suivant', 'texte'],
    ['.cle', 'texte'],
    ['.tel', 'texte'],
    ['.pp-next', 'texte'],
  ];
  const observes: HTMLElement[] = [];
  // un élément rogné (clip-path) peut ne jamais être vu comme « visible » : on observe alors son parent
  const suivi = new Map<Element, HTMLElement>();
  for (const [sel, type] of cibles) {
    document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
      if (el.closest('.hero')) return;
      const freres = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.matches(sel) || c === el) : [el];
      el.dataset.r = type;
      el.style.setProperty('--d', String(Math.max(0, freres.indexOf(el))));
      const guet = type === 'photo' && el.parentElement ? el.parentElement : el;
      suivi.set(guet, el);
      observes.push(guet);
    });
  }

  // titres coupés mot par mot (le texte reste lisible par les lecteurs d'écran)
  document
    .querySelectorAll<HTMLElement>('.titre-edito, .methode__intro h2, .contact-bloc h2, .carte--tous .titre-m')
    .forEach((titre) => {
      if (titre.closest('.hero')) return;
      const texte = (titre.textContent ?? '').trim();
      titre.setAttribute('aria-label', texte);
      titre.textContent = '';
      texte.split(/\s+/).forEach((mot, i) => {
        const enveloppe = document.createElement('span');
        enveloppe.className = 'mot';
        enveloppe.setAttribute('aria-hidden', 'true');
        const interieur = document.createElement('span');
        interieur.textContent = mot;
        interieur.style.setProperty('--m', String(i));
        enveloppe.append(interieur);
        titre.append(enveloppe, ' ');
      });
      titre.dataset.mots = '';
      suivi.set(titre, titre);
      observes.push(titre);
    });

  racine.classList.add('anime');
  const observateur = new IntersectionObserver(
    (entrees) => {
      for (const e of entrees) {
        if (e.isIntersecting) {
          (suivi.get(e.target) ?? (e.target as HTMLElement)).classList.add('vu');
          observateur.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  observes.forEach((el) => observateur.observe(el));

  // ───── reflet du verre qui suit la souris ─────
  let verreEnCours: HTMLElement | null = null;
  let pointeur: PointerEvent | null = null;
  document.addEventListener(
    'pointermove',
    (e) => {
      const verre = (e.target as HTMLElement).closest<HTMLElement>('.verre');
      if (!verre) return;
      pointeur = e;
      if (verreEnCours) return;
      verreEnCours = verre;
      requestAnimationFrame(() => {
        if (pointeur && verreEnCours) {
          const r = verreEnCours.getBoundingClientRect();
          verreEnCours.style.setProperty('--mx', `${pointeur.clientX - r.left}px`);
          verreEnCours.style.setProperty('--my', `${pointeur.clientY - r.top}px`);
        }
        verreEnCours = null;
      });
    },
    { passive: true },
  );

  // le bandeau d'outils ne tourne que lorsqu'il est visible
  const bandeau = document.querySelector<HTMLElement>('.marquee');
  if (bandeau) {
    new IntersectionObserver(([e]) => {
      bandeau.classList.toggle('en-pause', !e.isIntersecting);
    }).observe(bandeau);
  }

  // ───── boutons « magnétiques » ─────
  if (matchMedia('(hover: hover)').matches) {
    document.querySelectorAll<HTMLElement>('.bouton--blanc, .bouton--plein, .bouton--verre, .hero__defiler').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        b.style.translate = `${dx * 10}px ${dy * 8}px`;
      });
      b.addEventListener('pointerleave', () => {
        b.style.translate = '';
      });
    });
  }
}

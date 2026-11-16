// Galerie en éventail à défilement infini (boucle).
// La position est virtuelle : pavé tactile (défilement horizontal), doigt, glisser à la souris, flèches, clavier.
// Chaque carte est placée selon sa distance au centre ; seuls transform / translate / opacity bougent.
const piste = document.querySelector<HTMLElement>('[data-arc]');
if (piste) {
  const cartes = Array.from(piste.querySelectorAll<HTMLElement>('.arc__carte'));
  const n = cartes.length;
  const scenes = cartes.map((c) => c.querySelector<HTMLElement>('.arc__scene')!);
  const images = cartes.map((c) => c.querySelector<HTMLElement>('.arc__img')!);
  const prec = document.querySelector<HTMLButtonElement>('[data-arc-prec]');
  const suiv = document.querySelector<HTMLButtonElement>('[data-arc-suiv]');
  const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let pos = Number(piste.dataset.depart ?? 0); // position affichée (en cartes)
  let cible = pos; // position visée
  let tourne = false;
  let dernier = 0;
  let minuterie = 0;

  const ramene = (x: number) => x - n * Math.round(x / n); // ramène dans [-n/2, n/2]
  const largeur = () => cartes[0].offsetWidth;

  function dessine() {
    const cw = largeur();
    const esp = Math.max(1, Math.min(1.7, 9 / n)); // peu de projets : on écarte les cartes pour remplir l'écran
    const premier = 0.8 * cw * (1 + (esp - 1) * 0.55); // écart centre → première voisine
    const suite = 0.43 * cw * esp; // écart entre les suivantes
    cartes.forEach((c, i) => {
      const t = ramene(i - pos);
      const u = Math.abs(t);
      const sg = Math.sign(t) || 1;
      const X = sg * (premier * Math.min(u, 1) + suite * Math.max(0, u - 1));
      const angle = reduit ? 0 : -sg * 64 * Math.sin(Math.min(u * 1.4, 1) * (Math.PI / 2)); // bord extérieur vers nous
      const echelle = 1.12 - 0.3 * Math.min(u, 1) - 0.02 * Math.max(0, Math.min(u, 6) - 1);
      const bord = Math.max(0, Math.min(1, (n / 2 - u) * 1.6)); // la carte qui boucle apparaît en fondu
      c.style.translate = `${X.toFixed(1)}px 0`;
      c.style.zIndex = String(Math.round(60 - u * 10));
      c.style.opacity = bord.toFixed(2);
      c.style.visibility = bord === 0 ? 'hidden' : 'visible';
      c.style.setProperty('--l', Math.max(0, 1 - u * 1.6).toFixed(2));
      scenes[i].style.perspectiveOrigin = `${(cw / 2 - X).toFixed(1)}px 50%`;
      images[i].style.transform = `rotateY(${angle.toFixed(2)}deg) scale(${echelle.toFixed(3)})`;
    });
  }

  function image(maintenant: number) {
    const dt = Math.min(48, maintenant - dernier || 16);
    dernier = maintenant;
    const ecart = cible - pos;
    pos = reduit || Math.abs(ecart) < 0.0008 ? cible : pos + ecart * (1 - Math.exp(-dt / 95));
    dessine();
    if (pos !== cible) requestAnimationFrame(image);
    else tourne = false;
  }
  function va() {
    if (!tourne) {
      tourne = true;
      dernier = performance.now();
      requestAnimationFrame(image);
    }
  }
  const aller = (pas: number) => {
    cible = Math.round(cible) + pas;
    va();
  };

  // pavé tactile / molette horizontale
  const pas = () => largeur() * 0.6;
  piste.addEventListener(
    'wheel',
    (e) => {
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
      if (!horizontal) return; // le défilement vertical de la page reste libre
      e.preventDefault();
      cible += (e.shiftKey && !e.deltaX ? e.deltaY : e.deltaX) / pas();
      va();
      clearTimeout(minuterie);
      minuterie = window.setTimeout(() => {
        cible = Math.round(cible);
        va();
      }, 110);
    },
    { passive: false },
  );

  // doigt et souris : on glisse
  let depart: { x: number; p: number; bouge: boolean; hist: { x: number; t: number }[] } | null = null;
  piste.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    depart = { x: e.clientX, p: cible, bouge: false, hist: [{ x: e.clientX, t: e.timeStamp }] };
  });
  window.addEventListener('pointermove', (e) => {
    if (!depart) return;
    const dx = e.clientX - depart.x;
    if (!depart.bouge && Math.abs(dx) > 6) {
      depart.bouge = true;
      piste.classList.add('glisse');
    }
    if (depart.bouge) {
      cible = depart.p - dx / pas();
      depart.hist.push({ x: e.clientX, t: e.timeStamp });
      if (depart.hist.length > 6) depart.hist.shift();
      va();
    }
  });
  const fin = () => {
    if (!depart) return;
    if (depart.bouge) {
      piste.classList.remove('glisse');
      const h = depart.hist;
      const a = h[0];
      const b = h[h.length - 1];
      const v = b.t > a.t ? (b.x - a.x) / (b.t - a.t) : 0; // px par ms
      cible = Math.round(cible - Math.max(-3, Math.min(3, (v * 220) / pas())));
      va();
      piste.addEventListener('click', (ev) => ev.preventDefault(), { capture: true, once: true });
    }
    depart = null;
  };
  window.addEventListener('pointerup', fin);
  window.addEventListener('pointercancel', fin);

  // un clic sur une carte du côté la ramène au centre ; sur la carte du centre, le lien s'ouvre
  cartes.forEach((c, i) => {
    c.addEventListener('click', (ev) => {
      const t = ramene(i - cible);
      if (Math.abs(t) > 0.4) {
        ev.preventDefault();
        cible += Math.round(t);
        va();
      }
    });
  });

  // flèches du clavier : actives sur toute la page tant que la galerie est affichée
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    const cible_ = e.target as HTMLElement | null;
    if (cible_?.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (piste.offsetParent === null || piste.closest('[data-vue="liste"]')) return; // vue liste : rien à faire défiler
    e.preventDefault();
    aller(e.key === 'ArrowLeft' ? -1 : 1);
  });
  prec?.addEventListener('click', () => aller(-1));
  suiv?.addEventListener('click', () => aller(1));
  window.addEventListener('resize', dessine);
  dessine();
}

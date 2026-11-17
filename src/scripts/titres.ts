// Effet « afficheur à lettres » sur les titres : chaque lettre change quelques fois puis se fixe, quand le titre entre à l'écran.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const piscine = (l: string) => (/[ilj]/i.test(l) ? 'ijlilj' : /[rtf]/i.test(l) ? 'rtfrtf' : l === 'H' ? 'HNUDKOB' : /[A-ZÀ-Ý]/.test(l) ? 'EBPRSKZ' : 'aceosuz');
  const lettre = /[\p{L}\p{N}]/u;
  const FILLERS = 3;

  const decouper = (titre: HTMLElement) => {
    if (titre.dataset.tl) return;
    titre.dataset.tl = '1';
    const plein = (titre.textContent || '').replace(/\s+/g, ' ').trim();
    const walker = document.createTreeWalker(titre, NodeFilter.SHOW_TEXT);
    const noeuds: Text[] = [];
    while (walker.nextNode()) noeuds.push(walker.currentNode as Text);
    let i = 0;
    for (const n of noeuds) {
      const t = n.nodeValue || '';
      if (!t.trim()) continue;
      const frag = document.createDocumentFragment();
      t.split(/([ \t\n\r]+)/).forEach((part) => {
        if (!part) return;
        if (/^[ \t\n\r]+$/.test(part)) { frag.append(' '); return; }
        const mot = document.createElement('span');
        mot.className = 'rw';
        mot.setAttribute('aria-hidden', 'true');
        for (const c of part) {
          if (!lettre.test(c)) { mot.append(c); continue; }
          const pool = piscine(c);
          let html = '';
          for (let k = 1; k <= FILLERS; k++) html += `<i class="f" style="--k:${k}">${pool[(i * 7 + k * 5) % pool.length]}</i>`;
          const cell = document.createElement('span');
          cell.className = 'rl';
          cell.innerHTML = `<b style="--i:${i};--n:${FILLERS}">${html}<i class="fin"></i></b>`;
          (cell.querySelector('.fin') as HTMLElement).textContent = c;
          mot.append(cell);
          i++;
        }
        frag.append(mot);
      });
      n.replaceWith(frag);
    }
    const sr = document.createElement('span');
    sr.className = 'tl-sr';
    sr.textContent = plein;
    titre.append(sr);
    titre.classList.add('tl');
  };

  const titres = Array.from(document.querySelectorAll<HTMLElement>('h1, h2, .pp-tab__nom')).filter(
    (t) => parseFloat(getComputedStyle(t).fontSize) >= 24 && !t.closest('.chargeur, .menu, .pied, .ct__titre') && !t.classList.contains('ct__titre') && !t.hasAttribute('data-sans-effet'),
  );
  const go = () => {
    const io = new IntersectionObserver((entrees) => {
      for (const e of entrees) if (e.isIntersecting) { (e.target as HTMLElement).classList.add('tl--go'); io.unobserve(e.target); }
    }, { threshold: 0.25 });
    titres.forEach((t) => { decouper(t); io.observe(t); });
  };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(go); else go();
}

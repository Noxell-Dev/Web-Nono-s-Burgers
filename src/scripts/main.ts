/**
 * JS de cliente (progresivo): menú móvil, pestañas de la carta,
 * acordeón de FAQ, carrusel de la galería y estado de la cabecera
 * al hacer scroll.
 * Todo funciona con teclado; sin JS el contenido sigue visible.
 */

document.documentElement.classList.add('js');

function initMobileNav(): void {
  const toggle = document.getElementById('nav-toggle');
  const panel = document.getElementById('mobile-menu');
  if (!(toggle instanceof HTMLButtonElement) || !panel) return;

  const openLabel = toggle.dataset.openLabel ?? 'Abrir menú';
  const closeLabel = toggle.dataset.closeLabel ?? 'Cerrar menú';
  const iconOpen = toggle.querySelector('[data-icon-open]');
  const iconClose = toggle.querySelector('[data-icon-close]');

  const setOpen = (open: boolean): void => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? closeLabel : openLabel);
    panel.hidden = !open;
    iconOpen?.classList.toggle('hidden', open);
    iconClose?.classList.toggle('hidden', !open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initMenuTabs(): void {
  const tablist = document.querySelector('[role="tablist"]');
  if (!(tablist instanceof HTMLElement)) return;

  const tabs = Array.from(tablist.querySelectorAll<HTMLElement>('[role="tab"]'));
  const panels = tabs.map((tab) =>
    document.getElementById(tab.getAttribute('aria-controls') ?? ''),
  );

  const select = (active: HTMLElement): void => {
    tabs.forEach((tab) => {
      const selected = tab === active;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      if (panel) panel.hidden = panel.id !== active.getAttribute('aria-controls');
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (event) => {
      let target: number | null = null;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') target = 0;
      else if (event.key === 'End') target = tabs.length - 1;
      if (target !== null) {
        event.preventDefault();
        tabs[target].focus();
        select(tabs[target]);
      }
    });
  });
}

function initAccordion(): void {
  document.querySelectorAll('[data-accordion]').forEach((root) => {
    const button = root.querySelector('button');
    if (!(button instanceof HTMLButtonElement)) return;
    button.addEventListener('click', () => {
      const open = root.getAttribute('data-accordion') === 'open';
      root.setAttribute('data-accordion', open ? 'closed' : 'open');
      button.setAttribute('aria-expanded', String(!open));
    });
  });
}

function initHeaderScroll(): void {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = (): void => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initCarousel(): void {
  const root = document.querySelector('[data-carousel]');
  if (!(root instanceof HTMLElement)) return;
  const track = root.querySelector('[data-carousel-track]');
  if (!(track instanceof HTMLElement)) return;
  const slides = Array.from(track.querySelectorAll('figure'));
  const prev = root.querySelector('[data-carousel-prev]');
  const next = root.querySelector('[data-carousel-next]');
  const dots = Array.from(
    root.querySelectorAll<HTMLButtonElement>('[data-carousel-dot]'),
  );
  if (slides.length === 0) return;

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  let index = 0;

  const update = (): void => {
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle('bg-yolk-400', active);
      dot.classList.toggle('bg-white/20', !active);
      if (active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  };

  const goTo = (nextIndex: number): void => {
    index = (nextIndex + slides.length) % slides.length;
    track.scrollTo({
      left: slides[index].offsetLeft - track.offsetLeft,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
    update();
  };

  prev?.addEventListener('click', () => goTo(index - 1));
  next?.addEventListener('click', () => goTo(index + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // Al deslizar con el dedo o la rueda, actualiza el punto activo.
  track.addEventListener(
    'scroll',
    () => {
      const middle = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      slides.forEach((slide, i) => {
        const center =
          slide.offsetLeft - track.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(center - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });
      if (best !== index) {
        index = best;
        update();
      }
    },
    { passive: true },
  );

  root.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(index + 1);
    }
  });

  update();
}

initMobileNav();
initMenuTabs();
initAccordion();
initHeaderScroll();
initCarousel();

/**
 * All page interactions, wired after components mount.
 * theme · nav · progress · reveals · counters · terminal typing · navspy
 */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── theme ────────────────────────────────────────────────── */
function initTheme() {
  const root = document.documentElement;
  const toggle = $('#theme-toggle');

  const syncA11y = () =>
    toggle?.setAttribute('aria-pressed', String(root.dataset.theme === 'latte'));
  syncA11y();

  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'mocha' ? 'latte' : 'mocha';
    root.classList.add('theme-fade');
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (_) { /* private mode */ }
    syncA11y();
    setTimeout(() => root.classList.remove('theme-fade'), 340);
  });
}

/* ── mobile nav ───────────────────────────────────────────── */
function initNav() {
  const navToggle = $('#nav-toggle');

  const close = () => {
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  };

  navToggle?.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  $$('#nav-menu a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
  window.addEventListener('resize', () => window.innerWidth >= 900 && close());
}

/* ── header border + scroll progress ──────────────────────── */
function initProgress() {
  const header = $('.site-header');
  const bar = $('#progress-bar');
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 8);
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, y / max) : 0;
      bar.style.transform = `scaleX(${pct})`; // transform, never width
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();
}

/* ── scroll reveals ───────────────────────────────────────── */
function initReveals() {
  const els = $$('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add('in'));
  }
}

/* ── stat counters ────────────────────────────────────────── */
function initCounters() {
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const run = (el) => {
    const target = Number(el.dataset.count || '0');
    if (reducedMotion) {
      el.textContent = String(target);
      return;
    }
    const start = performance.now();
    const frame = (now) => {
      const t = Math.min(1, (now - start) / 1100);
      el.textContent = String(Math.round(easeOut(t) * target));
      if (t < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  const counters = $$('.count');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          run(e.target);
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.6 });
    counters.forEach((el) => io.observe(el));
  } else {
    counters.forEach(run);
  }
}

/* ── hero terminal typing ─────────────────────────────────── */
function initTerminal() {
  const typedEl = $('.typed');
  const outLines = $$('.term-output .t-out');

  const play = () => {
    if (!typedEl) return;
    const text = typedEl.dataset.type || '';

    if (reducedMotion) {
      typedEl.textContent = text;
      outLines.forEach((l) => l.classList.add('show'));
      return;
    }

    let i = 0;
    (function typeChar() {
      if (i <= text.length) {
        typedEl.textContent = text.slice(0, i);
        i += 1;
        setTimeout(typeChar, 34 + Math.random() * 46);
      } else {
        outLines.forEach((line, idx) =>
          setTimeout(() => line.classList.add('show'), 240 + idx * 300));
      }
    })();
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        play();
        io.disconnect();
      }
    }, { threshold: 0.3 });
    const term = $('.hero-terminal');
    if (term) io.observe(term);
    else play();
  } else {
    play();
  }
}

/* ── active nav link per section ──────────────────────────── */
function initNavSpy() {
  const navLinks = $$('.nav-link');
  const sections = navLinks
    .map((l) => document.getElementById(l.dataset.nav))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || !sections.length) return;

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        navLinks.forEach((l) => l.removeAttribute('aria-current'));
        navLinks
          .find((l) => l.dataset.nav === e.target.id)
          ?.setAttribute('aria-current', 'true');
      }
    }
  }, { rootMargin: '-38% 0px -55% 0px' });
  sections.forEach((s) => io.observe(s));
}

/* ── footer year ──────────────────────────────────────────── */
function initYear() {
  const el = $('#year');
  if (el) el.textContent = String(new Date().getFullYear());
}

function enableReveals() {
  document.documentElement.classList.add('js');
}

export function initInteractions() {
  enableReveals();
  initTheme();
  initNav();
  initProgress();
  initReveals();
  initCounters();
  initTerminal();
  initNavSpy();
  initYear();
}

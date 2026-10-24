/* ── helpers ──────────────────────────────────────────────── */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── theme toggle ─────────────────────────────────────────── */
const root = document.documentElement;
const themeToggle = $('#theme-toggle');

function applyThemeA11y(theme) {
  themeToggle?.setAttribute('aria-pressed', String(theme === 'latte'));
}

applyThemeA11y(root.dataset.theme);

themeToggle?.addEventListener('click', () => {
  const next = root.dataset.theme === 'mocha' ? 'latte' : 'mocha';
  root.classList.add('theme-fade');
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (_) {}
  applyThemeA11y(next);
  setTimeout(() => root.classList.remove('theme-fade'), 340);
});

/* ── mobile nav ───────────────────────────────────────────── */
const navToggle = $('#nav-toggle');
const navMenu = $('#nav-menu');

function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

$$('#nav-menu a').forEach((a) => a.addEventListener('click', closeNav));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) closeNav();
});

/* ── header border + scroll progress ──────────────────────── */
const header = $('.site-header');
const progressBar = $('#progress-bar');
let ticking = false;

function onScroll() {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 8);

  if (progressBar) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (y / max) * 100) : 0;
    progressBar.style.width = `${pct}%`;
  }
  ticking = false;
}

window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  },
  { passive: true }
);
onScroll();

/* ── scroll reveals ───────────────────────────────────────── */
const revealEls = $$('.reveal');

if ('IntersectionObserver' in window && !reducedMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

/* ── stat counters ────────────────────────────────────────── */
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

function runCounter(el) {
  const target = Number(el.dataset.count || '0');
  if (reducedMotion) {
    el.textContent = String(target);
    return;
  }
  const dur = 1100;
  const start = performance.now();
  function frame(now) {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = String(Math.round(easeOut(t) * target));
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const counters = $$('.count');
if ('IntersectionObserver' in window) {
  const cio = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          cio.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.6 }
  );
  counters.forEach((el) => cio.observe(el));
} else {
  counters.forEach(runCounter);
}

/* ── hero terminal: type the command, then print the route ── */
const typedEl = $('.typed');
const outLines = $$('.term-output .t-out');

function showTerminal() {
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
      outLines.forEach((line, idx) => {
        setTimeout(() => line.classList.add('show'), 240 + idx * 300);
      });
    }
  })();
}

/* start once the hero is actually visible */
if ('IntersectionObserver' in window) {
  const tio = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        showTerminal();
        tio.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  const heroTerm = $('.hero-terminal');
  if (heroTerm) tio.observe(heroTerm);
  else showTerminal();
} else {
  showTerminal();
}

/* ── active nav link per section ──────────────────────────── */
const navLinks = $$('.nav-link');
const sections = navLinks
  .map((l) => document.getElementById(l.dataset.nav))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const nio = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          navLinks.forEach((l) =>
            l.removeAttribute('aria-current')
          );
          const active = navLinks.find(
            (l) => l.dataset.nav === entry.target.id
          );
          active?.setAttribute('aria-current', 'true');
        }
      }
    },
    { rootMargin: '-38% 0px -55% 0px' }
  );
  sections.forEach((s) => nio.observe(s));
}

/* ── footer year ──────────────────────────────────────────── */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

import { icon } from './icon.js';
import { identity } from '../data/profile.js';

const links = [
  { href: '#about', id: 'about', label: '01·whoami' },
  { href: '#route', id: 'route', label: '02·route' },
  { href: '#projects', id: 'projects', label: '03·projects' },
  { href: '#skills', id: 'skills', label: '04·links' },
  { href: '#contact', id: 'contact', label: '05·ping' },
];

export function header() {
  return `
<header class="site-header">
  <nav class="nav container" aria-label="Primary">
    <a class="brand" href="#top">~/${identity.shortName}<span class="brand-cursor" aria-hidden="true"></span></a>

    <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-menu">
      <span class="sr-only">Toggle navigation</span>
      ${icon('menu', { size: 22, class: 'icon-burger' })}
      ${icon('x', { size: 22, class: 'icon-close' })}
    </button>

    <ul class="nav-menu" id="nav-menu">
      ${links.map((l) => `<li><a class="nav-link" href="${l.href}" data-nav="${l.id}">${l.label}</a></li>`).join('')}
      <li>
        <button class="theme-toggle" id="theme-toggle" aria-label="Switch color theme" aria-pressed="false">
          ${icon('sun', { size: 20, class: 'icon-sun' })}
          ${icon('moon', { size: 20, class: 'icon-moon' })}
        </button>
      </li>
    </ul>
  </nav>
</header>`;
}

export function mountHeader(el) {
  el.innerHTML = header();
}

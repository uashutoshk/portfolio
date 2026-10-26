import { icon } from './icon.js';
import { logoImg } from './logo.js';
import { sectionHead } from './section.js';
import { featured, repos, github } from '../data/projects.js';

function featuredCard(p, i) {
  return `
  <article class="proj-card reveal" style="--d:${(i * 0.08).toFixed(2)}s">
    <div class="proj-chrome" aria-hidden="true">
      <span class="term-dot term-red"></span><span class="term-dot term-yellow"></span><span class="term-dot term-green"></span>
      <span class="proj-file mono">${p.file}</span>
    </div>
    <div class="proj-body">
      <div class="proj-icon${p.iconClass ? ' proj-icon-' + p.iconClass : ''}" aria-hidden="true">${logoImg(p.logo ?? p.icon, { size: 26 }) || icon(p.icon, { size: 23 })}</div>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-desc">${p.description}</p>
      <ul class="proj-tags" aria-label="Technologies">
        ${p.tags.map((t) => `<li>${logoImg(t, { size: 14, cls: 'chip-logo' })}${t}</li>`).join('')}
      </ul>
      <div class="proj-foot">
        ${p.link
          ? `<a class="proj-link mono" href="${p.link.url}" target="_blank" rel="noopener noreferrer">${p.link.label} ${icon('arrow-up-right', { size: 15 })}</a>`
          : `<span class="proj-meta mono">${p.meta}</span>`}
        ${p.status
          ? `<span class="proj-status mono"><span class="status-beacon" aria-hidden="true"></span> ${p.status}</span>`
          : `<span class="proj-meta mono">${p.meta}</span>`}
      </div>
    </div>
  </article>`;
}

function repoCard(r, i) {
  return `
  <a class="repo-card reveal" style="--d:${(i * 0.06).toFixed(2)}s" href="${r.url}" target="_blank" rel="noopener noreferrer">
    <span class="repo-icon" aria-hidden="true">${icon(r.icon, { size: 17 })}</span>
    <span class="repo-name mono">${r.name}</span>
    <span class="repo-desc">${r.description}</span>
    <span class="repo-lang mono">${r.lang}</span>
  </a>`;
}

export function projects() {
  return `
<section class="section" id="projects" aria-labelledby="projects-h">
  <div class="container">
    ${sectionHead('03', 'ls ~/projects', 'Three builds that taught me the most, plus what the public repos are up to.', 'folder')}
    <div class="proj-grid">
      ${featured.map(featuredCard).join('')}
    </div>
    <div class="repo-strip reveal">
      <p class="repo-strip-label mono">${icon('github', { size: 15 })} also on github</p>
      <div class="repo-grid">
        ${repos.map(repoCard).join('')}
      </div>
      <a class="repo-all mono" href="${github.url}" target="_blank" rel="noopener noreferrer">
        view all repositories ${icon('arrow-up-right', { size: 14 })}
      </a>
    </div>
  </div>
</section>`;
}

export function mountProjects(el) {
  el.innerHTML = projects();
}

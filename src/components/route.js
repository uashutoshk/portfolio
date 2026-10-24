import { icon } from './icon.js';
import { sectionHead } from './section.js';
import { experience } from '../data/profile.js';

function hop(h) {
  return `
  <li class="hop reveal">
    <div class="hop-marker" aria-hidden="true">
      <span class="hop-dot${h.current ? ' hop-dot-live' : ''}"></span>
    </div>
    <article class="hop-card">
      <div class="hop-meta">
        <span class="hop-num mono">hop ${h.hop}</span>
        ${h.current ? '<span class="hop-here mono">● you are here</span>' : ''}
        <time class="hop-time mono" datetime="${h.start}">${h.period}</time>
      </div>
      <div class="hop-heading">
        <span class="hop-icon" aria-hidden="true">${icon(h.icon, { size: 20 })}</span>
        <div>
          <h3 class="hop-title">${h.title}</h3>
          <p class="hop-role">${h.role}</p>
        </div>
      </div>
      ${h.description ? `<p class="hop-desc">${h.description}</p>` : ''}
      ${h.points ? `<ul class="hop-points">${h.points.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
      <ul class="hop-tags" aria-label="Relevant tags">
        ${h.tags.map((t) => `<li>${t}</li>`).join('')}
      </ul>
      <span class="hop-latency mono" aria-hidden="true">${h.latency}</span>
    </article>
  </li>`;
}

export function route() {
  return `
<section class="section section-alt" id="route" aria-labelledby="route-h">
  <div class="container">
    ${sectionHead('02', 'traceroute career', 'Every career is a route. Here are my hops — chronological, no NAT.', 'route')}
    <ol class="hops">
      ${experience.map(hop).join('')}
    </ol>
  </div>
</section>`;
}

export function mountRoute(el) {
  el.innerHTML = route();
}

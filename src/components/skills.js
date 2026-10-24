import { icon } from './icon.js';
import { sectionHead } from './section.js';
import { interfaces, certifications } from '../data/profile.js';

function ifaceCard(card, i) {
  return `
  <article class="iface-card reveal" style="--d:${(i * 0.07).toFixed(2)}s">
    <div class="iface-top">
      <h3 class="iface-name mono iface-${card.color}">${card.iface}</h3>
      <span class="iface-status mono"><span class="status-beacon" aria-hidden="true"></span> UP</span>
    </div>
    <p class="iface-role">${icon(card.icon, { size: 13, class: 'iface-role-icon' })} ${card.role}</p>
    <ul class="iface-tags">
      ${card.skills.map((s) => `<li>${s}</li>`).join('')}
    </ul>
  </article>`;
}

function certItem(c) {
  return `
  <li class="cert-item">
    <span class="cert-icon" aria-hidden="true">${icon(c.icon, { size: 16 })}</span>
    <span class="cert-title">${c.title}</span>
    <span class="cert-meta mono">${c.issuer} · ${c.date}</span>
  </li>`;
}

export function skills() {
  return `
<section class="section section-alt" id="skills" aria-labelledby="skills-h">
  <div class="container">
    ${sectionHead('04', 'ip -br link', 'Skills, organised the way <code>ifconfig</code> would.', 'network')}
    <div class="iface-grid">
      ${interfaces.map(ifaceCard).join('')}
    </div>

    <div class="certs reveal">
      <h3 class="certs-title mono">${icon('award', { size: 16 })} $ ls ~/certs</h3>
      <ul class="cert-list">
        ${certifications.map(certItem).join('')}
      </ul>
    </div>
  </div>
</section>`;
}

export function mountSkills(el) {
  el.innerHTML = skills();
}

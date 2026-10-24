import { icon } from './icon.js';
import { sectionHead } from './section.js';
import { about as aboutData, conf } from '../data/profile.js';

function confCard() {
  const lines = conf.map((entry) => {
    if (typeof entry === 'string') return `<span class="c-comment">${entry}</span>\n\n`;
    const rows = entry.rows.map(([k, v, opt = {}]) =>
      `${k.padEnd(8)}= ${opt.highlight ? `<span class="accent-green">${v}</span>` : v}${opt.comment ? `  <span class="c-comment"># ${opt.comment}</span>` : ''}`
    ).join('\n');
    return `<span class="c-section">[${entry.section}]</span>\n${rows}\n\n`;
  }).join('');

  return `
  <aside class="conf-card reveal" style="--d:.12s" aria-label="Quick facts, formatted like a config file">
    <div class="conf-chrome">
      <span class="conf-dots" aria-hidden="true">···</span>
      <span class="conf-name">/etc/ashutosh.conf</span>
      ${icon('external', { size: 13, class: 'conf-edit' })}
    </div>
    <pre><code>${lines.trimEnd()}</code></pre>
  </aside>`;
}

export function about() {
  return `
<section class="section" id="about" aria-labelledby="whoami-h">
  <div class="container">
    ${sectionHead('01', 'whoami', 'The human behind the uptime.', 'user')}
    <div class="about-grid">
      <div class="about-copy reveal">
        ${aboutData.paragraphs.map((p) => `<p>${p}</p>`).join('')}
        <p class="about-target">
          <span class="mono accent-mauve">next_hop →</span> ${aboutData.nextHop}
        </p>
      </div>
      ${confCard()}
    </div>
  </div>
</section>`;
}

export function mountAbout(el) {
  el.innerHTML = about();
}

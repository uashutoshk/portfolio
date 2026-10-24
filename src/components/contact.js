import { icon } from './icon.js';
import { sectionHead } from './section.js';
import { identity } from '../data/profile.js';

const channels = [
  { icon: 'mail', label: 'email · 0.42 ms', value: 'uashutoshk@gmail.com', href: 'mailto:uashutoshk@gmail.com' },
  { icon: 'github', label: 'github · 12.4 ms', value: 'github.com/asup20cs', href: 'https://github.com/asup20cs' },
  { icon: 'linkedin', label: 'linkedin · 8.8 ms', value: 'in/asup20cs', href: 'https://www.linkedin.com/in/asup20cs/' },
  { icon: 'phone', label: 'phone · 28.1 ms', value: '+977 984-7445877', href: 'tel:+9779847445877' },
  { icon: 'map-pin', label: 'location · 0 ms', value: 'Kathmandu, Nepal · UTC+5:45', href: null },
];

function channelCard(c, i) {
  const inner = `
    <span class="contact-icon" aria-hidden="true">${icon(c.icon, { size: 21 })}</span>
    <span class="contact-label mono">${c.label}</span>
    <span class="contact-value">${c.value}</span>`;
  const style = ` style="--d:${(i * 0.06).toFixed(2)}s"`;
  return c.href
    ? `<a class="contact-card reveal"${style} href="${c.href}" ${c.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${inner}</a>`
    : `<div class="contact-card contact-card-static reveal"${style}>${inner}</div>`;
}

export function contact() {
  return `
<section class="section" id="contact" aria-labelledby="contact-h">
  <div class="container">
    ${sectionHead('05', 'ping ashutosh', 'One packet, zero loss. Fastest routes below.', 'radio')}
    <div class="ping-wrap">
      <div class="ping-term reveal" aria-label="Terminal showing a successful ping">
        <div class="term-chrome" aria-hidden="true">
          <span class="term-dot term-red"></span><span class="term-dot term-yellow"></span><span class="term-dot term-green"></span>
          <span class="term-title">output</span>
        </div>
        <pre class="ping-out mono" tabindex="0"><code>$ ping -c 1 ashutosh
PING ashutosh (${identity.website}): 56 data bytes
64 bytes from ashutosh: icmp_seq=0 <span class="accent-green">ttl=64</span> time=<span class="accent-green">0.42 ms</span>

--- ashutosh ping statistics ---
1 packets transmitted, 1 received, <span class="accent-green">0% packet loss</span></code></pre>
      </div>

      <div class="contact-grid">
        ${channels.map(channelCard).join('')}
      </div>

      <div class="contact-cta reveal">
        <a class="btn btn-primary btn-lg" href="mailto:${identity.email}?subject=Hello%20Ashutosh">
          open a connection ${icon('send', { size: 18 })}
        </a>
        <p class="contact-note mono">recruiting? deploying something? my inbox drops no packets.</p>
      </div>
    </div>
  </div>
</section>`;
}

export function mountContact(el) {
  el.innerHTML = contact();
}

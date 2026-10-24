import { identity } from '../data/profile.js';

export function footer() {
  return `
<footer class="site-footer">
  <div class="container footer-grid">
    <p class="footer-line mono">© <span id="year">2026</span> ${identity.name.toLowerCase()}</p>
    <p class="footer-line mono footer-dim">hand-built · vanilla html/css/js · no frameworks were harmed</p>
    <p class="footer-line mono footer-dim">${identity.coords} <span class="footer-sep">·</span> ttl exceeded — thanks for visiting</p>
  </div>
</footer>`;
}

export function mountFooter(el) {
  el.innerHTML = footer();
}

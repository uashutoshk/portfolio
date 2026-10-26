import { icon } from './icon.js';
import { identity, stats } from '../data/profile.js';
import profilePic from '../assets/profile.webp';

const terminalLines = [
  { hop: '1', host: 'be-cse.cmrit.edu.in', time: '1.882 ms' },
  { hop: '2', host: 'it-support.nmcth.edu.np', time: '0.417 ms' },
  { hop: '3', host: 'network-engineer', time: '* * *', timeout: true },
];

function terminal() {
  return `
  <div class="hero-terminal reveal" style="--d:.2s">
    <div class="term-chrome" aria-hidden="true">
      <span class="term-dot term-red"></span>
      <span class="term-dot term-yellow"></span>
      <span class="term-dot term-green"></span>
      <span class="term-title">ashutosh@kathmandu: ~</span>
    </div>
    <div class="term-body" aria-label="Terminal showing a traceroute from IT support toward network engineering">
      <p class="term-line"><span class="term-prompt">$</span> <span class="typed" data-type="traceroute network-engineer"></span><span class="term-cursor" aria-hidden="true"></span></p>
      <div class="term-output">
        <p class="term-line t-out">traceroute to network-engineer, 30 hops max, 60-byte packets</p>
        ${terminalLines.map((l) => `
        <p class="term-line t-out"><span class="t-hop">${l.hop}</span>&nbsp;&nbsp;${l.host}<span class="t-dots"></span><span class="t-time${l.timeout ? ' t-timeout' : ''}">${l.time}</span></p>`).join('')}
        <p class="term-line t-out t-note">* hop 3 still routing. <span class="t-ok">working on it.</span></p>
      </div>
    </div>
  </div>`;
}

export function hero() {
  return `
<section class="hero" id="top" aria-label="Introduction">
  <div class="hero-net" aria-hidden="true">
    <svg viewBox="0 0 900 520" preserveAspectRatio="xMidYMid slice">
      <g class="net-edges" stroke-width="1.5" fill="none">
        <path d="M120 140 L 340 90"/><path d="M340 90 L 620 150"/><path d="M120 140 L 260 330"/>
        <path d="M260 330 L 620 150"/><path d="M260 330 L 520 400"/><path d="M620 150 L 780 320"/>
        <path d="M520 400 L 780 320"/><path d="M620 150 L 520 400"/>
      </g>
      <g class="net-nodes">
        <circle class="node" cx="120" cy="140" r="5"/>
        <circle class="node node-accent" cx="340" cy="90" r="6"/>
        <circle class="node" cx="620" cy="150" r="5"/>
        <circle class="node node-accent" cx="260" cy="330" r="6"/>
        <circle class="node" cx="520" cy="400" r="5"/>
        <circle class="node" cx="780" cy="320" r="5"/>
      </g>
      <g class="net-packets">
        <circle class="packet" r="2.6"><animateMotion dur="7s" repeatCount="indefinite" path="M120 140 L 340 90 L 620 150 L 780 320 L 520 400 L 260 330 Z" begin="0s"/></circle>
        <circle class="packet packet-blue" r="2.2"><animateMotion dur="9s" repeatCount="indefinite" path="M620 150 L 520 400 L 260 330 L 120 140 L 340 90" begin="-3s"/></circle>
        <circle class="packet packet-mauve" r="2.2"><animateMotion dur="11s" repeatCount="indefinite" path="M340 90 L 620 150 L 520 400 L 260 330" begin="-6s"/></circle>
      </g>
    </svg>
  </div>

  <div class="container hero-grid">
    <div class="hero-copy">
      <div class="hero-id reveal">
        <span class="avatar">
          <img src="${profilePic}" alt="Portrait of ${identity.name}" width="122" height="122" />
          <span class="avatar-dot" aria-hidden="true"></span>
        </span>
        <h1>Ashutosh<br/>Khanal Upadhyay</h1>
      </div>

      <p class="hero-role reveal" style="--d:.06s">
        IT support technician by day, <span class="accent-green">network engineer in transit</span>.
      </p>
      <p class="hero-lede reveal" style="--d:.12s">
        I keep a 24/7 hospital running: 200+ Windows endpoints, 20+ switches, and every
        cable in between. Somewhere between the crimping and the subnetting, this became
        the career I want.
      </p>
      <div class="hero-cta reveal" style="--d:.18s">
        <a class="btn btn-primary" href="#projects">view my work ${icon('arrow-right', { size: 17 })}</a>
        <a class="btn btn-ghost" href="#contact">ping me</a>
      </div>

      <dl class="stats reveal" style="--d:.24s">
        ${stats.map((s) => `
        <div class="stat">
          <dt>${icon(s.icon, { size: 14, class: 'stat-icon' })}${s.label}</dt>
          <dd>${s.countUp
            ? `<span class="count" data-count="${s.value}">0</span>${s.suffix ?? ''}`
            : s.value}</dd>
        </div>`).join('')}
      </dl>
    </div>

    ${terminal()}
  </div>

  <a class="scroll-cue" href="#about" aria-label="Scroll to about section">
    ${icon('chevron-down', { size: 16 })}
    scroll
  </a>
</section>`;
}

export function mountHero(el) {
  el.innerHTML = hero();
}

/**
 * Projects — featured builds + public GitHub repos.
 * Sources: resume + https://github.com/asup20cs (fetched Oct 2026).
 */

export const github = {
  handle: 'asup20cs',
  url: 'https://github.com/asup20cs',
};

export const featured = [
  {
    id: 'currency-app',
    file: 'currency-app.py',
    logo: 'python',
    icon: 'banknote',
    iconClass: 'ml',
    title: 'Currency Recognition App',
    description: `A Python GUI that recognises Nepali and Indian banknotes with a model I trained myself, end to end: I built the dataset, cleaned it, trained the model, and wired it into the app. It reads banknotes at <span class="accent-green">92% accuracy</span>. Most of the work was cleaning the dataset. So was the rest.`,
    tags: ['python', 'machine learning', 'gui', 'datasets'],
    link: { label: 'git clone', url: 'https://github.com/asup20cs/CurrencyRecognizationApp' },
    meta: 'github · 1★ · python',
  },
  {
    id: 'winscript',
    file: 'winscript.ps1',
    logo: 'powershell',
    icon: 'terminal',
    iconClass: '',
    title: 'winscript',
    description: `A Windows management toolbox that started as scripts for my hospital job and grew into a public repo: provisioning, admin setup, the stuff a 24/7 IT team actually runs on. The README calls it <em>fully vibecoded</em>. Ships under MIT anyway.`,
    tags: ['powershell', 'windows', 'automation'],
    link: { label: 'git clone', url: 'https://github.com/asup20cs/winscript' },
    meta: 'github · mit · 1 fork',
  },
  {
    id: 'pi-webserver',
    file: 'pi-webserver',
    logo: 'raspberry-pi',
    icon: 'cpu',
    iconClass: '',
    title: 'Raspberry Pi Web Server',
    description: `A self-hosted media server on a Pi. It taught me hosting, availability, and what it actually takes to keep a small service alive around the clock. Also where I got comfortable with Linux, ports, and the quiet of a service that just runs.`,
    tags: ['linux', 'self-hosting', 'iot', 'uptime'],
    meta: 'homelab · kathmandu',
    status: 'serving',
  },
];

export const repos = [
  {
    name: 'terraform-practice',
    icon: 'server',
    description: 'Infrastructure-as-code drills in HCL. I keep telling myself the future network is a config file.',
    lang: 'HCL',
    url: 'https://github.com/asup20cs/terraform-practice',
  },
  {
    name: 'svgnim',
    icon: 'sparkles',
    description: 'A small tool that animates SVG files using Manim.',
    lang: 'Python',
    url: 'https://github.com/asup20cs/svgnim',
  },
  {
    name: 'js-landscape',
    icon: 'globe',
    description: 'A JS landscape site inspired by the CNCF Landscape.',
    lang: 'JS',
    url: 'https://github.com/asup20cs/js-landscape',
  },
  {
    name: 'dev-tutorials',
    icon: 'book',
    description: 'Tutorial write-ups and notes, built with Astro.',
    lang: 'Astro',
    url: 'https://github.com/asup20cs/dev-tutorials',
  },
];

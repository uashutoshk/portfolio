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
    icon: 'banknote',
    iconClass: 'ml',
    title: 'Currency Recognition App',
    description: `A Python GUI that classifies Nepali and Indian banknotes with a model I trained myself — <span class="accent-green">92% accuracy</span>, from building the dataset and cleaning it, to wiring the trained model into a desktop app. Data work is 80% patience; the other 20% is also patience.`,
    tags: ['python', 'machine learning', 'gui', 'datasets'],
    link: { label: 'git clone', url: 'https://github.com/asup20cs/CurrencyRecognizationApp' },
    meta: 'github · 1★ · mit-ish grind',
  },
  {
    id: 'winscript',
    file: 'winscript.ps1',
    icon: 'terminal',
    iconClass: '',
    title: 'winscript',
    description: `A Windows management toolbox that started as hospital scripts and grew into a public repo — provisioning, admin setup, and the kind of automation that saves a 24/7 IT team real hours. Self-described as <em>fully vibecoded</em>; ships under MIT anyway.`,
    tags: ['powershell', 'windows', 'automation'],
    link: { label: 'git clone', url: 'https://github.com/asup20cs/winscript' },
    meta: 'github · mit · 1 fork',
  },
  {
    id: 'pi-webserver',
    file: 'pi-webserver',
    icon: 'cpu',
    iconClass: '',
    title: 'Raspberry Pi Web Server',
    description: `A self-hosted media server on a Pi — hosting, availability, and what it actually takes to keep a small service alive around the clock. Where I got comfortable with Linux, ports, and the sweet silence of a service that just keeps running.`,
    tags: ['linux', 'self-hosting', 'iot', 'uptime'],
    meta: 'homelab · kathmandu',
    status: 'serving',
  },
];

export const repos = [
  {
    name: 'terraform-practice',
    icon: 'server',
    description: 'Infrastructure-as-code drills — HCL, because the future network is a config file.',
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

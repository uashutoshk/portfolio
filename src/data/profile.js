/**
 * Single source of truth for personal content.
 * Edit this file to update the site — no component changes needed.
 */

export const identity = {
  name: 'Ashutosh Khanal Upadhyay',
  shortName: 'ashutosh',
  role: 'IT Support Technician',
  target: 'Network Engineer',
  location: 'Kathmandu, Nepal',
  coords: '27.7172° N, 85.3240° E',
  timezone: 'UTC+5:45',
  email: 'uashutoshk@gmail.com',
  phone: '+977 984-7445877',
  phoneHref: '+9779847445877',
  website: 'uashutoshk.com.np',
};

export const socials = [
  { id: 'github', label: 'GitHub', handle: '@asup20cs', url: 'https://github.com/asup20cs', latency: '12.4 ms' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/asup20cs', url: 'https://www.linkedin.com/in/asup20cs/', latency: '8.8 ms' },
  { id: 'email', label: 'Email', handle: 'uashutoshk@gmail.com', url: 'mailto:uashutoshk@gmail.com', latency: '0.42 ms' },
];

export const stats = [
  { icon: 'monitor', label: 'endpoints under my care', value: 200, suffix: '+', countUp: true },
  { icon: 'network', label: 'switches kept humming', value: 20, suffix: '+', countUp: true },
  { icon: 'activity', label: 'the hospital never sleeps', value: '24/7' },
  { icon: 'layers', label: 'support tiers, all mine', value: 'T1–3' },
];

export const about = {
  paragraphs: [
    `I'm the person the hospital calls at 2 a.m. when a ward printer stops talking to the network — and the one who rewires the switch box so it doesn't happen again. For the last stretch I've handled Tier 1–3 IT support at Nepal Medical College & Teaching Hospital: deployments, cabling, subnets, CCTV, and everything Windows that blinks.`,
    `Before that, four years of computer science at CMR Institute of Technology taught me the theory — but the part of computing I love is the part you can touch. Cables, switches, ping times, uptime. So I'm pointed at network engineering now, one lab at a time; the Raspberry Pi serving media to my house is exhibit A.`,
  ],
  nextHop: 'deepening routing & switching fundamentals, scripting everything twice, and keeping a hospital online while I\'m at it.',
};

export const experience = [
  {
    hop: 1,
    icon: 'graduation-cap',
    title: 'CMR Institute of Technology',
    role: 'Bachelor of Engineering · Computer Science',
    period: 'dec 2020 → jun 2024',
    start: '2020-12',
    latency: '1.882 ms',
    current: false,
    description: `Four years of algorithms, systems and late-night projects — including a final-year ML model that learned to tell Nepali and Indian banknotes apart at 92% accuracy. Graduated with a 7.49 CGPA and a growing suspicion that my favourite lectures were the networking ones.`,
    tags: ['computer science', 'python', 'golang', 'machine learning'],
  },
  {
    hop: 2,
    icon: 'hospital',
    title: 'Nepal Medical College & Teaching Hospital',
    role: 'IT Support Technician · Jorpati, Kathmandu',
    period: 'apr 2026 → present',
    start: '2026-04',
    latency: '0.417 ms',
    current: true,
    points: [
      'Tier 1–3 support for a hospital that never sleeps — <strong>200+ Windows endpoints, 20+ switches</strong> and hundreds of peripherals.',
      'Automated fresh Windows deployments with batch &amp; shell scripts: provisioning, static IP assignment, Group Policy setup.',
      'Built out the physical layer — LAN cabling, switch-box provisioning, IP surveillance / CCTV deployment.',
      'Own subnets, static IP mappings and local network settings across the facility.',
      'Diagnose hardware &amp; OS incidents with minimal disruption to clinical operations, plus preventive maintenance on an aging fleet.',
    ],
    tags: ['windows admin', 'lan cabling', 'switches', 'powershell', 'subnetting', 'cctv'],
  },
];

export const interfaces = [
  {
    iface: 'eth0', color: 'green', icon: 'network',
    role: 'networking & infrastructure',
    skills: ['LAN cabling', 'switch provisioning', 'subnetting', 'static IP mapping', 'IP CCTV'],
  },
  {
    iface: 'wlan0', color: 'blue', icon: 'monitor',
    role: 'systems & admin',
    skills: ['Windows administration', 'Group Policy', 'Linux', 'OS deployment'],
  },
  {
    iface: 'tun0', color: 'mauve', icon: 'code',
    role: 'scripting & building',
    skills: ['Python', 'Golang', 'PowerShell', 'batch / shell'],
  },
  {
    iface: 'mgmt0', color: 'peach', icon: 'headphones',
    role: 'support & operations',
    skills: ['Tier 1–3 support', 'troubleshooting', 'preventive maintenance', '24/7 ops'],
  },
  {
    iface: 'usb0', color: 'yellow', icon: 'palette',
    role: 'creative toolbox',
    skills: ['Canva', 'Photoshop'],
  },
];

export const certifications = [
  { icon: 'shield', title: 'IT Security: Defense Against the Digital Dark Arts', issuer: 'Google · Coursera', date: 'jan 2023' },
  { icon: 'terminal', title: 'Linux Fundamentals', issuer: 'LearnQuest · Coursera', date: 'jul 2022' },
  { icon: 'palette', title: 'Foundations of UX Design', issuer: 'Google · Coursera', date: 'feb 2022' },
  { icon: 'cpu', title: 'Operating Systems and You: Becoming a Power User', issuer: 'Google · Coursera', date: 'oct 2021' },
];

export const conf = [
  '# last modified: 2026 · Kathmandu',
  { section: 'identity', rows: [
    ['name', 'Ashutosh Khanal Upadhyay'],
    ['based_in', 'Kathmandu, Nepal'],
    ['role', 'IT Support Technician'],
    ['target', 'Network Engineer'],
  ]},
  { section: 'education', rows: [
    ['degree', 'BE · Computer Science'],
    ['school', 'CMR Institute of Technology'],
    ['cgpa', '7.49 / 10', { highlight: true, comment: '2020 – 2024' }],
  ]},
  { section: 'status', rows: [
    ['uptime', '24/7 hospital ops'],
    ['response', 'tier 1 through 3'],
  ]},
];

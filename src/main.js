/**
 * Entry point: mount every component into its shell slot, then wire interactions.
 * Content lives in src/data/*.js — edit there, not in the components.
 */

import { mountHeader } from './components/header.js';
import { mountHero } from './components/hero.js';
import { mountAbout } from './components/about.js';
import { mountRoute } from './components/route.js';
import { mountProjects } from './components/projects.js';
import { mountSkills } from './components/skills.js';
import { mountContact } from './components/contact.js';
import { mountFooter } from './components/footer.js';
import { initInteractions } from './lib/interactions.js';

const mounts = [
  ['site-header', mountHeader],
  ['hero', mountHero],
  ['about', mountAbout],
  ['route', mountRoute],
  ['projects', mountProjects],
  ['skills', mountSkills],
  ['contact', mountContact],
  ['site-footer', mountFooter],
];

for (const [id, mount] of mounts) {
  const el = document.getElementById(id);
  if (el) mount(el);
}

initInteractions();

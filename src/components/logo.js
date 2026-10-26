/**
 * Brand logos (icons8 "color" set, self-hosted in src/assets/logos/).
 * Used for tech tags and project cards where a real mark beats a generic glyph.
 * To add one: drop the png in assets/logos and add it to FILES + ALIASES.
 */

import python from '../assets/logos/python.png';
import golang from '../assets/logos/golang.png';
import powershell from '../assets/logos/powershell.png';
import windows from '../assets/logos/windows.png';
import linux from '../assets/logos/linux.png';
import canva from '../assets/logos/canva.png';
import photoshop from '../assets/logos/photoshop.png';
import raspberryPi from '../assets/logos/raspberry-pi.png';

const FILES = {
  python, golang, powershell, windows, linux,
  canva, photoshop, 'raspberry-pi': raspberryPi,
};

const ALIASES = {
  'python': 'python',
  'golang': 'golang',
  'go': 'golang',
  'powershell': 'powershell',
  'windows': 'windows',
  'windows admin': 'windows',
  'windows administration': 'windows',
  'linux': 'linux',
  'canva': 'canva',
  'photoshop': 'photoshop',
  'raspberry pi': 'raspberry-pi',
  'raspberry-pi': 'raspberry-pi',
};

/** Resolve a tag/display name to a logo file (or null). */
export function logoFor(name) {
  return FILES[ALIASES[String(name).toLowerCase().trim()]] ?? null;
}

/** <img> for a known logo name, sized for its slot. */
export function logoImg(name, { size = 16, cls = '' } = {}) {
  const src = logoFor(name) ?? FILES[name];
  if (!src) return '';
  return `<img class="logo ${cls}" src="${src}" alt="" width="${size}" height="${size}" loading="lazy" decoding="async" />`;
}

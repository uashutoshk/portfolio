import { icon } from './icon.js';

/**
 * Shared section header: big outlined index + `$ command` heading + subtitle.
 */
export function sectionHead(index, command, subtitle, iconName) {
  return `
  <header class="section-head reveal">
    <span class="section-index" aria-hidden="true">${index}</span>
    <h2 id="${command.replace(/[^a-z]/g, '')}-h">${iconName ? icon(iconName, { size: 22, class: 'section-icon' }) : ''}<span class="prompt" aria-hidden="true">$</span> ${command}</h2>
    <p class="section-sub">${subtitle}</p>
  </header>`;
}

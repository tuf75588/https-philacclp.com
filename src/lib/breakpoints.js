/*
CSS breakpoints will be kept in this file
the formal definition for a breakpoint is a point
where the website content responds accordingly to a device width, allowing
the developer to show the best possible layout to the user accessing your website.
*/

const maxXS = 320;
const maxSM = 767;
const maxMD = 1023;

export const bpMaxXS = `media(max-width: ${maxXS}px)`;
export const bpMaxSM = `media(max-width: ${maxSM}px)`;
export const bpMaxMD = `media(max-width: ${maxMD}px)`;

export const bpTabletOnly = `@media (min-width: ${
  maxSM + 1
}px) and (max-width: ${maxMD}px)`;
export const bpDesktopOnly = `@media (min-width: ${maxMD + 1}px)`;

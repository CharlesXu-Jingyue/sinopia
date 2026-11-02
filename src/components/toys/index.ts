/**
 * Interactive models that can be embedded on a work's page with `toy: <name>` in its frontmatter.
 * To add one: build it as a self-contained component in this folder, register it here,
 * and add its name to the `toy` enum in src/content.config.ts.
 */
import Homeostat from './Homeostat.astro';

export const toys = {
  homeostat: Homeostat,
} as const;

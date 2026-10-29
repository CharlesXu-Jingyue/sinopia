// @ts-check
import { defineConfig } from 'astro/config';

// Project site: served from https://charlesxu-jingyue.github.io/sinopia/
// If the repository is renamed to CharlesXu-Jingyue.github.io (or a custom domain is added), set base to '/'.
export default defineConfig({
  site: 'https://charlesxu-jingyue.github.io',
  base: '/sinopia',
  trailingSlash: 'ignore',
});

/**
 * Prefix an internal path with the site's base path.
 * The site is served from /sinopia/ (a project site). If it moves to the root
 * (repository CharlesXu-Jingyue.github.io or a custom domain), change `base`
 * in astro.config.mjs to '/' and every link follows.
 */
export const url = (path: string): string => {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : '/' + path;
  return base + clean;
};

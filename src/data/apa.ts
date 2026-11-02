/**
 * Build an APA 7 reference from a publication's fields.
 * Authors are written "Given Middle Family" (e.g. "David J. Anderson") and become
 * "Anderson, D. J." in the reference.
 */
export function apaName(full: string): string {
  // Drop a parenthetical nickname, e.g. "Jingyue (Charles) Xu" -> "Jingyue Xu".
  const parts = full.replace(/\([^)]*\)/g, ' ').trim().split(/\s+/);
  const family = parts.pop() ?? '';
  const initials = parts
    .map((p) => p.split('-').map((q) => q.replace(/\./g, '')[0]?.toUpperCase() + '.').join('-'))
    .join(' ');
  return initials ? `${family}, ${initials}` : family;
}

export function apaAuthors(authors: string[]): string[] {
  // APA 7: list up to 20 authors; with 21 or more, the first 19, an ellipsis, then the last.
  const names = authors.map(apaName);
  if (names.length >= 21) return [...names.slice(0, 19), '…', names[names.length - 1]];
  return names;
}

export interface Pub {
  title: string;
  date: Date;
  authors?: string[];
  venue?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  link?: string;
}

/** Returns the reference as parts so the page can italicise and highlight pieces. */
export function apaParts(p: Pub) {
  const names = apaAuthors(p.authors ?? []);
  const year = p.date.getFullYear();
  const title = p.title.replace(/\.$/, '');
  const doiUrl = p.doi ? `https://doi.org/${p.doi}` : p.link;
  return { names, year, title, venue: p.venue, volume: p.volume, issue: p.issue, pages: p.pages, doiUrl };
}

/**
 * The three fresco words the site is built on. Wherever one appears in a glossed line
 * (the fresco caption and the two eyebrows), it opens a small card with a dictionary entry
 * and what the word means on this site. Edit the wording here.
 */
export interface TermEntry {
  headword: string;
  pronunciation: string;
  partOfSpeech: string;
  sense: string;
  origin: string;
  /** What the word names on this site. */
  here: string;
}

export const terms: Record<string, TermEntry> = {
  giornata: {
    headword: 'gior·na·ta',
    pronunciation: '/dʒɔrˈnɑːtə/',
    partOfSpeech: 'noun, plural giornate',
    sense: 'In fresco painting, the patch of fresh plaster laid and painted in a single day. Its edges remain as faint seams in the finished wall.',
    origin: 'Italian, “a day’s work”, from giorno, “day”.',
    here: 'The fresco above is cut into five giornate, one for each line of work: Neuroscience, Mathematics, Vita, Engineering and Cybernetics. Lift one to see its sinopia and open its work below.',
  },
  fresco: {
    headword: 'fres·co',
    pronunciation: '/ˈfrɛskoʊ/',
    partOfSpeech: 'noun, plural frescoes',
    sense: 'A painting made on wet lime plaster, so that the pigment binds into the wall as the plaster dries.',
    origin: 'Italian, “fresh”, from painting a fresco, “on fresh plaster”.',
    here: 'The finished surface: the picture a visitor meets first, the idea it states, and the Transactions, where the work is consolidated into theses and essays.',
  },
  sinopia: {
    headword: 'si·no·pi·a',
    pronunciation: '/sɪˈnoʊpiə/',
    partOfSpeech: 'noun, plural sinopie',
    sense: 'The preparatory drawing for a fresco, brushed in red earth on the rough first layer of plaster and covered as the painting proceeds. Also the red earth pigment itself.',
    origin: 'Italian, from Latin sinopis, red ochre shipped from Sinope, a port on the Black Sea.',
    here: 'What lies beneath: the working research, drawn in red and still in progress, from which the surface was painted.',
  },
};

/** Site-wide settings. Change the name here and it changes everywhere. */
export const site = {
  name: 'Sinopia',
  author: 'Jingyue (Charles) Xu',
  description:
    'Jingyue (Charles) Xu: a fresco of ideas on the surface, and the research in neuroscience, mathematics, engineering and cybernetics beneath it.',
  email: 'charlesxu@caltech.edu',
  github: 'https://github.com/CharlesXu-Jingyue',
  affiliation: 'PhD candidate, Computation and Neural Systems, Caltech',
  cvPdf: '/cv.pdf', // relative to the site; wrapped with url() where used
  /**
   * The central idea shown on the surface, under the fresco.
   * fresco / sinopia: the eyebrow and headline for each side. The fresco side shows on arrival;
   *   the sinopia side replaces it, in the same place and size, when the whole fresco is lifted.
   * paragraphs: explanatory prose after the ornament, the same on both sides; the first opens with a large red initial. Leave empty to omit.
   *   Write [^1] in a paragraph where the footnote marker should appear.
   * definition: a dictionary entry set under the prose like a footnote (set to null to omit it).
   */
  surface: {
    fresco: {
      eyebrow: 'The Fresco',
      headline: 'A mind finds itself by growing into the world.',
    },
    sinopia: {
      eyebrow: 'The Sinopia',
      headline: 'We understand the mind by rewiring its feedback loop with the world.',
    },
    definition: {
      headword: 'cy·ber·net·ics',
      pronunciation: '/ˌsaɪbərˈnɛtɪks/',
      partOfSpeech: 'noun',
      sense: 'The study of control and communication in the animal and the machine.',
      origin: 'From Greek kybernḗtēs, “steersman”; named by Norbert Wiener in 1948.',
    },
    paragraphs: [
      'Cybernetics[^1] treats a mind less as a thing than as a loop: it acts on the world, senses the consequences of its actions, and corrects itself in turn. The brain thereby becomes something that can be modelled, perturbed and, in principle, rebuilt. To understand it then is to rewire the loop and observe what changes.',
    ],
  },
};

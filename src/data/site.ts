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
   * headline: the poetic line, large and italic.
   * response: the line that answers it, set smaller beneath it as the second half of a couplet.
   * definition: a dictionary entry that opens the explanatory note (set to null to omit it).
   * paragraphs: explanatory prose under the definition; leave the array empty to omit it.
   */
  surface: {
    headline: 'A mind finds itself by growing into the world.',
    response: 'And we understand it by rewiring its feedback loop with the world.',
    definition: {
      headword: 'cy·ber·net·ics',
      pronunciation: '/ˌsaɪbərˈnɛtɪks/',
      partOfSpeech: 'noun',
      sense: 'The study of control and communication in the animal and the machine.',
      origin: 'From Greek kybernḗtēs, “steersman”; named by Norbert Wiener in 1948.',
    },
    paragraphs: [
      'Cybernetics treats a mind less as a thing than as a loop: it acts on the world, senses the consequences of its actions, and corrects itself in turn. The brain thereby becomes something that can be modeled, perturbed and, in principle, rebuilt; to understand it is to rewire the loop and observe what changes. Beneath this fresco lies the work that follows from that idea.',
    ],
  },
};

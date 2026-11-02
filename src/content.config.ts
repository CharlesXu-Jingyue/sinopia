import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Transactions: the polished surface. Literary theses and philosophical essays.
 * One Markdown file per piece in src/content/transactions/.
 */
const transactions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/transactions' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['thesis', 'essay']),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Works: what lies beneath the fresco. One Markdown file per item in src/content/works/.
 * Every item carries three labels (category, date, giornata) and a one-to-two sentence
 * description of its role: how it fits the investigation of the mind named in the headline.
 * Every item gets its own page at /works/<file name>. The Markdown body (optional) is shown there.
 */
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['publication', 'talk', 'toy model', 'simulation', 'build', 'code', 'analysis', 'note', 'essay', 'reading notes']),
    date: z.coerce.date(),
    /** 'other' is for work outside the four research giornate; it has no block under the fresco. */
    giornata: z.enum(['neuroscience', 'mathematics', 'engineering', 'cybernetics', 'other']),
    /** Its role in relation to the fresco and the headline. One or two sentences. */
    description: z.string(),
    /** An external page or a toy model, offered as a button on the item's page. */
    link: z.string().optional(),
    /** Shown in its giornata's block when the plaster is lifted. Keep to about one per giornata. */
    featured: z.boolean().default(false),
    /** Short label for the card's picture space in the block, until a real preview exists. */
    thumb: z.string().optional(),
    draft: z.boolean().default(false),

    /* Publications only. The APA reference is generated from these fields. */
    authors: z.array(z.string()).optional(),
    venue: z.string().optional(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    /** Preprint, in press, published, and so on; shown beside the venue. */
    status: z.string().optional(),
    doi: z.string().optional(),
    abstract: z.string().optional(),
  }),
});

/** Journal: short dated notes shown in the Vita block. */
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { transactions, works, journal };

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
 * Works: what lies beneath. Each work belongs to one giornata of the fresco.
 * `href` overrides the default page (use it for external papers, repositories or toy models).
 */
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    giornata: z.enum(['neuroscience', 'mathematics', 'engineering', 'cybernetics']),
    kind: z.enum(['publication', 'toy model', 'analysis', 'talk', 'note', 'build', 'code', 'simulation', 'essay', 'reading notes']),
    date: z.coerce.date(),
    summary: z.string(),
    thumb: z.string().optional(),
    href: z.string().optional(),
    featured: z.boolean().default(true),
    draft: z.boolean().default(false),
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

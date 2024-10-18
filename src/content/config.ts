import { z, defineCollection, reference } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const authors = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    image: image().optional(),
    socials: z.array(
      z.object({
        icon: z.string(),
        href: z.string().url(),
      })
    ).optional(),
    styling: z.object({
      text: z.string().max(3),
      color: z.string(),
      background: z.string(),
    }).partial().optional(),
    affiliation: z.string().max(20).optional(),
  }),
});

const extendedDocsSchema = defineCollection({ 
  schema: docsSchema({
    extend: z.object({
      authors: z.array(reference('authors')).optional(),
    }),
  })
});

export const collections = {
	docs: extendedDocsSchema,
  authors: authors,
};

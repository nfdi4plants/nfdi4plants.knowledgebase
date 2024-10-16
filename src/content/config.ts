import { z, defineCollection, reference } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const docs = defineCollection({
  schema: docsSchema({
    extend: z.object({
      authors: z.array(reference('authors')).optional(),
    }),
  }),
})

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    image: z.string().optional(),
    socials: z.object({
      twitter: z.string().optional(),
      github: z.string().optional(),
      linkedin: z.string().optional(),
      website: z.string().optional(),
      orcid: z.string().optional()
    }).optional(),
  }),
});

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
  authors: authors,
};

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import { rehypeAutolink } from './plugins/rehype-autolink';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'DataPLANT Docs',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/tailwind.css',
      ],
      components: {
        MarkdownContent: './src/components/Starlight/MarkdownContent.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/nfdi4plants/nfdi4plants.knowledgebase/edit/main/docs/'
      },
      social: {
        github: 'https://github.com/nfdi4plants/nfdi4plants.knowledgebase',
      },
      plugins: [
        starlightLinksValidator()
      ],
      expressiveCode: {
        defaultProps: {
          // Enable wrap for specific languages
          overridesByLang: {
            'txt,md,bash': { wrap: true },
          },
        },
      },
    }), 
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    })
  ],
  markdown: {
    rehypePlugins: [rehypeSlug, ...rehypeAutolink()],
  },
});
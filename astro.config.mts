// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import { rehypeAutolink } from './plugins/rehype-autolink';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import icon from "astro-icon";

const SidebarConfig = [
  {
    label: 'Start Here',
    badge: {text: 'NEW!', variant: 'tip' }, 
    autogenerate: { directory: 'start-here' },
  },
  {
    label: 'Core Concepts',
    autogenerate: { directory: 'core-concepts' },
  },
  {
    label: 'Guides',
    collapsed: true,
    autogenerate: { directory: 'guides' },
  },
  {
    label: 'Fundamentals',
    // Collapse the group by default.
    collapsed: true,
    autogenerate: { directory: 'fundamentals' },
  },
  {
    label: 'ARCitect',
    // Collapse the group by default.
    collapsed: true,
    autogenerate: { directory: 'arcitect' },
  },
  {
    label: 'ARC Validation',
    // Collapse the group by default.
    collapsed: true,
    autogenerate: { directory: 'arc-validation' },
  },
  {
    label: 'DataHUB',
    // Collapse the group by default.
    collapsed: true,
    autogenerate: { directory: 'datahub' },
  },
  {
    label: 'ARC Commander',
    // Collapse the group by default.
    collapsed: true,
    autogenerate: { directory: 'arc-commander' },
  },
  {
    label: 'ARCmanager',
    // Collapse the group by default.
    collapsed: true,
    autogenerate: { directory: 'arc-manager' },
  },
  {
    label: 'Swate',
    // Collapse the group by default.
    collapsed: true,
    autogenerate: { directory: 'swate' },
  },
   {
    label: 'Vault',
    // Collapse the group by default.
    collapsed: true,
    badge: {text: 'outdated', variant: 'note'}, 
    autogenerate: { directory: 'vault' },
  },
]

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    starlight({
      title: 'DataPLANT',
      favicon: "favicon.png",
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/tailwind.css',
        './src/styles/custom.css',
      ],
      components: {
        MarkdownContent: '@components/starlight/MarkdownContent.astro',
        Footer: '@components/starlight/Footer.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/nfdi4plants/nfdi4plants.knowledgebase/edit/main/docs/'
      },
      social: {
        github: 'https://github.com/nfdi4plants/nfdi4plants.knowledgebase',
      },
      plugins: [
        starlightLinksValidator(),
        starlightImageZoom(),
      ],
      sidebar: SidebarConfig,
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
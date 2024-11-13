// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import { rehypeAutolink } from './plugins/rehype-autolink';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import icon from "astro-icon";
import remarkMermaid from 'remark-mermaidjs'

// https://astro.build/config
export default defineConfig({
  site: "https://nfdi4plants.github.io",
  base: '/nfdi4plants.knowledgebase',
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
      sidebar: [
        {
          label: 'Start Here',
          badge: { text: 'New!', variant: 'tip' }, 
          autogenerate: { directory: 'start-here' },
        },
        {
          label: 'Core Concepts',
          autogenerate: { directory: 'core-concepts' },
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Resources',
          // Collapse the group by default.
          collapsed: true,
          autogenerate: { directory: 'resources' },
        },
        {
          label: 'Git',
          // Collapse the group by default.
          collapsed: true,
          autogenerate: { directory: 'git' },
        },
        {
          label: 'CWL',
          // Collapse the group by default.
          collapsed: true,
          autogenerate: { directory: 'cwl' },
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
          collapsed: true,
          // autogenerate: { directory: 'datahub' },
          items:[
            'datahub',           
            {
              label: 'DataPLANT Account',
              collapsed: false,
              autogenerate: { directory: 'datahub/account'},
            },
            {
              label: 'Navigation & Settings',
              autogenerate: { directory: 'datahub/navigation-settings'},
            },
            {
              label: 'Working together',
              autogenerate: { directory: 'datahub/working-together'},
            },
            {
              label: 'ARC files',
              autogenerate: { directory: 'datahub/arc-files'},
            },
            {
              label: 'ARC features',
              autogenerate: { directory: 'datahub/arc-features'},
            },
            {
              label: 'Data Publications',
              autogenerate: { directory: 'datahub/data-publications'},
            },
          ]
        },        
        {
          label: 'ARC Commander',
          // Collapse the group by default.
          collapsed: true,
          autogenerate: { directory: 'arc-commander' },
        },
        {
          label: 'Swate',
          // Collapse the group by default.
          collapsed: true,
          autogenerate: { directory: 'swate' },
        },
        {
          label: 'ARCManager',
          collapsed: true,
          autogenerate: { directory: 'arc-manager' },
        },
        {
          label: 'Vault',
          // Collapse the group by default.
          collapsed: true,
          badge: {text: 'Outdated', variant: 'note'}, 
          autogenerate: { directory: 'vault' },
        },
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
    remarkPlugins: [remarkMermaid],
  },
});
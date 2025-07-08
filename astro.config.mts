// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import { rehypeAutolink } from './plugins/rehype-autolink';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import icon from "astro-icon";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://nfdi4plants.github.io",
  base: '/nfdi4plants.knowledgebase',
  integrations: [icon(), starlight({
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
      baseUrl: 'https://github.com/nfdi4plants/nfdi4plants.knowledgebase/edit/main/'
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
        // badge: { text: 'For starters', variant: 'tip' }, 
        // autogenerate: { directory: 'start-here' },
        items:[
          'start-here',
          'start-here/create-arc-scaffold',
          'start-here/investigation',
          'start-here/study',
          {
          label: '– Check point 1 –', link: 'start-here/check-point1', attrs: { style: 'font-style: italic; color: grey; padding-left: 10%' },
          },
          'start-here/assays',
          'start-here/share',
          {
          label: '– Check point 2 –', link: 'start-here/check-point2', attrs: { style: 'font-style: italic; color: grey; padding-left: 10%' },
          },
          'start-here/sops',
          'start-here/data-analysis',
          {
          label: 'Option I – Virtual assay', link: 'start-here/data-analysis/option1-virtual-assay', attrs: { style: 'padding-left: 10%' },
          },
          {
          label: 'Option 2 – CWL', link: 'start-here/data-analysis/option2-cwl', attrs: { style: 'padding-left: 10%' },
          },
          'start-here/datamap',
          {
          label: '– Check point 3 –', link: 'start-here/check-point3', attrs: { style: 'font-style: italic; color: grey; padding-left: 10%' },
          },
          'start-here/validate-arc',
          'start-here/publish-arc',
          {
          label: '– Check point 4 –', link: 'start-here/check-point4', attrs: { style: 'font-style: italic; color: grey; padding-left: 10%' },
          },
        ]
      },
      {
        label: 'Core Concepts',
        collapsed: true,
        autogenerate: { directory: 'core-concepts' },
      },
      {
        label: 'Guides',
        collapsed: true,
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
          'datahub/access-tokens',
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
        items:[
          'arc-commander',           
          {
            label: 'Setup',
            collapsed: false,
            autogenerate: { directory: 'arc-commander/setup'},
          },
          'arc-commander/using-arc',
          'arc-commander/arc-commander-quick-start',
          {
            label: 'Central Functions',
            collapsed: false,
            autogenerate: { directory: 'arc-commander/central-functions'},
          },
          {
            label: 'ISA metadata',
            collapsed: false,
            autogenerate: { directory: 'arc-commander/isa'},
          },
          'arc-commander/lfs',
        ]
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
        label: 'ARCtrl',
        collapsed: true,
        badge: {text: 'For developers', variant: 'tip'}, 
        autogenerate: { directory: 'arctrl' },
      },
      // {
      //   label: 'Vault',
      //   // Collapse the group by default.
      //   collapsed: true,
      //   badge: {text: 'Outdated', variant: 'note'}, 
      //   autogenerate: { directory: 'vault' },
      // },
    ],
    expressiveCode: {
      defaultProps: {
        // Enable wrap for specific languages
        overridesByLang: {
          'txt,md,bash': { wrap: true },
        },
      },
    },
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  }), react()],
  markdown: {
    rehypePlugins: [rehypeSlug, ...rehypeAutolink()],
  },
});
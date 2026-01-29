// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import { rehypeAutolink } from './plugins/rehype-autolink';
import starlightLinksValidator from 'starlight-links-validator'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightImageZoom from 'starlight-image-zoom'
import icon from "astro-icon";

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://nfdi4plants.github.io",
  base: '/nfdi4plants.knowledgebase',

  integrations: [icon(), 
    starlight({
      title: 'DataPLANT',
      favicon: "favicon.png",
      logo: {
        src: 'public/dataplant_logo_bg_transparent.svg',
        replacesTitle: true
      },
      customCss: [
        // Path to Tailwind base styles:
        './src/styles/global.css',
        // Relative path to custom CSS file
        './src/styles/custom.css',
        ],
      components: {
        MarkdownContent: '@components/starlight/MarkdownContent.astro',
        Footer: '@components/starlight/Footer.astro',
      },
    editLink: {
      baseUrl: 'https://github.com/nfdi4plants/nfdi4plants.knowledgebase/edit/main/'
    },
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nfdi4plants/nfdi4plants.knowledgebase' }],
    plugins: [
      starlightLinksValidator(),
      starlightImageZoom(),
      starlightSidebarTopics([
        {
          label: 'Start Here',
          icon: 'rocket',
          link: 'start-here',
          items:[
            {label: "Start Here", autogenerate: { directory: 'start-here' }},              
          ]
        },
        {
          label: 'Docs',
          icon: 'open-book',
          link: 'core-concepts',
          items:[
            {label: 'Core Concepts', autogenerate: { directory: 'core-concepts' }},
            {label: 'Guides', autogenerate: { directory: 'guides' }},
            {label: 'Resources', autogenerate: { directory: 'resources' }},
            {label: 'Git', autogenerate: { directory: 'git' }},
            {label: 'CWL', autogenerate: { directory: 'cwl' }},
            {label: 'Fundamentals', autogenerate: { directory: 'fundamentals' }},
          ]
        },
        {
          label: 'Tools and Services',
          icon: 'setting',
          link: 'arcitect',
          items: [
            {label: 'ARCitect', autogenerate: { directory: 'arcitect' }},
            {label: 'ARC Validation', autogenerate: { directory: 'arc-validation' }},
            {label: 'DataHUB', autogenerate: { directory: 'datahub' }},
            {label: 'ARC Commander', autogenerate: { directory: 'arc-commander' }},
            {label: 'Swate', autogenerate: { directory: 'swate' }},
            {label: 'ARCManager', autogenerate: { directory: 'arc-manager' }},
          ]
        },
        {
          label: 'FAQs',
          icon: 'comment',
          link: 'faqs',
          items:['faqs']
        },
        {
          label: 'Development',
          icon: 'forward-slash',
          link: 'arctrl',
          items: [
            {label: 'ARCtrl', autogenerate: { directory: 'arctrl' }}
          ]
        },
        ]),
      ],
      
      // {
      //   label: 'Vault',
      //   // Collapse the group by default.
      //   collapsed: true,
      //   badge: {text: 'Outdated', variant: 'note'}, 
      //   autogenerate: { directory: 'vault' },
      // },
    expressiveCode: {
      defaultProps: {
        // Enable wrap for specific languages
        overridesByLang: {
          'txt,md,bash': { wrap: true },
        },
      },
    },
  }), 
  react()],

  markdown: {
    rehypePlugins: [rehypeSlug, ...rehypeAutolink()],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import { rehypeAutolink } from './plugins/rehype-autolink';
import starlightLinksValidator from 'starlight-links-validator'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightAutoSidebar from 'starlight-auto-sidebar'
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
      starlightAutoSidebar(),
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
          label: 'DataHUB',
          icon: 'external',
          link: 'https://git.nfdi4plants.org/',
        },
        {
          label: 'Docs',
          icon: 'open-book',
          link: 'guides',
          items:[
            {collapsed: true, label: 'Fundamentals', autogenerate: { directory: 'fundamentals' }},
            {collapsed: true, label: 'Core Concepts', autogenerate: { directory: 'core-concepts' }},
            {collapsed: true, label: 'Guides', autogenerate: { directory: 'guides' }},
            {collapsed: true, label: 'Resources', autogenerate: { directory: 'resources' }},
            {collapsed: true, label: 'Git', autogenerate: { directory: 'git' }},
            {collapsed: true, label: 'CWL', autogenerate: { directory: 'cwl' }},
          ]
        },
        {
          label: 'Tools and Services',
          icon: 'setting',
          link: 'arcitect',
          items: [
            {collapsed: true, label: 'ARCitect', autogenerate: { directory: 'arcitect' }},
            {collapsed: true, label: 'ARC Validation', autogenerate: { directory: 'arc-validation' }},
            {collapsed: true, label: 'DataHUB', autogenerate: { directory: 'datahub' }},
            {collapsed: true, label: 'ARC Commander', autogenerate: { directory: 'arc-commander' }},
            {collapsed: true, label: 'Swate', autogenerate: { directory: 'swate' }},
            {collapsed: true, label: 'ARCManager', autogenerate: { directory: 'arc-manager' }},
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
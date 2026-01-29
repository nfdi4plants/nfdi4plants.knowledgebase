// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import { rehypeAutolink } from './plugins/rehype-autolink';
import starlightLinksValidator from 'starlight-links-validator'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightAutoSidebar from 'starlight-auto-sidebar'
import starlightImageZoom from 'starlight-image-zoom'
import starlightUiTweaks from 'starlight-ui-tweaks'
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
    social: [
      { icon: 'github', label: 'GitHub', href: 'https://github.com/nfdi4plants/nfdi4plants.knowledgebase' },
      { icon: 'matrix', label: 'Matrix', href: 'https://matrix.to/#/%23arc-user-support:matrix.org' },
    
    ],
    plugins: [
      starlightLinksValidator(),
      starlightImageZoom(),
      starlightAutoSidebar(),
      starlightUiTweaks({
        navbarLinks: [
            { label: "DataHUB", href: "https://git.nfdi4plants.org/",},
            { label: "DataPLANT", href: "https://nfdi4plants.org/",},
            { label: "ARC", href: "https://arc-rdm.org",},
          ],
        }

      ),
      starlightSidebarTopics(        
        [
        {
          label: 'Start Here',
          icon: 'rocket',
          link: 'start-here',
          id: 'start-here',
          items:[
            {label: "Start Here", autogenerate: { directory: 'start-here' }},              
          ]
        },        
        {
          label: 'Guides and docs',
          icon: 'open-book',
          link: 'index-docs',
          id: 'guides',
          items:[
            'index-docs',
            {collapsed: true, label: 'Fundamentals', autogenerate: { directory: 'fundamentals' }},
            {collapsed: true, label: 'Core Concepts', autogenerate: { directory: 'core-concepts' }},
            {collapsed: true, label: 'Guides', autogenerate: { directory: 'guides' }},
            {collapsed: true, label: 'Git', autogenerate: { directory: 'git' }},
            {collapsed: true, label: 'CWL', autogenerate: { directory: 'cwl' }},
          ]
        },
        {
          label: 'Tools and Services',
          icon: 'setting',
          link: 'index-tools-services',
          items: [
            'index-tools-services',
            {collapsed: true, label: 'ARCitect', autogenerate: { directory: 'arcitect' }},
            {collapsed: true, label: 'ARC Validation', autogenerate: { directory: 'arc-validation' }},
            {collapsed: true, label: 'DataHUB', 
              items: [
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
                {
                  label: 'Additional Features',
                  autogenerate: { directory: 'datahub/features'},
                },                
              ]
            },
            {collapsed: true, label: 'ARC Commander', 
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
            {collapsed: true, label: 'Swate', autogenerate: { directory: 'swate' }},
            {collapsed: true, label: 'Boat', autogenerate: { directory: 'resources/boat' }},
            {collapsed: true, label: 'ARCManager', autogenerate: { directory: 'arc-manager' }},
            'resources/dataplan',
            'resources/elab2arc',
            'resources/galaxy',
            'resources/metadata-quiz',
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
        ],
        // {
        //   // https://starlight-sidebar-topics.netlify.app/docs/guides/excluded-pages/
        //   exclude: [
        //     '**/start-here/viola-cwl',
        //     'docs/git/git-check',
        //     'git/git-download'          
        //   ],
        //   },      
      ),
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
  react()],

  markdown: {
    rehypePlugins: [rehypeSlug, ...rehypeAutolink()],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});



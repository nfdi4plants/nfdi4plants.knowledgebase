// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import { rehypeAutolink } from './plugins/rehype-autolink';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import starlightUtils from "@lorenzo_lewis/starlight-utils";

interface StarlightUtilsConfig { 
  multiSidebar?: { switcherStyle: boolean | "horizontalList" | "hidden" | "dropdown"; } | { switcherStyle: "horizontalList"; } | undefined; 
  navLinks?: { leading?: { useSidebarLabelled: string; } | undefined; } | undefined; }

const StarlightUtilsConfig: StarlightUtilsConfig = {
  multiSidebar: {switcherStyle: "horizontalList"},
  navLinks: {
    leading: { useSidebarLabelled: "leadingNavLinks" }
  }
}

const SidebarConfig = [
  // the ``leadingNavLinks`` label is used to define the links that will be displayed in the navbar after the site title
  {
    label: "leadingNavLinks",
    items: [
      { label: "Docs", link: "/docs" },
      { label: "Manuals", link: "/manuals" }
    ]
  },
  {
    label: "Docs",
    items: [
      {label: "General", link: "/docs"},
      {
        label: "Start Here",
        badge: "New",
        collapsed: false,
        autogenerate: { directory: '/docs/start-here' },
      },
      {
        label: "Fundamentals",
        collapsed: true,
        autogenerate: { directory: '/docs/fundamentals' },
      }
    ],
  },
  {
    label: "Manuals",
    items: [
      {label: "General", link: "/manuals"},
      {
        label: "ARCitect",
        collapsed: true,
        autogenerate: { directory: '/manuals/arcitect' },
      },
      {
        label: "ARC Commander",
        collapsed: true,
        autogenerate: { directory: '/manuals/arc-commander' },
      },
      {
        label: "Swate",
        collapsed: true,
        autogenerate: { directory: '/manuals/swate' },
      }
    ]
  },
]


// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'DataPLANT',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/tailwind.css',
        './src/styles/custom.css',
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
        starlightUtils(StarlightUtilsConfig),
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
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
  multiSidebar: {switcherStyle: "dropdown"},
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
    collapsed: true,
    autogenerate: { directory: "/docs" },
  },
  {
    label: "Manuals",
    collapsed: true,
    autogenerate: { directory: "/manuals" },
    badge: "New",
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
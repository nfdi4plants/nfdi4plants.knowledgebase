// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightAutoSidebar from "starlight-auto-sidebar";
import starlightImageZoom from "starlight-image-zoom";
import starlightUiTweaks from "starlight-ui-tweaks";
import icon from "astro-icon";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nfdi4plants.github.io",
  base: "/nfdi4plants.knowledgebase",

  integrations: [
    icon(),
    starlight({
      title: "Knowledge Base",
      favicon: "favicon.png",
      logo: {
        src: "@images/banner.svg",
        // replacesTitle: true
      },
      customCss: [
        // Path to Tailwind base styles:
        "./src/styles/global.css",
        // Relative path to custom CSS file
        "./src/styles/custom.css",
        "./src/styles/quasar-icons.css",
      ],
      components: {
        MarkdownContent: "@components/starlight/MarkdownContent.astro",
        Footer: "@components/starlight/Footer.astro",
      },
      editLink: {
        baseUrl:
          "https://github.com/nfdi4plants/nfdi4plants.knowledgebase/edit/main/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nfdi4plants/nfdi4plants.knowledgebase",
        },
        {
          icon: "matrix",
          label: "Matrix",
          href: "https://matrix.to/#/%23arc-user-support:matrix.org",
        },
      ],
      plugins: [
        starlightLinksValidator(),
        starlightImageZoom(),
        starlightAutoSidebar(),
        starlightUiTweaks({
          navbarLinks: [
            { label: "DataHUB", href: "https://git.nfdi4plants.org/" },
            { label: "DataPLANT", href: "https://nfdi4plants.org/" },
            { label: "ARC", href: "https://arc-rdm.org" },
          ],
        }),
        starlightSidebarTopics([
          {
            label: "Start Here",
            icon: "rocket",
            link: "start-here",
            id: "start-here",
            items: [
              {
                autogenerate: {
                  directory: "start-here",
                },
              },
            ],
          },

          {
            label: "Annotation Use-Cases",
            icon: "pencil",
            link: "/arc-use-cases/",
            items: [
              {
                label: "ARC Annotation Use-Cases",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      collapsed: true,
                      directory: "arc-use-cases",
                    },
                  },
                ],
              },
            ],
          },

          {
            label: "Guides and docs",
            icon: "open-book",
            link: "index-docs",
            id: "guides",
            items: [
              "index-docs",

              {
                label: "Fundamentals",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "fundamentals",
                    },
                  },
                ],
              },

              {
                label: "Core Concepts",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "core-concepts",
                    },
                  },
                ],
              },

              {
                label: "ARC Guides",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "guides",
                    },
                  },
                ],
              },

              {
                label: "Git-powered Lab Organization",
                collapsed: true,
                items: [
                  {
                    label: "Git for Biologists",
                    items: [
                      {
                        autogenerate: {
                          directory: "guides-others/git-for-biologists",
                        },
                      },
                    ],
                  },

                  {
                    label: "Writing SOPs in Markdown",
                    items: [
                      {
                        autogenerate: {
                          directory: "guides-others/writing-sops-in-markdown",
                        },
                      },
                    ],
                  },

                  {
                    label: "Reviewing and Approving SOPs in Git",
                    items: [
                      {
                        autogenerate: {
                          directory:
                            "guides-others/reviewing-and-approving-sops",
                        },
                      },
                    ],
                  },
                ],
              },

              {
                label: "Git",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "git",
                    },
                  },
                ],
              },

              {
                label: "CWL",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "cwl",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "Tools and Services",
            icon: "setting",
            link: "index-tools-services",
            
            items: [
              "index-tools-services",
              
              {
                label: "ARCitect",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "arcitect",
                    },
                  },
                ],
              },

              {
                label: "ARC Validation",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "arc-validation",
                    },
                  },
                ],
              },

              {
                label: "DataHUB",
                collapsed: true,
                items: [
                  "datahub",

                  {
                    label: "DataPLANT Account",
                    items: [
                      {
                        autogenerate: {
                          directory: "datahub/account",
                        },
                      },
                    ],
                  },

                  {
                    label: "Navigation & Settings",
                    items: [
                      {
                        autogenerate: {
                          directory: "datahub/navigation-settings",
                        },
                      },
                    ],
                  },

                  "datahub/access-tokens",

                  {
                    label: "Working together",
                    items: [
                      {
                        autogenerate: {
                          directory: "datahub/working-together",
                        },
                      },
                    ],
                  },

                  {
                    label: "ARC files",
                    items: [
                      {
                        autogenerate: {
                          directory: "datahub/arc-files",
                        },
                      },
                    ],
                  },

                  {
                    label: "ARC features",
                    items: [
                      {
                        autogenerate: {
                          directory: "datahub/arc-features",
                        },
                      },
                    ],
                  },

                  {
                    label: "Data Publications",
                    items: [
                      {
                        autogenerate: {
                          directory: "datahub/data-publications",
                        },
                      },
                    ],
                  },

                  {
                    label: "Additional Features",
                    items: [
                      {
                        autogenerate: {
                          directory: "datahub/features",
                        },
                      },
                    ],
                  },
                ],
              },

              {
                label: "ARC Commander",
                collapsed: true,
                items: [
                  "arc-commander",

                  {
                    label: "Setup",
                    items: [
                      {
                        autogenerate: {
                          directory: "arc-commander/setup",
                        },
                      },
                    ],
                  },

                  "arc-commander/using-arc",
                  "arc-commander/arc-commander-quick-start",

                  {
                    label: "Central Functions",
                    items: [
                      {
                        autogenerate: {
                          directory: "arc-commander/central-functions",
                        },
                      },
                    ],
                  },

                  {
                    label: "ISA metadata",
                    items: [
                      {
                        autogenerate: {
                          directory: "arc-commander/isa",
                        },
                      },
                    ],
                  },

                  "arc-commander/lfs",
                ],
              },

              {
                label: "Swate",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "swate",
                    },
                  },
                ],
              },

              {
                label: "Boat",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "resources/boat",
                    },
                  },
                ],
              },

              {
                label: "ARCManager",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "arc-manager",
                    },
                  },
                ],
              },

              "resources/arc-summary",
              "resources/dataplan",
              "resources/elab2arc",
              "resources/galaxy",
              "resources/metadata-quiz",
            ],
          },
          {
            label: "FAQs",
            icon: "comment",
            link: "faqs",
            items: ["faqs"],
          },

          {
            label: "Workshops",
            icon: "star",
            link: "workshops",
            id: "workshops",
            items: [
              "workshops",              
              {
                label: "FDM-Werkstatt",
                collapsed: true,
                items: [
                  {
                    autogenerate: {
                      directory: "workshops/2026-fdm-werkstatt",
                    },
                  },
                ],
              },
            ],
          },

          {
            label: "Development",
            icon: "forward-slash",
            link: "arctrl",
            items: [
              {
                label: "ARCtrl",
                items: [
                  {
                    autogenerate: {
                      collapsed: true,
                      directory: "arctrl",
                    },
                  },
                ],
              },

              "contribution",
            ],
          },
        ]),
      ],
      expressiveCode: {
        defaultProps: {
          // Enable wrap for specific languages
          overridesByLang: {
            "txt,md,bash": { wrap: true },
          },
        },
      },
    }),
    react(),
  ],

  // markdown: {
  //   processor: unified({
  //     rehypePlugins: [rehypeSlug, ...rehypeAutolink()],
  //   }),
  // },

  vite: {
    plugins: [tailwindcss()],
  },
});

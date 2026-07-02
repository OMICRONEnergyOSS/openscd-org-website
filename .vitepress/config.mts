import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  outDir: "./dist",
  // base: "/openscd-org-website/", // Uncomment this line if deploying to your own personal GitHub Page
  title: "OpenSCD",
  description: "Open Source System Configuration Designer",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/openscd-icon.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/openscd-icon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    ["link", { rel: "alternate icon", href: "/favicon.ico", sizes: "any" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        link: "/",
        text: "Home",
      },
      { link: "about", text: "About OpenSCD" },
      { link: "get", text: "How to get OpenSCD" },
      { link: "resources", text: "Resources" },
      { link: "archive", text: "Archive" },
      { link: "imprint", text: "Imprint" },
    ],

    // sidebar: [],

    socialLinks: [
      { icon: "github", link: "https://github.com/OMICRONEnergyOSS" },
    ],
    //
    logo: {
      light: "openscd-icon.svg",
      dark: "openscd-icon-dark.svg",
    },
    outline: [2, 3],
    footer: {
      copyright: "Copyright © 2025 OMICRON electronics GmbH",
    },
    docFooter: {
      prev: false,
      next: false,
    },
  },
});

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  outDir: "./dist",
  // base: "/openscd-org-website/", // Uncomment this line if deploying to your own personal GitHub Page
  title: "OpenSCD",
  description: "Open Source System Configuration Designer",
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
    logo: "logo.png",
    outline: [2, 3],
    footer: {
      message: "This project is licensed under the Apache License 2.0",
      copyright: "Copyright © 2025 OMICRON electronics GmbH",
    },
    docFooter: {
      prev: false,
      next: false,
    },
  },
});

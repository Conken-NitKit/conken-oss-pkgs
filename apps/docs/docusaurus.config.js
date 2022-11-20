// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Conken-NitKit/unwheel-pkgs/tree/main/apps/docusaurus-for-pkgs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "@unwheel-pkg",
        logo: {
          alt: "コンポタ",
          src: "img/logo192.png",
        },
        items: [
          {
            to: "docs/onboarding",
            activeBasePath: "docs",
            label: "オンボーディング",
            position: "left",
          },
          {
            to: "docs/programing-principle/",
            activeBasePath: "docs",
            label: "開発者向け",
            position: "left",
          },
          {
            href: "https://github.com/conken-nitkit",
            label: "GitHub Org",
            position: "right",
          },
          {
            href: "https://github.com/Conken-NitKit/unwheel-pkgs/tree/main/apps/docusaurus-for-pkgs",
            label: "GitHub Repo",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "GitHub Org",
                href: "https://github.com/conken-nitkit",
              },
              {
                label: "GitHub Repo",
                href: "https://github.com/Conken-NitKit/unwheel-pkgs/tree/main/apps/docusaurus-for-pkgs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

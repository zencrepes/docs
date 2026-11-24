// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZenCrepes',
  tagline: 'Agile analytics and management made easy!',
  url: 'https://docs.zencrepes.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'zencrepes',
  projectName: 'docs',
  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  future: {
    v4: true,
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/zencrepes/docs/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'supportus',
        content:
          'ZenCrepes is fully <a target="_blank" rel="noopener noreferrer" href="https://www.apache.org/licenses/LICENSE-2.0">Open-Source</a> and needs your help, join us on <a target="_blank" rel="noopener noreferrer" href="https://github.com/zencrepes/zencrepes/issues">GitHub</a>!',
      },
      navbar: {
        title: 'ZenCrepes',
        logo: {
          alt: 'ZenCrepes Logo',
          src: 'img/zencrepes.svg',
        },
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
          },
          {
            href: 'https://github.com/zencrepes',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/zencrepes/zencrepes/issues',
            label: 'Issues',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/zencrepes/zencrepes/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ZenCrepes. Site built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml'],
      },
    }),
};

export default config;

module.exports = {
  title: 'ZenCrepes',
  tagline: 'Agile analytics and management made easy!',
  url: 'https://docs.zencrepes.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'zencrepes', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
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
          href: 'https://github.com/zencrepes/zencrepes',
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
              label: 'Slack @overture.bio #app_zencrepes',
              href: 'http://slack.overture.bio/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZenCrepes. Site built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // routeBasePath: '/docs/',
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/zencrepes/docs/tree/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

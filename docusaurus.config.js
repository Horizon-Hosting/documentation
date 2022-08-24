// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HRZN Hosting Docs',
  tagline: 'High performance. Low prices. No compromises.',
  url: 'https://docs.horizonnetworks.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://archive.horizonnetworks.uk/Branding/Logo/Coloured_Icon.svg',

  organizationName: 'Horizon-Hosting',
  projectName: 'Documentation',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars_docs.js'),
        },
        blog: {
          showReadingTime: true,

          editUrl:
            'https://github.com/Horizon-Hosting/Documentation/edit/pre-release',
        },
        theme: {
          customCss: require.resolve('./src/css/colours.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'knowledgebase',
        path: 'knowledgebase',
        routeBasePath: 'knowledgebase',
        sidebarPath: require.resolve('./sidebars_knowledgebase.js'),
        editUrl:
        'https://github.com/Horizon-Hosting/Documentation/edit/pre-release',
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'HRZN Hosting Documentation',
        logo: {
          alt: 'HRZN Logo',
          src: 'https://archive.horizonnetworks.uk/Branding/Logo/Coloured_Icon.svg',
        },
        items: [
          {
            type: 'doc',
            docsPluginId: 'knowledgebase',
            docId: 'getting_support',
            position: 'left',
            label: 'Knowledgebase',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog', 
            label: 'Blog', position: 
            'left'
          },
          {
            href: 'https://hrzn.link/billing',
            label: 'Billing Panel',
            position: 'left',
          },
          {
            href: 'https://github.com/Horizon-Hosting',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Billing Panel',
                href: 'https://hrzn.link/billing',
              },
              {
                label: 'Game Panel',
                href: 'https://hrzn.link/panel',
              },
              {
                label: 'cPanel',
                href: 'https://hrzn.link/cpanel',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://hrzn.link/discord'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Horizon-Hosting',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HRZN Hosting.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

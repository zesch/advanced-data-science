const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


const currentLecture = 'intro'

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Missing Semester',
  tagline: 'Your missing CS education',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  url: 'https://giggity-hub.github.io',
  baseUrl: '/advanced-data-science/',
  organizationName: 'giggity-hub', // Usually your GitHub org/user name.
  projectName: 'advanced-data-science', // Usually your repo name.
  trailingSlash: false,

  themeConfig: {
    navbar: {
      title: 'Missing Semester',
      logo: {
        alt: 'My Site Logo',
        src: 'img/UDE signet.svg',
      },
      items: [
        {to: '/docs', label: 'lectures', position: 'left'},
        {to: '/docs/test/test', label: 'lectures', position: 'left', activeBasePath: '/docs/test/test'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

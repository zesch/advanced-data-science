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
  organizationName: 'zesch', // Usually your GitHub org/user name.
  projectName: 'advanced-data-science', // Usually your repo name.
  trailingSlash: true,

  themeConfig: {
    navbar: {
      title: 'Missing Semester',
      logo: {
        alt: 'My Site Logo',
        src: 'img/UDE signet.svg',
      },
      items: [
        {to: '/docs', label: 'lectures', position: 'left'}
      ],
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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

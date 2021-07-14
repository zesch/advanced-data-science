const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');



/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {

  title: 'Advanced Data Science',
  tagline: 'A gentle introduction to everything data',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/signet_ude_primary.svg',
  
  url: 'https://zesch.github.io',
  baseUrl: '/advanced-data-science/',
  organizationName: 'zesch', // Usually your GitHub org/user name.
  projectName: 'advanced-data-science', // Usually your repo name.
  customFields: {
    trailingSlash: true,
    taglines: [
      "Taming wild data",
      "The survivor's guide to Data Literacy",
      "A gentle Introduction to everything Data",
      "How to make Graphs and influence Data",
      "What is a Power User and how can I become one?",
      "Becoming a Power User in 12 easy steps",
      "Automate all the things - Data Literacy for Power Users",
      "Data Handling made easy",
      "I wish they had taught me this about data",
      "No more Excel - Automating Data Handling",
      "Excel users hate this trick - Automating Data Handling",
      "Of Pandas, Penguins and Snakes - Tools to automate Data Analysis",
      "Datmancy",
      "How to become a datamancer",
      "Advanced Data Literacy or: How I Learned to Stop Worrying and Love the Data",
      "If you hold a Unix Shell up to your ear can you hear the C?"
    ]
  },
  

  themeConfig: {
    navbar: {
      title: 'Advanced Data Science',
      logo: {
        alt: 'UDE signet',
        src: 'img/ude/signet_ude_primary.svg',
      },
      items: [
        {to: '/docs/01/01', label: 'Lectures', position: 'left'},
        {to: '/setup', label: 'Setup', position: 'left'}
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'Universität Duisburg-Essen Logo',
        src: 'img/ude/logo_claim_negativ.svg',
        href: 'https://www.uni-due.de',
      },
      copyright: `
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
          <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
        </a>
        <br />
        This work is licensed under a 
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
        </a>`,
      links: [
        {
          title: 'learn',
          items: [
            {
              label: 'lectures',
              to: 'docs/01/01/',
            },
            {
              label: 'WSL2 installation',
              to: 'setup/',
            }
          ]
        },
        {
          title: 'Contact',
        },
        {
          title: "Source Code",
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zesch/advanced-data-science'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'About',
              to: 'about/',
            }
          ]
        }
      ]
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

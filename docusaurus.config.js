// const versions = require('./versions.json');

module.exports = {
  title: 'HumHub Documentation',
  tagline: 'Your source of information all around the Open Source social network HumHub',
  url: 'https://docs.humhub.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'humhub', // Usually your GitHub org/user name.
  projectName: 'humhub', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '0000hidden0000',
      indexName: 'humhub',
    },
    navbar: {
      title: 'HumHub Documentation',
      logo: {
        alt: 'HumHub',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        /*{
          to: 'versions',
          label: `${versions[0].substr(6)}`,
          position: 'left',
          style: {
            whiteSpace: 'nowrap',
            padding: '0.25rem 0.5rem 0.2rem 0.25rem',
            fontSize: 'calc(0.9 * var(--ifm-font-size-base))',
            textDecoration: 'underline',
          },
        },*/
        {
          label: 'About',
          position: 'left',
          activeBasePath: 'docs/about',
          items: [
            {label: 'HumHub', to: 'docs/about/humhub'},
            {label: 'Release Notes', to: 'docs/about/releasenotes/release_notes'},
            {label: 'Contribution', to: 'docs/about/contribution'},
            {label: 'Support', to: 'docs/about/support'},
            {label: 'License', href: 'https://www.humhub.com/de/licences'},
          ]},
       // {to: 'docs/about/humhub', activeBasePath: 'docs/about',  label: 'About', position: 'left'},
        {to: 'docs/admin/introduction', activeBasePath: 'docs/admin',  label: 'Administration', position: 'left'},
        {to: 'docs/theme/overview', activeBasePath: 'docs/theme',  label: 'Theming', position: 'left'},
        {to: 'docs/develop/overview', activeBasePath: 'docs/develop', label: 'Development', position: 'left'},
        {to: 'docs/professional-edition/pe-intro', activeBasePath: 'docs/professional', label: 'Professional Edition', position: 'left'},
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/humhub/humhub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'About',
              to: 'docs/about/humhub',
            },
            {
              label: 'Administration',
              to: 'docs/admin/introduction',
            },
            {
              label: 'Theming',
              to: 'docs/theme/overview',
            },
            {
              label: 'Development',
              to: 'docs/develop/overview',
            },
            {
              label: 'Professional Edition',
              to: 'docs/professional-edition/pe-intro',
            },
           /* {
              label: 'Models and APIs',
              href: '#',
            },
            {
              label: 'User Guide',
              href: '#',
            },*/
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'HumHub Community',
              href: 'https://community.humhub.com/dashboard',
            },
            {
              label: 'HumHub Translation',
              href: 'https://translate.humhub.org',
            },
          ],
        },
        {
          title: 'Social',
          items: [
           /* {
              label: 'Blog',
              to: 'blog',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/humhub/humhub',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/humhub',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/thehumhub'
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Homepage',
              href: 'https://www.humhub.com',
            },
            {
              label: 'Marketplace',
              href: 'https://www.humhub.com/marketplace',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HumHub. All rights reserved.  `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/humhub/documentation/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

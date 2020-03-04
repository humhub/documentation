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
    navbar: {
      title: 'HumHub Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
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
        {to: 'docs/admin/requirements', activeBasePath: 'docs/admin',  label: 'Administration', position: 'left'},
        {to: 'docs/theme/overview', activeBasePath: 'docs/theme',  label: 'Theming', position: 'left'},
        {to: 'docs/develop/overview', activeBasePath: 'docs/develop', label: 'Development', position: 'left'},
        {to: 'docs/professional/installation', activeBasePath: 'docs/professional', label: 'Professional Edition', position: 'left'},
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
              label: 'Administration',
              to: 'docs/admin',
            },
            {
              label: 'Theming',
              to: 'docs/theme',
            },
            {
              label: 'Development',
              to: 'docs/develop',
            },
            {
              label: 'Professional Edition',
              href: '#',
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
            'https://github.com/buddh4/humhub-docusaurus2/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

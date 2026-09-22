// const versions = require('./versions.json');

module.exports = {
  title: 'HumHub Documentation',
  tagline: 'Your source of information all around the Open Source social network HumHub',
  url: 'https://docs.humhub.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'humhub', // Usually your GitHub org/user name.
  projectName: 'humhub', // Usually your repo name.
  onBrokenLinks: 'warn',
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        // No blog on this site; don't scan for a blog/ dir to index.
        indexBlog: false,
      }),
    ],
  ],
  themeConfig: {
    prism: {
      additionalLanguages: ['php'],
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
        {to: 'docs/about/humhub', activeBasePath: 'docs/about', label: 'About', position: 'left'},
        {to: 'docs/admin/introduction', activeBasePath: 'docs/admin',  label: 'Administration', position: 'left'},
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
            {
              label: 'GitHub',
              href: 'https://github.com/humhub/humhub',
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
              label: 'News',
              href: 'https://community.humhub.com/s/announcements/',
            },
            {
              label: 'Marketplace',
              href: 'https://marketplace.humhub.com',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://www.humhub.com/legal/privacy/',
            },
            {
              label: 'Cookie Policy',
              href: 'https://www.humhub.com/legal/cookies/',
            },
            {
              label: 'Terms of Service',
              href: 'https://www.humhub.com/legal/terms/',
            },
            {
              label: 'Licenses',
              href: 'https://www.humhub.com/licenses/',
            },
            {
              label: 'Imprint',
              href: 'https://www.humhub.com/legal/imprint/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HumHub GmbH &amp; Co. KG`,
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
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

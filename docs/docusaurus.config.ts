import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VR LIM',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/inteli_edu_logo.jpg',

  future: {
    v4: true,
  },

  url: 'https://MarioVenturaMedeiros.github.io',
  baseUrl: '/VR_LIM/',

  organizationName: 'MarioVenturaMedeiros',
  projectName: 'VR_LIM',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // use require.resolve para garantir que o path seja resolvido corretamente em runtime
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/', // site root
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VR LIM',
      logo: {
        alt: 'My Site Logo',
        src: 'img/inteli_edu_logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/MarioVenturaMedeiros/VR_LIM',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Inicio',
              to: '/', // página inicial da documentação
            },
          ],
        },
        {
          title: 'Integrantes',
          items: [
            {
              label: 'Isabelle Oliveira',
              href: 'https://www.linkedin.com/in/isabellevoliveira342/',
            },
            {
              label: 'Mario Ventura Medeiros',
              href: 'https://www.linkedin.com/in/marioventuramedeiros/',
            },
            {
              label: 'Luiz Fernando Haddad Saad Villaça Leão',
              href: 'https://www.linkedin.com/in/luiz-fernando-villaca-leao/',}
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MarioVenturaMedeiros/VR_LIM',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mario Ventura Medeiros.`,
    },
  },
};

export default config;

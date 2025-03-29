import { DefaultTheme, defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pt-BR',
  title: "Wesley Araújo",
  description: "Desenvolvedor de Software",
  srcDir: 'pages',
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },  
  vite: {
    plugins: [
      groupIconVitePlugin() as any,
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Página inicial', link: '/' },
      { text: 'Quem é Wesley?', link: '/introducao/quem-e-wesley/' }
    ],

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} Wesley Araújo`
    },

    search: {
      provider: 'local'
    },
  }
})

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introdução',
      base: '/introducao',
      items: [
        { text: 'Quem é Wesley?', link: '/quem-e-wesley/' },
        { text: 'Experiências', link: '/experiencias/' },
      ]
    },
  ]
} 
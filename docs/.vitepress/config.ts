import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Dtm-Element',
  description: 'A VitePress Site',
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '董陶民', link: '/dtm/introduction' },
      { text: '19855389515', link: '/dtm/introduction' },
      { text: 'dongtaomin@qq.com', link: '/dtm/introduction' },
    ],

    sidebar: [
      {
        text: '联系作者',
        items: [
          { text: '董陶民', link: '/dtm/introduction' },
          { text: '19855389515', link: '/dtm/introduction' },
          { text: 'dongtaomin@qq.com', link: '/dtm/introduction' },
        ],
      },
      {
        text: 'Button组件',
        items: [{ text: 'Button', link: '/components/button' }],
      },
      {
        text: 'Icon组件',
        items: [{ text: 'Icon', link: '/components/icon' }],
      },
      {
        text: 'Collapse组件',
        items: [{ text: 'Collapse', link: '/components/collapse' }],
      },
      {
        text: 'Tooltip基础组件',
        items: [{ text: 'Icon', link: '/components/icon' }],
      },

      {
        text: 'Dropdown组件',
        items: [{ text: 'Dropdown', link: '/components/dropdown' }],
      },

      {
        text: 'Input组件',
        items: [{ text: 'Input', link: '/components/input' }],
      },

      {
        text: 'Switch组件',
        items: [{ text: 'Switch', link: '/components/switch' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/DongTaomin?tab=repositories' }],
  },
})

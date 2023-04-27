import { Link } from "./.nuxt/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-4349091134125615'
    }],
  ],
  app: {
    head: {
      script: [
        {children:"  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1C6R2NMLJD');"},
      {src: 'https://www.googletagmanager.com/gtag/js?id=G-1C6R2NMLJD'}
    ]
    },
  },
  
});

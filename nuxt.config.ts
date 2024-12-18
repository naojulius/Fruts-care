// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', "@pinia/nuxt"], 
  app: {
    head: {
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"},
        {"http-equiv" : "X-UA-Compatible", content:"ie=edge"},
      ], 
      script: [
        {
          src: 'https://telegram.org/js/telegram-web-app.js',
          type: 'text/javascript',
          async: true
        }
      ]
    }
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
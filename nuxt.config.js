module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#303456' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/socket.client.js' },
    { src: '~/plugins/vuetify.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],

  // pwa: {
  //   manifest: {
  //     name: 'Nuxt.js PWA nuxt-chat-app',
  //     short_name: 'Nuxt.js PWA',
  //     start_url: '/',
  //     theme_color: '#fff',
  //     display: 'standalone',
  //   },
  //   icon: {
  //     iconSrc: './static/fav.svg',
  //   },
  // },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
};



 // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
//  vuetify: {
//   customVariables: ['~/assets/variables.scss'],
//   theme: {
//     dark: true,
//     themes: {
//       dark: {
//         primary: colors.blue.darken2,
//         accent: colors.grey.darken3,
//         secondary: colors.amber.darken3,
//         info: colors.teal.lighten1,
//         warning: colors.amber.base,
//         error: colors.deepOrange.accent4,
//         success: colors.green.accent3
//       }
//     }
//   }
// },

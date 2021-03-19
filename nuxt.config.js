export default {
    head: {
      hmtlAttrs: {
        lang: 'en'
      },
      title: 'webapp-vue-template',
      meta: [
        {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      script: [
        {
          src: ''
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
        }
      ]
    },
    buildModules: [
      '@nuxtjs/style-resources',
      '@nuxt/typescript-build'
    ],
    styleResources: {
      scss: ['./assets/styles/*.scss']
    },

    css: [
      // Load a Node.js module directly (here it's a Sass file)
      // CSS file in the project
      // SCSS file in the project
      '~/assets/styles/global.scss'
    ]
}
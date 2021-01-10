export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'AriesPirnando-cv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css' }
    ],
    script: [
      {src : '/js/core/jquery.3.2.1.min.js'},
      {src : '/js/core/popper.min.js'},
      {src : '/js/core/bootstrap.min.js'},
      {src : '/js/now-ui-kit.js?v=1.1.0'},
      {src : '/js/aos.js'},
      {src : '/scripts/main.js'},
    ] 
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/aos.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  }
}

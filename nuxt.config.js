export default {
  target: "static",
  head: {
    title: 'gallery',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bill Funk Photography' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://use.typekit.net/xdc5xeu.css" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/uikit@3.5.8/dist/css/uikit.min.css" },
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/uikit@3.5.8/dist/js/uikit.min.js", defer: true },
      { src: "https://cdn.jsdelivr.net/npm/uikit@3.5.8/dist/js/uikit-icons.min.js", defer: true }

    ],
  },
  loading: { color: "#fff" },
  css: ["~/assets/css/app.css"],
  plugins: [{ src: "~/plugins/prismicLinks", ssr: false }],
  modules: ["nuxt-vuikit","@nuxtjs/svg", "@nuxtjs/pwa", "nuxt-lazy-load", "@/modules/static", "@/modules/crawler", "@nuxtjs/prismic"],
  prismic : {
    endpoint: 'https://funk.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  build: {
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  }
};

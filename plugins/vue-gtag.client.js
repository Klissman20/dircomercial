import VueGtag, { trackRouter } from "vue-gtag-next"
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-LJCX38E624'
    }
  })
  trackRouter(useRouter())
})
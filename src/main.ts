import { Vue, router, store, i18n, icons } from '@/config/vue-config'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  icons,
  render: h => h(App)
}).$mount('#app')

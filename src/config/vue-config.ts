import Vue from 'vue'
import plugins from './vue-plugin'
import i18n from '@/config/i18n-config'
import store from '@/store'
import VueCookies from 'vue-cookies'
import router from '@/router'
import { VueLogger, vueLoggerOptions } from './logger-config'
import moment from 'vue-moment'
import CoreuiVue from '@coreui/vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// @ts-ignore
import { iconsSet as icons } from './icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.performance = true
Vue.config.productionTip = false
// @ts-ignore
Vue.use(VueLogger, vueLoggerOptions)
Vue.use(VueCookies)
Vue.use(moment)
Vue.use(CoreuiVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// add plugin
Object.keys(plugins).forEach((key) => {
  Vue.use(plugins[key])
})

/**
 * export
 */
export {
  Vue,
  router,
  store,
  icons,
  i18n
}

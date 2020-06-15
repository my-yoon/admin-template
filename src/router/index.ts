import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import globalStatus from '@/store/modules/globalStatus'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0)
    })
  }
})
/**
 * Route 전에 권한 체크
 */
router.beforeEach(async (to, from, next) => {
  // --- 로그인 상태가 아닌경우 토큰 유효성체크
  if (!globalStatus.isLogin) {
    if (Vue.prototype.$LocalStorage.isExistsToken()) {
      globalStatus.updateIsLogin(true)
    }
  }
  if (to.meta.unauthorized || globalStatus.isLogin) {
    return next()
  } else {
    return next('/sign')
  }
})

export default router

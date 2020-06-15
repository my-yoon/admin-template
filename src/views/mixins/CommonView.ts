
import { Component, Vue, Mixins, Prop, Watch } from 'vue-property-decorator'
import Authentication from '@/helper/authentication'
import GlobalStatus from '@/store/modules/globalStatus'

@Component
class CommonView extends Vue {
  /**
   * 로그인
   */
  loginWithId = Authentication.loginWithId
  /**
   * 로그아웃
   */
  logout = Authentication.logout
  /**
   * 로그인여부
   */
  get isLogin () {
    return GlobalStatus.isLogin
  }
  /**
   * 모바일여부
   */
  get isMobile () {
    return GlobalStatus.isMobile
  }
  /**
   * 페이지를 이동.(히스토리없음)
   * @param target 이동될 Path
   */
  goToPageWithoutHistory (target: string) {
    this.$router.replace(target)
  }
  /**
   * 페이지 이동. (히스토리모드)
   * @param target 이동될 Path
   */
  goToPage (target: string) {
    this.$router.push(target)
  }
}
export {
  Component,
  Vue,
  Mixins,
  Prop,
  Watch,
  GlobalStatus
}
export default Mixins(CommonView)

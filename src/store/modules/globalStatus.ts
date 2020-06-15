import { Module, Action, Mutation, VuexModule, getModule } from 'vuex-module-decorators'
import { Api, Vue } from '@/store/storeUtils'
import store from '..'

export interface IGlobalStatus {
  /**
   * 로그인 여부
   */
  isLogin: boolean
  /**
   * 모바일 접속 여부
   */
  isMobile: boolean
  /**
   * 왼쪽 슬라이드메뉴 활성화 여부
   */
  showSidebar: string | boolean,
}

@Module({ dynamic: true, namespaced: true, name: 'globalStatus', store })
class GlobalStatus extends VuexModule implements IGlobalStatus {
  isLogin: boolean = false
  isMobile: boolean = false
  showSidebar: boolean = true
  /**
   * 로그인 상태
   * @param flag 로그인여부
   */
  @Mutation
  setIsLogin (flag: boolean) {
    this.isLogin = flag
  }
  @Mutation
  setShowSidebar (flag: any) {
    this.showSidebar = flag
  }
  /**
   * 모바일 접속여부
   * @param flag
   */
  @Mutation
  private setIsMobile (flag: boolean) {
    this.isMobile = flag
  }
  
  @Action
  toggleSidebar () {
    this.setShowSidebar(!this.showSidebar)
  }
  /**
   * 로그인 상태 갱신
   * @param flag 로그인 상태
   */
  @Action
  updateIsLogin (flag: boolean) {
    this.setIsLogin(flag)
  }
  /**
   * 모바일 접속 여부 갱신
   * @param flag 모바일 접속 여부
   */
  @Action
  updateIsMobile (flag?: boolean) {
    let mobileFlag: boolean = false
    if (Vue._.isUndefined(flag)) {
      mobileFlag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    } else {
      mobileFlag = flag
    }
    this.setIsMobile(mobileFlag)
  }
}

export default getModule(GlobalStatus)

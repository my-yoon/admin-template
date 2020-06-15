import Vue from 'vue'
import { AxiosResponse } from 'axios'
import GlobalStatus from '@/store/modules/globalStatus'
import Response from '@/types/model/Response'

/**
 * 로그인 - 아이디로 권한 토큰 획득
 * @param id 로그인 아이디(이메일)
 * @param password 로그인 비밀번호
 * @param callback 리턴 콜백 ( 리턴: 성공유무, 결과)
 */
const loginWithId = async (id: string, password: string, _callback: Function) => {
  Vue.prototype.$LocalStorage.removeAuthToken()
  await Vue.prototype.$Api.auth.getAuthToken(id, password).then((res: AxiosResponse) => {
    if(res.data['access_token']) {
      // --- add token
      Vue.prototype.$LocalStorage.setAuthToken(res.data.access_token, res.data.expires_in)
      Vue.prototype.$LocalStorage.setRefreshToken(res.data.refresh_token)
      GlobalStatus.updateIsLogin(true)
      _callback(true, res)
    } else {
      _callback(false, res.data.description)
    }
  }).catch((error: any) => {
    GlobalStatus.updateIsLogin(false)
    _callback(false, error)
  })
}

/**
 * 로그아웃
 */
const logout = () => {
  Vue.prototype.$LocalStorage.removeAuthToken()
  GlobalStatus.updateIsLogin(false)
}

/**
 * 로그인 - Refresh 토큰으로 권한 토큰 획득
 * @param id
 * @param password
 * @param _callback
 */
const loginWithRefreshToken = async (_callback: Function) => {
  let refreshToken: string = Vue.prototype.$LocalStorage.refreshToken() || ''
  await Vue.prototype.$Api.auth.getAuthTokenWithRefreshToken(refreshToken).then((res: AxiosResponse) => {
    // --- add token
    Vue.prototype.$LocalStorage.setAuthToken(res.data.access_token)
    Vue.prototype.$LocalStorage.setRefreshToken(res.data.refresh_token)
    GlobalStatus.updateIsLogin(true)
    _callback(true, res)
  }).catch((error: any) => {
    GlobalStatus.updateIsLogin(false)
    _callback(false, error)
  })
}

export default {
  loginWithId,
  loginWithRefreshToken,
  logout
}

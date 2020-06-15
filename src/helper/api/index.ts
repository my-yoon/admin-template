import axios, { AxiosInstance, AxiosResponse } from 'axios'
import Auth from './1.0.0/Auth'
import Vue from 'vue'
import authentication from '../authentication'

export class Api {
  brfAxios: AxiosInstance
  clayfulAxios: AxiosInstance

  // ---------------------
  auth: Auth
  constructor () {
    // -----------------------------------------------------------------------------------------------
    // 비래빗 서버 요청 Axios
    this.brfAxios = axios.create()
    this.brfAxios.defaults.baseURL = process.env.VUE_APP_API_SERVER
    this.brfAxios.interceptors.response.use(this.responseInterceptor)
    this.brfAxios.interceptors.request.use(this.requestInterceptor, this.responseErrorInterceptor)
    // -----------------------------------------------------------------------------------------------
    // 클래이풀 서버 요청 Axios
    this.clayfulAxios = axios.create()
    this.clayfulAxios.defaults.baseURL = process.env.VUE_APP_CLAYFUL_API_SERVER
    this.clayfulAxios.interceptors.response.use(this.responseInterceptor)
    this.clayfulAxios.interceptors.request.use(this.requestInterceptor)
    // --------------------------------
    this.auth = new Auth(this.brfAxios, this.clayfulAxios)
  }

  /**
   * 요청 전
   */
  requestInterceptor = (request: any) => {
    if (Vue.prototype.$LocalStorage.isExistsToken()) {
      request.headers['Authorization'] = `Bearer ${Vue.prototype.$LocalStorage.authToken()}`
    } else {
      Vue.$log.debug('# not found token')
    }
    return request
  }

  /**
   * 정상응답
   *
   */
  responseInterceptor = async (response: any) => {
    return response
  }
  /**
   * 오류응답
   */
  responseErrorInterceptor = async (error: any) => {
    // -- 권한 관련 오류인 경우
    if (error.status === 401 && error.retry === undefined) {
      error.retry = true
      await authentication.loginWithRefreshToken((isSuccess: any, res: any) => {
        if (isSuccess) {
          error.config.headers['Authorization'] = `Bearer ${Vue.prototype.$LocalStorage.authToken()}`
          return axios(error.config)
        } else {
          return Promise.reject(error)
        }
      })
    }
    return Promise.reject(error)
  }
}
export default new Api()

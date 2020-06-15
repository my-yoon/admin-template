import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios'

export default class CommApi {
  brfAxios!: AxiosInstance
  clayfulAxios!: AxiosInstance

  constructor (_bizAxios: AxiosInstance, _clayfulAxios: AxiosInstance) {
    this.brfAxios = _bizAxios
    this.clayfulAxios = _clayfulAxios
  }

  /**
   * call axios by get method
   */
  get = (url: string, param?: any, reqConfig?: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
    // --- default config
    const config: AxiosRequestConfig = {
      params: param,
      withCredentials: true
    }
    if (config) {
      Object.assign(config, reqConfig)
    }
    return this.brfAxios.get(url, config)
  }
  /**
   * call axios by post method
   */
  post = (url: string, param?: any, reqConfig?: AxiosRequestConfig): Promise<AxiosResponse<any>> | any => {
    // --- default config
    const config: AxiosRequestConfig = {
      withCredentials: true
    }
    if (config) {
      Object.assign(config, reqConfig)
    }
    return this.brfAxios.post(url, param, config)
  }
  /**
   * call axios by put method
   */
  put = (url: string, param?: any, reqConfig?: AxiosRequestConfig): Promise<AxiosResponse<any>> | any => {
    // --- default config
    const config: AxiosRequestConfig = {
      withCredentials: true
    }
    if (config) {
      Object.assign(config, reqConfig)
    }
    return this.brfAxios.put(url, param, config)
  }
  /**
   * call axios by delete method
   */
  delete = (url: string, param?: any, reqConfig?: AxiosRequestConfig): Promise<AxiosResponse<any>> | any => {
    // --- default config
    const config: AxiosRequestConfig = {
      withCredentials: true
    }
    if (config) {
      Object.assign(config, reqConfig)
    }
    return this.brfAxios.delete(url, config)
  }
  /**
   * call axios by get method to Clayful
   */
  getCF = (url: string): Promise<AxiosResponse<any>> => {
    return this.clayfulAxios.get(url, this.getConfigForClayful())
  }
  /**
   * call axios by post method to Clayful
   */
  postCF = (url: string, param?: any): Promise<AxiosResponse<any>> => {
    return this.clayfulAxios.post(url, param, this.getConfigForClayful())
  }
  /**
   * 클래이플 Axios 기본 설정
   */
  getConfigForClayful (): AxiosRequestConfig {    
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VUE_APP_CLAYFUL_AUTH}`,
        'Authorization-Customer': process.env.VUE_APP_CLAYFUL_ADMIN_ID
      }
    }
  }
}

import CommApi from '../CommApi'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

const qs = require('querystring')

export default class Auth extends CommApi {
  // default request config for Auth
  private config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic bXlBcHA6cGFzcw=='
    }
  }

  /**
   * 로그인 (토큰 요청)
   */
  getAuthToken = (id: string, pwd: string): Promise<AxiosResponse<any>> => {
    const sendData = {
      username: id,
      password: pwd,
      grant_type: 'password'
    }
    return this.post('/admin/v1/login', qs.stringify(sendData), this.config)
  }
  /**
   * 로그인 (토큰 갱신)
   */
  getAuthTokenWithRefreshToken = (refreshToken: string): Promise<AxiosResponse<any>> => {
    const sendData = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }
    return this.post('/admin/v1/login', qs.stringify(sendData), this.config)
  }
}

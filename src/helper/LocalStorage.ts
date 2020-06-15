import Vue from 'vue'

export default class LocalStorage implements ILocalStorage {
  AUTH_TOKEN: string = 'part_act'
  REFRESH_TOKEN: string = 'part_rat'

  /**
   * 인증 토큰을 저장.(인증 토큰은 쿠키에 저장 함)
   * @param token 인증토큰
   */
  setAuthToken (token: string, duration?: number) {
    // 권한 토큰은 cookie에 기록
    Vue.$log.debug(`### set authentication token => ${token}`)
    Vue.$cookies.set(this.AUTH_TOKEN, token, duration || '600s')
  }

  /**
   * 리프레쉬 토큰 저장 (리프레쉬 토큰은 로컬스코리지에 저장 함)
   * @param token 리프레쉬토큰
   */
  setRefreshToken (token: string) {
    localStorage.setItem(this.REFRESH_TOKEN, token)
  }

  authToken (): string | null {
    return Vue.$cookies.get(this.AUTH_TOKEN)
  }

  refreshToken (): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN)
  }

  isRefreshToken (): boolean {
    return !!this.refreshToken()
  }

  isExistsToken (): boolean {
    return !!this.authToken()
  }

  removeAuthToken (): void {
    Vue.$cookies.remove(this.AUTH_TOKEN)
    localStorage.removeItem(this.REFRESH_TOKEN)
  }

  setData (key: string, value: any) {
    localStorage.setItem(key, value)
  }

  getData (key: string) {
    return localStorage.getItem(key)
  }

  removeData (key: string) {
    localStorage.removeItem(key)
  }
}

export interface ILocalStorage {
  setAuthToken(token: string): void
  setRefreshToken(token: string): void
  authToken(): string | null
  refreshToken(): string | null
  isExistsToken(): boolean
  setData (key: string, value: any): void
  getData (key: string): any
  removeData (key: string): void
}

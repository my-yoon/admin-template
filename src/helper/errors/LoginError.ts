import CommonError from './CommonError'

export default class LoginError extends CommonError {
  constructor (code: number = 0, params: any[] = []) {
    super(...params)
    this.errorCode = code
    this.name = 'LoginError'
  }
}

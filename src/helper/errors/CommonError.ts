
export default class CommonError extends Error {
    date: Date
    errorCode: number
    name: string = 'Unkonw error'

    constructor (code: number = 0, params: any[] = []) {
      super(...params)
      this.date = new Date()
      this.errorCode = code
    }

    printError = () => {
      // print error msg
    }
}

import VueLogger from 'vuejs-logger'

const isProduction = process.env.NODE_ENV === 'production'

const vueLoggerOptions = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
}

export {
  VueLogger,
  vueLoggerOptions
}

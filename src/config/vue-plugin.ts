import _Vue, { PluginObject, ComponentOptions} from 'vue'
import axios, { AxiosStatic } from 'axios'
import { LogLevel } from '../types/enum'
import api, { Api } from '@/helper/api'
import i18n from './i18n-config'
// @ts-ignore
import uuid from 'uuid/v4'
import LocalStorage from '../helper/LocalStorage'
import _ from 'lodash'

declare module 'vue/types/vue' {
    export interface VueConstructor<V extends _Vue = _Vue> {
        $LocalStorage: LocalStorage
        $http: AxiosStatic
        $log: LogLevel
        $Api: Api
        $uuid: () => string
        _: _.LoDashStatic
    }
}

declare module 'vue/types/vue' {
  interface Vue {
    $LocalStorage: LocalStorage
    $log: LogLevel
    $Api: Api
    _: _.LoDashStatic
    // ---------------------------------------------------------------
    // i18n
    $lang(key: string, params?: object): string
    $msg(key: string, params?: object): string
    $label(key: string, params?: object): string
    $errMsg(key: number, params?: object): string
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    icons?: any;
  }
}

export default {
  install (Vue: typeof _Vue, store: any, config: any): void {
    Vue._ = _
    Vue.$http = axios
    Vue.$uuid = uuid
    Vue.prototype.$Api = api
    Vue.prototype._ = _
    Vue.prototype.$LocalStorage = new LocalStorage()
    Vue.prototype.$lang = (key: string, params?: {}) => i18n.t(key, params)
    Vue.prototype.$msg = (key: string, params?: {}) => i18n.t(`message.${key}`, params)
    Vue.prototype.$label = (key: string, params?: {}) => i18n.t(`label.${key}`, params)
    Vue.prototype.$errMsg = (key: number, params?: {}) => i18n.t(`error.${key}`, params)
  }
} as PluginObject<any>

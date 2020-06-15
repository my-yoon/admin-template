import Vue from 'vue'
import Vuex from 'vuex'
import { IGlobalStatus } from './modules/globalStatus'
import { IGlobalData } from './modules/globalData'

Vue.use(Vuex)

export interface IRootState {
  /**
   * 전역에서 관리되는 상태값
   */
  globalStatus: IGlobalStatus
  /**
   * 전역에서 관리되는 데이터 (공통코드 등)
   */
  globalData: IGlobalData
}

export default new Vuex.Store<IRootState>({})

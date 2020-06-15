import { Module, Action, Mutation, VuexModule, getModule } from 'vuex-module-decorators'
import store from '..'
import Member from '@/types/model/Member'
import Response, { PagingModel } from '@/types/model/Response'
import Vue from 'vue'
import { getDate } from '@/helper/utils/DateUtils'
import globalStatus from './globalStatus'

export interface IGlobalData {
  sidebarShow: string,
  sidebarMinimize: boolean
}

@Module({ dynamic: true, namespaced: true, name: 'globalData', store })
class GlobalData extends VuexModule implements IGlobalData {
  sidebarShow: string
  sidebarMinimize: boolean


}

export default getModule(GlobalData)

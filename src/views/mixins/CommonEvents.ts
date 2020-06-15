
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { KeyCode } from '@/types/enum/index'

@Component
class CommonEvents extends Vue {
  /**
   * Enter 키 체크
   */
  isEnterKey (keyCode: number) {
    return KeyCode.ENTER === keyCode
  }
}
export default Mixins(CommonEvents)

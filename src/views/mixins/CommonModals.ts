
import { Component, Vue, Mixins } from 'vue-property-decorator'

@Component
class CommonModals extends Vue {
  /**
   * 공통 Alert
   */
  showAlert (message: string, title?: string) {
    this.$bvModal.msgBoxOk(message, {
      title: title,
      size: 'sm',
      okVariant: 'secondary',
      headerClass: 'p-2',
      bodyClass: 'text-center',
      footerClass: 'p-2',
      centered: true
    })
  }
}
export default Mixins(CommonModals)

<template>
  <CSidebar 
    fixed 
    :show="showSidebar"
    @update:show="changedStatusSidebar"
  >
    <CSidebarBrand class="d-md-down-none">
      <img
        src="@/assets/images/b_rabbit_logo.svg"
        block
        class="mb-2"
        width="100"
      />
      <h5>-비래빗</h5>
    </CSidebarBrand>
    <CRenderFunction flat :content-to-render="memuNav"/>
  </CSidebar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt.vue'
import GlobalStatus from '@/store/modules/globalStatus'
import nav from './_nav'

@Component({
  components: {
  }
})
export default class TheSidebar extends Vue {
  memuNav: any = nav

  get showSidebar () {
    return GlobalStatus.showSidebar || false
  }

  changedStatusSidebar () {
    GlobalStatus.toggleSidebar()
  }
}
</script>

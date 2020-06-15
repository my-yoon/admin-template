<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="toggleSidebar"
    />
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="toggleSidebar"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo"/>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <!-- <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem> -->
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script lang="ts">
import CommonView, { Component, Mixins, GlobalStatus} from '@/views/mixins/CommonView'
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt.vue'

@Component({
  components: {
    TheHeaderDropdownAccnt
  }
})
export default class TheHeader extends Mixins(CommonView) {
  /**
   * 토글 사이드바
   */
  toggleSidebar () {
    GlobalStatus.toggleSidebar()
  }
  
}
</script>


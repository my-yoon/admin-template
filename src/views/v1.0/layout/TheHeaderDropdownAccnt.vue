<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <b-icon icon="person-circle" font-scale="1.5" variant="success"></b-icon>
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Account</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <b-icon icon="person" class="mr-1"></b-icon>  Profile
    </CDropdownItem>
    <CDropdownItem>
      <b-icon icon="gear" class="mr-1"></b-icon> Settings
    </CDropdownItem>
    <CDropdownItem @click="doLogout">
      <b-icon icon="box-arrow-in-right" class="mr-1"></b-icon> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script lang="ts">
import CommonView, { Component, Mixins} from '@/views/mixins/CommonView'

@Component({
  components: {}
})
export default class TheHeaderDropdownAccnt extends Mixins(CommonView) {
  doLogout () {
    this.logout()
    this.goToPageWithoutHistory('/sign')
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>
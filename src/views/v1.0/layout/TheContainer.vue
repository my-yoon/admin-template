<template>
  <div class="c-app">
    <TheSidebar/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
        <TheFooter/>
      </div>
    </CWrapper>
  </div>
</template>


<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import TheSidebar from './TheSidebar.vue'
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'

@Component({
  components: {
    TheSidebar,
    TheHeader,
    TheFooter
  }
})
export default class TheContainer extends Vue {

}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

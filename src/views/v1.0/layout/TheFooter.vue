<template>
  <CFooter :fixed="false">
    <div>
      <a href="#" target="_blank">이용약관</a>
      <a href="#" target="_blank" class="ml-3">개인정보취급방침</a>
    </div>
    <div class="ml-auto">
      <span class="mr-1">B.RABBIT</span>
      <a href="https://coreui.io/vue" target="_blank">&copy; 2020 </a>
    </div>
  </CFooter>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class TheFooter extends Vue {

}
</script>

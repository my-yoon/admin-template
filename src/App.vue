<template>
  <router-view />
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class App extends Vue {

}

</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'styles/style';
</style>


<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <div class="layout-base">
    <!-- <IconFrijo class="icon"/> -->
    <div class="layout"></div>
    <div class="sidebar">
      <AppSidebar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-base {
  width: 100vw;
  height: 88vh;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 85% 15%;

  .sidebar {
    position: relative;
  }
}
</style>

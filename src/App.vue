<script setup lang="ts">
import AppToolbar from '@/components/app/AppToolbar.vue'
import AppSidebar from './components/app/AppSidebar.vue'
</script>

<template>
  <header>
    <app-toolbar />
  </header>
  <main>
    <div class="layout-base">
      <router-view></router-view>
      <aside>
        <AppSidebar class="sidebar" />
      </aside>
    </div>
  </main>
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

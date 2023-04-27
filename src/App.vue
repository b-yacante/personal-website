<script setup lang="ts">
import AppToolbar from '@/components/app/AppToolbar.vue'
</script>

<template>
  <header>
    <app-toolbar />
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>

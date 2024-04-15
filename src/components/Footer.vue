<script setup lang="ts">
import { GameConsoleIcon, CodeIcon, UserIcon } from '@/data/icons'
import FIconButton from '@/components/base/FIconButton.vue'
import FIcon from '@/components/base/FIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function RedirectPage(name: string) {
  router.push({ name: name })
}
</script>

<template>
  <footer class="w-screen mt-5 relative bottom-0 bg-red-ribbon-400 p-2 z-50">
    <div class="grid">
      <div @click="RedirectPage('game')" class="flex items-center ripple pr-4 max-w-fit">
        <FIconButton plain heigh="26" width="26" :icon="GameConsoleIcon"></FIconButton>
        <label class="text-font-white">Game Developer</label>
      </div>
      <div @click="RedirectPage('front')" class="flex items-center ripple pr-4 max-w-fit">
        <FIconButton plain heigh="24" width="24" :icon="CodeIcon"></FIconButton>
        <label class="text-font-white">Front-end Developer</label>
      </div>
      <div @click="RedirectPage('info')" class="flex items-center ripple pr-4 max-w-fit">
        <FIconButton plain heigh="24" width="24" :icon="UserIcon"></FIconButton>
        <label class="text-font-white">Personal Information.</label>
      </div>
    </div>
  </footer>
</template>

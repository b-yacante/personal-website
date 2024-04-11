<script lang="ts" setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import FButton from '../components/base/FButton.vue'
import FIcon from '@/components/base/FIcon.vue'
import FIconButton from '@/components/base/FIconButton.vue'
import { UserIcon, HomeIcon, GitHubIcon, LinkedinIcon } from '@/data/icons'
</script>

<template>
  <Navbar class="grid">
    <div class="flex justify-between">
      <div>
        <h1 class="w-40 text-3xl font-extrabold">Front-end Developer</h1>
      </div>
      <div class="flex space-x-2 justify-self-end">
        <FIconButton plain :icon="LinkedinIcon"></FIconButton>
        <FIconButton plain :icon="GitHubIcon"></FIconButton>
      </div>
    </div>
    <div class="self-end">
      <h2>-Hello, I'm Braian Yacante</h2>
    </div>
    <FIconButton class="absolute -bottom-4 right-6" :icon="GitHubIcon"></FIconButton>
  </Navbar>
  <!-- body content -->
  <div class="p-4">
    <!-- <FButton :icon="UserIcon" @click="clickbtn()" text>button</FButton> -->
    <!-- <FIconButton plain></FIconButton> -->
    <div class="w-40"></div>
    <!-- <FIcon height="50" width="50" :icon="HomeIcon"></FIcon> -->
  </div>
</template>

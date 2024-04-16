<script setup lang="ts">
import { ref } from 'vue'
import FButton from '../components/base/FButton.vue'
import FIcon from '@/components/base/FIcon.vue'
import FIconButton from '@/components/base/FIconButton.vue'
import {
  ChevronLeftIcon,
  UserIcon,
  GameConsoleIcon,
  CodeIcon,
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
  BriefcaseIcon,
  StarIcon,
  ArrowDownRightIcon,
  ArrowDownLeftIcon
} from '@/data/icons'

import { useRouter } from 'vue-router'

const router = useRouter()

function RedirectPage(name: string) {
  router.push({ name: name })
}
</script>

<template>
  <!-- navbar -->
  <nav class="relative top-0 w-screen max-h-fit p-2 bg-gray-50 drop-shadow">
    <div class="flex items-center justify-between">
      <div class="flex items-center ripple pr-4 max-w-fit">
        <FIconButton
          color="#0c4c6e"
          plain
          heigh="24"
          width="24"
          :icon="ChevronLeftIcon"
        ></FIconButton>
        <label class="text-font-black">Back</label>
      </div>
      <div class="flex">
        <FIconButton plain color="#0c4c6e" :icon="LinkedinIcon"></FIconButton>
        <FIconButton plain color="#0c4c6e" :icon="GitHubIcon"></FIconButton>
      </div>
    </div>
  </nav>
  <!-- body content -->
  <div class="grid grid-cols-4 p-4">
    <!-- title -->
    <div class="col-start-1 col-end-5 text-center my-2">
      <h1 class="text-xl text-font-black">Title</h1>
    </div>
    <!-- img -->
    <div class="w-40 h-80 rounded-full bg-picton-blue-200 col-end-2"></div>
    <!-- info -->
    <div class="col-start-3">
      <p class="text-font-black">asd</p>
      <p class="text-font-black">asd</p>
      <p class="text-font-black">asd</p>
      <p class="text-font-black">asd</p>
      <p class="text-font-black">asd</p>
      <p class="text-font-black">asd</p>
      <p class="text-font-black">asd</p>
      <p class="text-font-black">asd</p>
      <p class="text-font-black">asd</p>
    </div>
  </div>
  <!-- footer -->
  <footer></footer>
</template>

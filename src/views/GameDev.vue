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
  <!-- body content -->
  <div class="w-screen h-full bg-picton-blue-200 md:px-8 lg:px-32 xl:px-64">
    <div class="p-2">
      <div class="grid grid-cols-4 gap-2">
        <div
          class="bg-white col-start-1 col-end-3 w-full h-96 sm:h-[420px] md:h-[500px] rounded-full"
        ></div>
      </div>
      <!-- stats flag -->
      <div
        class="w-[180px] sm:w-[220px] md:w-[280px] overflow-hidden inline-block fixed top-0 right-2 sm:right-4 md:right-8 lg:right-32 xl:right-64"
      >
        <div class="h-[300px] w-[180px] sm:w-[220px] md:w-[280px] md:h-[420px] bg-white">
          <div class="grid grid-cols-2 z-10 p-3">
            <div class="col-start-1">
              <p class="text-font-black text-sm md:text-base leading-3">asd.</p>
              <b class="text-font-black text-lg md:text-xl leading-3">2asda</b>
            </div>
            <div class="col-start-2">
              <p class="text-font-black text-sm md:text-base leading-3">aasl.</p>
              <b class="text-font-black text-lg md:text-xl leading-3">algasfo</b>
            </div>
            <div class="col-start-1">
              <p class="text-font-black text-sm md:text-base leading-3">al.</p>
              <b class="text-font-black text-lg md:text-xl leading-3">asfasf</b>
            </div>
          </div>
        </div>
        <div
          class="h-[130px] sm:h-[170px] md:h-[200px] bg-white rotate-45 transform origin-top-right"
        ></div>
      </div>
      <!-- experience -->
      <div class="w-full mt-6 px-4">
        <label class="text-font-black">XP.</label>
        <div class="flex h-6 w-full bg-gray-100 rounded-3xl">
          <div
            class="h-6 w-1/12 bg-screamin-green-600 border-r border-e-white rounded-l-full"
          ></div>
          <div class="h-6 w-1/12 bg-screamin-green-600 border-r border-e-white"></div>
          <div class="h-6 w-1/12 border-r border-e-gray-500"></div>
          <div class="h-6 w-1/12 border-r border-e-gray-500"></div>
          <div class="h-6 w-1/12 border-r border-e-gray-500"></div>
          <div class="h-6 w-1/12 border-r border-e-gray-500"></div>
          <div class="h-6 w-1/12 border-r border-e-gray-500"></div>
          <div class="h-6 w-1/12 border-r border-e-gray-500"></div>
          <div class="h-6 w-1/12 border-r border-e-gray-500"></div>
          <div class="h-6 w-1/12 border-r border-e-gray-500"></div>
          <div class="h-6 w-1/12 border-r border-e-gray-500"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
  <footer></footer>
</template>

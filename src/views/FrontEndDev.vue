<script lang="ts" setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import FButton from '../components/base/FButton.vue'
import FIcon from '@/components/base/FIcon.vue'
import FIconButton from '@/components/base/FIconButton.vue'
import {
  UserIcon,
  HomeIcon,
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
  BriefcaseIcon,
  StarIcon,
  ArrowDownRightIcon,
  ArrowDownLeftIcon
} from '@/data/icons'
</script>

<template>
  <Navbar class="grid">
    <div class="flex justify-between">
      <div>
        <h1 class="w-40 text-3xl font-extrabold text-font-white">Front-end Developer.</h1>
      </div>
      <div class="flex space-x-2 justify-self-end">
        <FIconButton plain :icon="LinkedinIcon"></FIconButton>
        <FIconButton plain :icon="GitHubIcon"></FIconButton>
      </div>
    </div>
    <div class="self-end">
      <h2 class="text-font-white">-Hello, I'm Braian Yacante</h2>
    </div>
    <FIconButton class="absolute -bottom-4 right-6" :icon="MailIcon"></FIconButton>
  </Navbar>
  <!-- body content -->
  <div class="p-5">
    <div class="flex items-center">
      <FIcon class="mr-2" color="#ff3052" height="32" width="32" :icon="ArrowDownRightIcon"></FIcon>
      <h2 class="text-font-black text-2xl">Experience</h2>
    </div>
    <div class="relative mt-2 w-full h-full bg-screamin-green-100 rounded-sm">
      <!-- icon content -->
      <div
        class="absolute -bottom-4 -right-4 h-14 w-14 flex items-center justify-center rounded-full bg-red-ribbon-400"
      >
        <FIcon color="#f7f7f8" height="26" width="26" :icon="BriefcaseIcon"></FIcon>
      </div>
      <!-- text content -->
      <div class="p-2 grid grid-cols-2 gap-2">
        <div class="col-span-0 pb-8">
          <div class="text-red-ribbon-0">Text title</div>
          <p class="text-font-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque non magni
            consectetur repellat, laudantium laboriosam unde aut suscipit eveniet maxime ex
            temporibus impedit dicta quas, voluptatum eius dignissimos expedita.
          </p>
        </div>
        <div class="col-span-1 pb-8">
          <div class="text-red-ribbon-0">Text title</div>
          <p class="text-font-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque non magni
            consectetur repellat, laudantium laboriosam unde aut suscipit eveniet maxime ex
            temporibus impedit dicta quas, voluptatum eius dignissimos expedita.
          </p>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end mt-7">
      <h2 class="text-font-black text-2xl">Knowledge</h2>
      <FIcon class="mr-2" color="#ff3052" height="32" width="32" :icon="ArrowDownLeftIcon"></FIcon>
    </div>
    <div class="relative w-full p-2 grid">
      <div class="h-44 w-44 rounded-full bg-picton-blue-100 absolute top-4 -left-3 z-0">
        <div
          class="h-14 w-14 rounded-full bg-red-ribbon-400 flex items-center justify-center absolute -top-4"
        >
          <FIcon color="#f7f7f8" height="26" width="26" :icon="StarIcon"></FIcon>
        </div>
      </div>
      <div class="relative z-10">
        <h3 class="text-font-black text-lg font-semibold indent-14">Kw</h3>
        <div class="max-h-fit pb-5">
          <p class="indent-14 text-font-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum, provident eos
            quidem expedita excepturi corporis voluptate tempora quos, explicabo ut magnam ex
            accusantium ea quo voluptates incidunt? Quae, incidunt.
          </p>
        </div>
        <div class="flex items-center justify-end">
          <div class="h-7 w-28 bg-screamin-green-100 mr-3 flex justify-center items-center">
            <p class="text-red-ribbon-0">Text</p>
          </div>
          <div class="h-7 w-28 bg-screamin-green-100 flex justify-center items-center">
            <p class="text-red-ribbon-0">Text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

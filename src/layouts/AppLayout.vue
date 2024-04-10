<script lang="ts" setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import FButton from '../components/base/FButton.vue'
import FIcon from '@/components/base/FIcon.vue'
import FIconButton from '@/components/base/FIconButton.vue'
import FTextField from '@/components/base/FTextField.vue'
import { UserIcon, HomeIcon } from '@/data/icons'

const typeText = ref(false)

function clickbtn() {
  typeText.value = !typeText.value
}
</script>

<template>
  <Navbar></Navbar>
  <!-- body content -->
  <div class="p-4">
    <!-- <FButton :icon="UserIcon" @click="clickbtn()" text>button</FButton> -->
    <FIconButton text></FIconButton>
    <FTextField></FTextField>

    <!-- <FIcon height="50" width="50" :icon="HomeIcon"></FIcon> -->
  </div>
</template>

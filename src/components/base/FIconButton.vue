<script setup lang="ts">
import FIcon from '@/components/base/FIcon.vue'
import { UserIcon, HomeIcon } from '@/data/icons'

export interface FIconButtonProps {
  icon?: string
  disable?: boolean
  color?: string
  text?: boolean
  heigh?: string | number
  width?: string | number
}

const props = withDefaults(defineProps<FIconButtonProps>(), {
  icon: undefined,
  disable: undefined,
  outlined: undefined,
  color: undefined,
  text: undefined,
  heigh: 24,
  width: 24
})
</script>

<template>
  <a>
    <div
      class="h-11 w-11 rounded-full flex items-center justify-center ripple"
      :class="[!props.text && 'bg-primary-main', props.text && 'sm:hover:bg-primary-100']"
    >
      <FIcon
        :height="props.heigh"
        :width="props.width"
        :icon="HomeIcon"
        :color="!props.text ? '#f7f7f8' : '#424769'"
        :stroke="!props.text ? 2 : 3"
      >
      </FIcon>
    </div>
  </a>
</template>

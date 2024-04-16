<script setup lang="ts">
import FIcon from '@/components/base/FIcon.vue'
import { UserIcon, HomeIcon } from '@/data/icons'

export interface FIconButtonProps {
  icon?: string
  disable?: boolean
  color?: string
  plain?: boolean
  heigh?: string | number
  width?: string | number
  stroke?: string | number
}

const props = withDefaults(defineProps<FIconButtonProps>(), {
  icon: undefined,
  disable: undefined,
  outlined: undefined,
  color: undefined,
  plain: undefined,
  heigh: 24,
  width: 24,
  stroke: 2
})
</script>

<template>
  <a>
    <div
      class="h-11 w-11 rounded-full flex items-center justify-center ripple"
      :class="[
        !props.plain && 'bg-red-ribbon-400 drop-shadow-md',
        props.plain && 'sm:hover:bg-red-ribbon-300'
      ]"
    >
      <FIcon
        :height="props.heigh"
        :width="props.width"
        :icon="props.icon"
        :color="props.color ? props.color : '#fefee8'"
        :stroke="props.stroke"
      >
      </FIcon>
    </div>
  </a>
</template>

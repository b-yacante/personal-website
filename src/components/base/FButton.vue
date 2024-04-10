<script setup lang="ts">
import FIcon from './FIcon.vue'

export interface FButtonProps {
  icon?: string
  fullwidth?: boolean
  disable?: boolean
  outlined?: boolean
  color?: string
  text?: boolean
}

const props = withDefaults(defineProps<FButtonProps>(), {
  icon: undefined,
  fullwidth: undefined,
  disable: undefined,
  outlined: undefined,
  color: undefined,
  text: undefined
})
</script>
<template>
  <button
    :disabled="props.disable"
    class="min-w-max h-10 px-5 rounded text-base ripple flex items-center"
    :class="[
      props.text && 'text-primary-main font-bold sm:hover:bg-primary-100',
      !props.text &&
        'text-white bg-primary-main drop-shadow-md hover:bg-primary-800 active:drop-shadow-none',
      props.disable && props.text && 'text-gray-300 font-bold',
      props.disable && !props.text && 'text-white bg-gray-300 drop-shadow-md opacity-80'
    ]"
  >
    <FIcon
      v-if="props.icon && !props.text"
      class="mr-2"
      height="18"
      width="18"
      color="#ffff"
      :icon="props.icon"
    ></FIcon>
    <slot></slot>
  </button>
</template>

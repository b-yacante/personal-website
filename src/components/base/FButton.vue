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
      props.text && 'text-red-ribbon-400 font-bold sm:hover:bg-red-ribbon-300',
      !props.text &&
        'text-white bg-red-ribbon-400 drop-shadow-md hover:bg-red-ribbon-700 active:drop-shadow-none',
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

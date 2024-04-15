<script setup lang="ts">
export interface FIconBase {
  icon: string
  width: number | string
  height: number | string
  color: string
  stroke?: string | number
}

const props = withDefaults(defineProps<FIconBase>(), {
  icon: undefined,
  width: 18,
  height: 18,
  color: '#093248',
  stroke: '2'
})
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="props.icon"
      :stroke="props.color"
      :stroke-width="props.stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

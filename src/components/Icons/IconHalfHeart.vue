<template>
  <svg
    viewBox="0 0 24 24"
    :fill="color"
    :height="size"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M16.5,4.5 C14.8905,4.5 13.00825,6.32463215 12,7.5 C10.99175,6.32463215 9.1095,4.5 7.5,4.5 C4.651,4.5 3,6.72217984 3,9.55040872 C3,12.6834696 6,16 12,19.5 C18,16 21,12.75 21,9.75 C21,6.92177112 19.349,4.5 16.5,4.5 Z"
      fill-rule="nonzero"
      opacity="0.3"
    />
    <path
      d="M12,19.5 C6,16 3,12.6834696 3,9.55040872 C3,6.72217984 4.651,4.5 7.5,4.5 C9.1095,4.5 10.99175,6.32463215 12,7.5 L12,19.5 Z"
      fill-rule="nonzero"
    />
  </svg>
</template>

<script lang="ts" setup>
import { iconDefaultProps } from './icon-default-props'

const props = defineProps({ ...iconDefaultProps })
</script>

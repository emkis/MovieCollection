<template>
  <div class="Loader" :style="`--size: ${size}; --border-width: ${borderWidth};`">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loader',
  props: {
    size: { type: String, default: '3.125rem' },
    borderWidth: { type: String, default: '0.3125rem' },
  },
})
</script>

<style lang="scss" scoped>
.Loader {
  position: relative;
  width: var(--size);
  height: var(--size);
  border-top: var(--border-width) solid rgba(255, 255, 255, 0.2);
  border-right: var(--border-width) solid rgba(255, 255, 255, 0.2);
  border-bottom: var(--border-width) solid rgba(255, 255, 255, 0.2);
  border-left: var(--border-width) solid #ffffff;
  border-radius: 50%;
  animation: loading 1.1s infinite linear;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <ol class="ReviewCardList">
    <slot />
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'ReviewCardList' })
</script>

<style lang="scss" scoped>
.ReviewCardList {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 45em) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

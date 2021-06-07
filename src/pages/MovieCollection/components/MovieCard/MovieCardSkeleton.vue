<template>
  <div class="MovieCardSkeleton">
    <div class="MovieCardSkeleton__inner-square" :key="square" v-for="square in 3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'MovieCardSkeleton' })
</script>

<style lang="scss" scoped>
.MovieCardSkeleton {
  $square-height: rem(22px);
  $gutter: rem(21px);

  display: grid;
  gap: $gutter;
  grid-template-rows: repeat(3, $square-height);
  grid-template-columns: repeat(12, 1fr);
  padding: rem(24px);
  min-height: $square-height;
  background: var(--concept-over-background);
  border-radius: $border-radius-m;

  :nth-child(1) {
    grid-row: 1 / 2;
    grid-column: 1 / 8;
  }

  :nth-child(2) {
    grid-row: 2 / 3;
    grid-column: 1 / 5;
  }

  :nth-child(3) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }

  &__inner-square {
    min-height: $square-height;
    background: var(--concept-over-background-element);
    border-radius: $border-radius-m;
  }
}
</style>

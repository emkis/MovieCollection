<template>
  <ol class="review-list">
    <slot />
  </ol>
</template>

<style lang="scss" scoped>
.review-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-xxs;

  @media (min-width: $breakpoint-m) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

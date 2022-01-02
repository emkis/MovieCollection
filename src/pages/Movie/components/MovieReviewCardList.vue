<template>
  <ol class="MovieReviewCardList">
    <slot />
  </ol>
</template>

<style lang="scss" scoped>
.MovieReviewCardList {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-xxs;

  @media (min-width: $breakpoint-m) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

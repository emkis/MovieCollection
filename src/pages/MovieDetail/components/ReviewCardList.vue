<template>
  <ol class="ReviewCardList">
    <slot />
  </ol>
</template>

<style lang="scss" scoped>
.ReviewCardList {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: $breakpoint-m) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

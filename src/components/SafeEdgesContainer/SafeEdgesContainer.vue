<template>
  <div class="SafeEdgesContainer">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.SafeEdgesContainer {
  padding: 0 $spacing-xxxs;

  @media (min-width: $breakpoint-m) {
    padding: 0 $spacing-xxs;
  }
}
</style>

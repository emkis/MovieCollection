<template>
  <div class="Container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.Container {
  padding-left: $spacing-xxxs;
  padding-right: $spacing-xxxs;

  @media (min-width: $breakpoint-m) {
    padding-left: $spacing-xxs;
    padding-right: $spacing-xxs;
  }
}
</style>

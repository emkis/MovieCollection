<template>
  <div class="Container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.Container {
  padding: rem(72px 15px);

  @media (min-width: $breakpoint-m) {
    padding: rem(120px 24px);
  }
}
</style>

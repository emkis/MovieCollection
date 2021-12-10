<template>
  <div class="Container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.Container {
  padding: 72px 15px;

  @media (min-width: $breakpoint-m) {
    padding: 120px 24px;
  }
}
</style>

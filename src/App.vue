<template>
  <Transition name="fade" mode="out-in">
    <RouterView :key="$route.fullPath" />
  </Transition>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 500ms;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>

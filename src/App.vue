<template>
  <RouterView :key="$route.fullPath" v-slot="{ Component: RouteComponent }">
    <Transition name="fade" mode="out-in">
      <Component :is="RouteComponent" />
    </Transition>
  </RouterView>
</template>

<script lang="ts" setup>
import { useQueryProvider } from 'vue-query'

useQueryProvider()
</script>

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

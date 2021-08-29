<template>
  <div class="Container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Container',
})
</script>

<style lang="scss" scoped>
.Container {
  padding: rem(72px 15px);

  @media (min-width: 43.75em) /* 700px */ {
    padding: rem(120px 24px);
  }
}
</style>

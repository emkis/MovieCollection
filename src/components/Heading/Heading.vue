<template>
  <component :is="computedAs" :class="['Heading', `Heading--level-${level}`]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { HeadingLevel } from './types'

type HeadingProps = {
  level: HeadingLevel
}

const props = defineProps<HeadingProps>()
const computedAs = computed(() => `h${props.level}`)
</script>

<style lang="scss" scoped>
.Heading {
  font-weight: 800;
  color: var(--concept-text-primary);

  &--level-1 {
    font-size: rem(37px);
  }

  &--level-2 {
    font-size: rem(28px);
  }

  &--level-3 {
    font-size: rem(22px);
  }

  &--level-4 {
    font-size: rem(18px);
  }

  &--level-5 {
    font-size: rem(16px);
  }

  @media (min-width: $breakpoint-m) {
    &--level-1 {
      font-size: rem(64px);
    }

    &--level-2 {
      font-size: rem(38px);
    }

    &--level-3 {
      font-size: rem(24px);
    }
  }
}
</style>

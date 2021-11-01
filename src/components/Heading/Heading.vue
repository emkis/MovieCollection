<template>
  <component :is="computedAs" :class="['Heading', `Heading--level-${level}`]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type HeadingLevel = '1' | '2' | '3' | '4'
type HeadingProps = { level: HeadingLevel }

const props = defineProps<HeadingProps>()
const computedAs = computed(() => `h${props.level}`)
</script>

<style lang="scss" scoped>
.Heading {
  @include heading-default-styles;
  color: var(--concept-text-primary);

  &--level-1 {
    font-size: rem(40px);
  }

  &--level-2 {
    font-size: rem(24px);
  }

  &--level-3 {
    font-size: rem(20px);
  }

  &--level-4 {
    font-size: rem(16px);
  }

  @media (min-width: $breakpoint-m) {
    &--level-1 {
      font-size: rem(48px);
    }

    &--level-2 {
      font-size: rem(32px);
    }

    &--level-3 {
      font-size: rem(24px);
    }
  }
}
</style>

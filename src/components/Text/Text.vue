<template>
  <component :is="as" class="Text">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue'
import { TextType, ETextTypes } from './types'

type TextProps = { as?: TextType }

const props = withDefaults(defineProps<TextProps>(), {
  as: ETextTypes.P,
})
</script>

<style lang="scss" scoped>
.Text {
  font-size: rem(18px);
  font-weight: 400;
  color: var(--concept-text-secondary);

  @media (min-width: $breakpoint-m) {
    font-size: rem(20px);
  }
}

strong.Text {
  font-weight: 600;
}
</style>

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
  font-size: rem(20px);
  @include body-default-styles;
  color: var(--concept-text-secondary);
}

strong.Text {
  font-weight: 700;
}
</style>

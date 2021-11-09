<template>
  <component :is="as" class="Text">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue'

type TextElement = 'p' | 'span' | 'strong' | 'small'
type TextProps = { as?: TextElement }

const props = withDefaults(defineProps<TextProps>(), {
  as: 'p',
})
</script>

<style lang="scss" scoped>
.Text {
  font-size: rem(20px);
  @include typography-body-styles;
  color: var(--concept-text-secondary);
}

strong.Text {
  font-weight: 700;
}

small.Text {
  font-size: rem(16px);
}
</style>

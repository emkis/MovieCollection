<template>
  <Component :is="as" class="Text">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue'
import { ThemeColors } from '@/services/theme'

type TextElement = 'p' | 'span' | 'strong' | 'small'
type TextProps = { as?: TextElement; color?: ThemeColors }

const props = withDefaults(defineProps<TextProps>(), {
  as: 'p',
  color: ThemeColors.cadetBlue,
})
</script>

<style lang="scss" scoped>
.Text {
  font-size: rem(20px);
  @include typography-body-styles;
  color: v-bind(color);
}

strong.Text {
  font-weight: 700;
}

small.Text {
  font-size: rem(16px);
}
</style>

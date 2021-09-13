<template>
  <button :class="['Button', `Button--${theme}`]" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue'
import { EButtonTheme } from './types'

type ButtonProps = {
  theme?: EButtonTheme
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  theme: EButtonTheme.Default,
  disabled: false,
})

const emit = defineEmits(['onClick'])

const handleClick = () => !props.disabled && emit('onClick')
</script>

<style lang="scss" scoped>
.Button {
  padding: 18px 38px;
  font-size: rem(18px);
  font-weight: 600;
  line-height: 1;
  border: 1px solid transparent;
  border-radius: $border-radius-s;
  color: var(--concept-text-primary);
  user-select: none;
  transition: background-color 200ms, color 200ms, opacity 200ms;
  cursor: pointer;

  &:not(&:disabled):hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &--default {
    background: var(--concept-over-background-element);
  }

  &--primary {
    background: var(--concept-primary-color);
  }

  &--outlined {
    border-color: currentColor;
    background: none;
  }

  &--error {
    background: var(--concept-error-color);
  }

  @media (min-width: $breakpoint-m) {
    font-size: rem(20px);
  }
}
</style>

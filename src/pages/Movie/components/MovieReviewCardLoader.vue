<template>
  <li class="card-loader loader-container" aria-hidden="true">
    <div class="rating-group">
      <IconHeart class="heart-pulse" :color="ThemeColors.geraldine" :size="36" />
      <div class="loader-row" style="--block-size: 56px" />
    </div>

    <div class="loader-row" />
    <div class="loader-row" />

    <div class="bottom-group loader-container">
      <div class="loader-row" style="--block-size: 122px" />
      <div class="loader-row" style="--block-size: 72px" />
    </div>
  </li>
</template>

<script lang="ts" setup>
import { ThemeColors } from '@/services/theme'
import { IconHeart } from '@/components/Icons'
</script>

<style lang="scss" scoped>
.card-loader {
  padding: $spacing-xxs;
  background: $color-charade;
  border-radius: $border-radius-m;
}

.loader-row {
  height: 16px;
  width: var(--block-size, 100%);
  background: linear-gradient(
    270deg,
    $color-bright-gray 0%,
    #505767 51.56%,
    $color-bright-gray 100%
  );
  border-radius: $border-radius-m;
  animation: loader-pulse 800ms infinite alternate;
}

.loader-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-xxxs;
}

.rating-group {
  display: grid;
  gap: $spacing-nano;
  align-items: center;
  $heart-icon-width: 36px;
  grid-template-columns: $heart-icon-width 1fr;
}

.bottom-group {
  margin-top: auto;
}

.heart-pulse {
  animation: heart-pulse 1s infinite;
}

@keyframes loader-pulse {
  from {
    opacity: 0.35;
  }

  to {
    opacity: 1;
  }
}

@keyframes heart-pulse {
  10% {
    transform: scale(1.2);
  }
}
</style>

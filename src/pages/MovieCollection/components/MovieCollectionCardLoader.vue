<template>
  <div class="card" aria-hidden="true">
    <div v-for="square in 3" :key="square" class="card__block" aria-hidden="true" />
  </div>
</template>

<style lang="scss" scoped>
.card {
  $square-height: 22px;
  display: grid;
  gap: 21px;
  grid-template-rows: repeat(3, $square-height);
  grid-template-columns: repeat(12, 1fr);
  padding: 24px;
  min-height: $square-height;
  background: $color-charade;
  border-radius: $border-radius-m;

  :nth-child(1) {
    grid-row: 1 / 2;
    grid-column: 1 / 8;
  }

  :nth-child(2) {
    grid-row: 2 / 3;
    grid-column: 1 / 5;
  }

  :nth-child(3) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }

  &__block {
    min-height: $square-height;
    background: $color-bright-gray;
    border-radius: $border-radius-m;
    animation: pulse 800ms infinite alternate;
  }
}

@keyframes pulse {
  from {
    opacity: 0.35;
  }

  to {
    opacity: 1;
  }
}

.heart-pulse {
  animation: pulse 1s infinite;
}

@keyframes heart-pulse {
  10% {
    transform: scale(1.2);
  }
}
</style>

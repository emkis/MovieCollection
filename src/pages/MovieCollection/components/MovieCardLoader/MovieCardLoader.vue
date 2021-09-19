<template>
  <div class="MovieCardLoader">
    <div v-for="square in 3" :key="square" class="MovieCardLoader__inner-square" />
  </div>
</template>

<style lang="scss" scoped>
.MovieCardLoader {
  $square-height: rem(22px);
  $gutter: rem(21px);

  display: grid;
  gap: $gutter;
  grid-template-rows: repeat(3, $square-height);
  grid-template-columns: repeat(12, 1fr);
  padding: rem(24px);
  min-height: $square-height;
  background: var(--concept-over-background);
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

  &__inner-square {
    min-height: $square-height;
    background: var(--concept-over-background-element);
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

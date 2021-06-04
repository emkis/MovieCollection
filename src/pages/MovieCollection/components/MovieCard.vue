<template>
  <div class="MovieCard">
    <Heading level="3">{{ movie.name }}</Heading>

    <div class="MovieCard__details">
      <Text as="span">{{ movie.year }}</Text>
      <Text as="span"> • </Text>
      <Text as="span">{{ categories }}</Text>
    </div>

    <div class="MovieCard__rating">
      <Component :is="RatingIcon" size="30" :color="EThemeColors.geraldine" />
      <Text as="strong">{{ movie.score }}%</Text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

import type { MovieCard } from '@/modules/movie/types'
import { EThemeColors } from '@/services/theme'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { IconHeart, IconHalfHeart } from '@/components/Icons'

export default defineComponent({
  name: 'MovieCard',
  props: {
    movie: { type: Object as PropType<MovieCard>, required: true },
  },
  components: { Heading, Text },
  setup(props) {
    const categories = computed(() => props.movie.category.join(', '))
    const RatingIcon = computed(() => (props.movie.score < 55 ? IconHalfHeart : IconHeart))

    return { categories, RatingIcon, EThemeColors }
  },
})
</script>

<style lang="scss" scoped>
.MovieCard {
  padding: rem(24px);
  text-align: left;
  background: var(--concept-over-background);
  border-radius: $border-radius-m;
  transition: transform 100ms ease, box-shadow 100ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--concept-over-background-element);
  }

  &:active {
    transform: scale(0.98);
  }

  > * + * {
    margin-top: rem(6px);
  }

  &__rating {
    display: flex;
    align-items: center;

    > strong {
      margin-left: rem(6px);
      color: var(--concept-text-primary);
    }
  }
}
</style>

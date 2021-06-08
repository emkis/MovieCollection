<template>
  <div class="MovieCard">
    <Heading level="3">{{ movie.name }}</Heading>

    <MovieInfo :year="movie.year" :category="movie.category" />

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
import { MovieInfo } from '@/components/MovieInfo'

export default defineComponent({
  name: 'MovieCard',
  props: {
    loading: { type: Boolean, default: false },
    movie: { type: Object as PropType<MovieCard>, required: true },
  },
  components: { Heading, Text, MovieInfo },
  setup(props) {
    const RatingIcon = computed(() => (props.movie.score < 55 ? IconHalfHeart : IconHeart))

    return { RatingIcon, EThemeColors }
  },
})
</script>

<style lang="scss" scoped>
.MovieCard {
  padding: rem(24px);
  background: var(--concept-over-background);
  border-radius: $border-radius-m;
  transition: transform 100ms ease, box-shadow 100ms ease;
  text-align: left;
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

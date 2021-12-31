<template>
  <div class="card">
    <Heading level="3">{{ movie.name }}</Heading>
    <MovieInfo :year="movie.year" :category="movie.category" />
    <div class="rating-group">
      <Component :is="RatingIcon" size="30" :color="ThemeColors.geraldine" />
      <Text as="strong">{{ movie.score }}%</Text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ThemeColors } from '@/services/theme'
import { Movie, MovieService } from '@/services/api/movie'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { IconHeart, IconHalfHeart } from '@/components/Icons'
import { MovieInfo } from '@/components/MovieInfo'

type MovieCollectionCardProps = {
  movie: Movie
}

const props = defineProps<MovieCollectionCardProps>()
const RatingIcon = computed(() =>
  MovieService.isScoreOverAverage(props.movie.score) ? IconHeart : IconHalfHeart
)
</script>

<style lang="scss" scoped>
.card {
  padding: 24px;
  background: $color-charade;
  border-radius: $border-radius-m;
  transition: transform 100ms ease, box-shadow 100ms ease;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px $color-bright-gray;
  }

  &:active {
    transform: scale(0.98);
  }

  > * + * {
    margin-top: 6px;
  }
}

.rating-group {
  display: flex;
  align-items: center;

  > strong {
    margin-left: 6px;
    color: $color-white;
  }
}
</style>

<template>
  <ol class="review-list">
    <MovieReviewCardLoader />
    <MovieReviewCard v-for="review in reviews" :key="review.id" :review="review" />
  </ol>
</template>

<script lang="ts" setup>
import { useMovieReviewsQuery } from '../queries/movie-reviews-query'

import MovieReviewCard from './MovieReviewCard.vue'
import MovieReviewCardLoader from './MovieReviewCardLoader.vue'

type MovieReviewProps = { movieSlug: string }

const props = defineProps<MovieReviewProps>()
const movieReviewsQuery = useMovieReviewsQuery(props.movieSlug)
const reviews = movieReviewsQuery.data
</script>

<style lang="scss">
.review-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-xxs;

  @media (min-width: $breakpoint-m) {
    grid-template-columns: 1fr 1fr;
  }

  > li {
    min-height: 320px;
  }
}
</style>

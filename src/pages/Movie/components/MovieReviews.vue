<template>
  <MovieReviewCardList>
    <MovieReviewCard v-for="review in reviews" :key="review.id" :review="review" />
  </MovieReviewCardList>
</template>

<script lang="ts" setup>
import { useMovieReviewsQuery } from '../queries/movie-reviews-query'

import MovieReviewCard from './MovieReviewCard.vue'
import MovieReviewCardList from './MovieReviewCardList.vue'

type MovieReviewProps = { movieSlug: string }

const props = defineProps<MovieReviewProps>()
const movieReviewsQuery = useMovieReviewsQuery(props.movieSlug)
const reviews = movieReviewsQuery.data
</script>

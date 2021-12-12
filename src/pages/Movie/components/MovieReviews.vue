<template>
  <section class="MovieReviews">
    <Heading class="MovieReviews__heading" level="3">Critic Reviews</Heading>

    <MovieReviewCardList>
      <MovieReviewCard v-for="review in reviews" :key="review.id" :review="review" />
    </MovieReviewCardList>
  </section>
</template>

<script lang="ts" setup>
import { useMovieReviewsQuery } from '../hooks/use-movie-reviews-query'

import { Heading } from '@/components/Heading'
import MovieReviewCard from './MovieReviewCard.vue'
import MovieReviewCardList from './MovieReviewCardList.vue'

type MovieReviewProps = { movieSlug: string }

const props = defineProps<MovieReviewProps>()
const movieReviewsQuery = useMovieReviewsQuery(props.movieSlug)
const reviews = movieReviewsQuery.data
</script>

<style lang="scss" scoped>
.MovieReviews {
  &__heading {
    margin-bottom: rem(24px);
  }
}
</style>

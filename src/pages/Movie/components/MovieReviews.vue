<template>
  <section class="MovieReviews">
    <Heading class="MovieReviews__heading" level="3">Critic Reviews</Heading>

    <MovieReviewCardList>
      <MovieReviewCard v-for="review in reviews" :key="review.id" :review="review" />
    </MovieReviewCardList>
  </section>
</template>

<script lang="ts" setup>
import { MovieService } from '@/services/api/movie'

import { Heading } from '@/components/Heading'
import MovieReviewCard from './MovieReviewCard.vue'
import MovieReviewCardList from './MovieReviewCardList.vue'

type MovieReviewProps = { movieSlug: string }

const props = defineProps<MovieReviewProps>()
const reviewsResponse = await MovieService.fetchMovieReviews(props.movieSlug)
const reviews = reviewsResponse.data
</script>

<style lang="scss" scoped>
.MovieReviews {
  &__heading {
    margin-bottom: rem(24px);
  }
}
</style>

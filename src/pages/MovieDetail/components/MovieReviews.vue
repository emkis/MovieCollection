<template>
  <section class="MovieReviews">
    <Heading class="MovieReviews__heading" level="3">Critic Reviews</Heading>

    <ReviewCardList>
      <ReviewCard :key="review.id" v-for="review in reviews" :review="review" />
    </ReviewCardList>
  </section>
</template>

<script lang="ts" setup>
import { MovieService } from '@/services/api/movie'

import { Heading } from '@/components/Heading'
import ReviewCard from './ReviewCard.vue'
import ReviewCardList from './ReviewCardList.vue'

type MovieReviewProps = { movieId: string }

const props = defineProps<MovieReviewProps>()
const reviewsResponse = await MovieService.fetchMovieReviews(props.movieId)
const reviews = reviewsResponse.data
</script>

<style lang="scss" scoped>
.MovieReviews {
  &__heading {
    margin-bottom: rem(24px);
  }
}
</style>

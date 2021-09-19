<template>
  <section class="MovieReviews">
    <Heading class="MovieReviews__heading" level="3">Critic Reviews</Heading>

    <ReviewCardList>
      <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
    </ReviewCardList>
  </section>
</template>

<script lang="ts" setup>
import { MovieService } from '@/services/api/movie'

import { Heading } from '@/components/Heading'
import ReviewCard from './ReviewCard.vue'
import ReviewCardList from './ReviewCardList.vue'

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

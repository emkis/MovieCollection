<template>
  <section class="MovieReviews">
    <Heading class="MovieReviews__heading" level="3">Critic Reviews</Heading>

    <ReviewCardList>
      <ReviewCard :key="review.id" v-for="review in reviews" :review="review" />
    </ReviewCardList>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MovieService } from '@/services/api/movie'

import { Heading } from '@/components/Heading'
import ReviewCard from './ReviewCard.vue'
import ReviewCardList from './ReviewCardList.vue'

export default defineComponent({
  name: 'MovieReviews',
  components: { Heading, ReviewCard, ReviewCardList },
  props: {
    movieId: { type: String, required: true },
  },
  async setup(props) {
    const reviews = await MovieService.fetchMovieReviews(props.movieId)

    return { reviews }
  },
})
</script>

<style lang="scss" scoped>
.MovieReviews {
  &__heading {
    margin-bottom: rem(24px);
  }
}
</style>

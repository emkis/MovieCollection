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

import { Heading } from '@/components/Heading'
import ReviewCard from './ReviewCard.vue'
import ReviewCardList from './ReviewCardList.vue'

export default defineComponent({
  name: 'MovieReviews',
  components: { Heading, ReviewCard, ReviewCardList },
  setup() {
    return {
      reviews: [
        {
          id: 'opaskdpoda',
          author: 'Jake Coyle',
          authorCompany: 'Associated Press',
          score: 33,
          comment: `In "The Mitchells vs. the Machines," family life is a brilliant, ever-changing collage.`,
        },
        {
          id: 'opaskdpo',
          author: 'Josh Spiegel',
          authorCompany: 'Slashfilm',
          score: 99,
          comment: `The Mitchells vs. the Machines is an unbeatable combination of humor and heart.`,
        },
      ],
    }
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

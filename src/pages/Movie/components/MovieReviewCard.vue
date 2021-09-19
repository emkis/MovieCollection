<template>
  <li class="MovieReviewCard">
    <Heading level="4" class="MovieReviewCard__score">
      <Component :is="HeartIcon" size="30" :color="EThemeColors.geraldine" />
      {{ review.score }}%
    </Heading>
    <Text class="MovieReviewCard__comment">{{ review.comment }}</Text>
    <Heading class="MovieReviewCard__author" level="5">
      {{ review.author }}
      <br />
      <span>
        from <i>{{ review.authorCompany }}</i>
      </span>
    </Heading>
  </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { EThemeColors } from '@/services/theme'
import { MovieReview, isGoodMovieScore } from '@/modules/movie'

import { Text } from '@/components/Text'
import { Heading } from '@/components/Heading'
import { IconHeart, IconHalfHeart } from '@/components/Icons'

type ReviewCardProps = { review: MovieReview }

const props = defineProps<ReviewCardProps>()
const HeartIcon = computed(() => {
  return isGoodMovieScore(props.review.score) ? IconHeart : IconHalfHeart
})
</script>

<style lang="scss" scoped>
.MovieReviewCard {
  display: flex;
  flex-direction: column;
  min-height: rem(320px);
  padding: rem(24px);
  border-radius: $border-radius-m;
  background: var(--concept-over-background);

  &__score {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__comment {
    margin: rem(24px 0);
  }

  &__author {
    margin-top: auto;

    span {
      font-weight: 700;
      color: var(--concept-text-secondary);
    }
  }
}
</style>

<template>
  <li class="ReviewCard">
    <Heading level="4">
      <Component :is="HeartIcon" size="30" :color="EThemeColors.geraldine" />
      {{ review.score }}%
    </Heading>

    <Text>{{ review.comment }}</Text>

    <Heading level="5">
      {{ review.author }}
      <br />
      <span>
        from <i>{{ review.authorCompany }}</i>
      </span>
    </Heading>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

import { EThemeColors } from '@/services/theme'
import { MovieReview, isGoodReviewScore } from '@/modules/movie'

import { Text } from '@/components/Text'
import { Heading } from '@/components/Heading'
import { IconHeart, IconHalfHeart } from '@/components/Icons'

export default defineComponent({
  name: 'ReviewCard',
  components: { Heading, Text },
  props: {
    review: { type: Object as PropType<MovieReview>, required: true },
  },
  setup(props) {
    const HeartIcon = computed(() => {
      return isGoodReviewScore(props.review.score) ? IconHeart : IconHalfHeart
    })

    return { EThemeColors, HeartIcon }
  },
})
</script>

<style lang="scss" scoped>
.ReviewCard {
  display: flex;
  flex-direction: column;
  min-height: rem(320px);
  padding: rem(28px);
  border-radius: $border-radius-m;
  background: var(--concept-over-background);

  > h4 {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  > p {
    margin: rem(24px 0);
  }

  > :last-child {
    margin-top: auto;
  }

  > h5 span {
    font-weight: 700;
    color: var(--concept-text-secondary);
  }
}
</style>

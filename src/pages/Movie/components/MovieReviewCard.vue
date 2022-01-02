<template>
  <li class="card-container">
    <Heading level="3" class="score">
      <Component :is="HeartIcon" size="36" :color="ThemeColors.geraldine" />
      {{ review.score }}%
    </Heading>
    <Text>{{ review.comment }}</Text>
    <div class="author">
      <Heading level="4">
        {{ review.author }}
      </Heading>
      <Text as="small">
        from <i>{{ review.authorCompany }}</i>
      </Text>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ThemeColors } from '@/services/theme'
import { MovieReview, MovieService } from '@/services/api/movie'

import { Text } from '@/components/Text'
import { Heading } from '@/components/Heading'
import { IconHeart, IconHalfHeart } from '@/components/Icons'

type ReviewCardProps = { review: MovieReview }

const props = defineProps<ReviewCardProps>()
const HeartIcon = computed(() => {
  return MovieService.isScoreOverAverage(props.review.score) ? IconHeart : IconHalfHeart
})
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-xxs;
  min-height: 320px;
  padding: $spacing-xxs;
  border-radius: $border-radius-m;
  background: $color-charade;
}

.score {
  display: flex;
  gap: $spacing-nano;
  align-items: center;
}

.author {
  margin-top: auto;

  small {
    font-weight: 700;
  }
}
</style>

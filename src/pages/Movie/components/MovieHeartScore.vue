<template>
  <span class="MovieHeartScore" aria-hidden="true">
    <Component
      :is="Icon"
      v-for="(Icon, iconIndex) in HeartScore"
      :key="iconIndex"
      :color="EThemeColors.geraldine"
      size="30"
    />
  </span>
</template>

<script lang="ts" setup>
import { computed, h } from 'vue'
import { MovieService, MAX_HEART_SCORE } from '@/services/api/movie'
import { IconHeart, IconHalfHeart } from '@/components/Icons'
import { EThemeColors } from '@/services/theme'

type MovieHeartScoreProps = {
  score: number
}

const props = defineProps<MovieHeartScoreProps>()
const IconHeartFaded = h(IconHeart, { style: { opacity: '0.3' } })

const HeartScore = computed(() => {
  const [score, scoreDecimal] = MovieService.calculateScore(props.score).split('.')
  const integerScore = Math.trunc(Number(score))
  const hasDecimal = Number(scoreDecimal) > 0

  const fadedHearts = Array(MAX_HEART_SCORE).fill(IconHeartFaded)
  const filledHearts = Array(integerScore).fill(IconHeart)
  const mergedHearts = hasDecimal
    ? [...filledHearts, IconHalfHeart, ...fadedHearts]
    : [...filledHearts, ...fadedHearts]

  return mergedHearts.slice(0, MAX_HEART_SCORE)
})
</script>

<style lang="scss" scoped>
.MovieHeartScore {
  display: flex;
}
</style>

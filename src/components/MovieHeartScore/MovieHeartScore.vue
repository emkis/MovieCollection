<template>
  <span class="MovieHeartScore" aria-hidden="true">
    <Component
      :is="Icon"
      :key="iconIndex"
      v-for="(Icon, iconIndex) in HeartScore"
      :color="EThemeColors.geraldine"
      size="30"
    />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { getMovieScore } from '@/modules/movie'
import { IconHeart, IconHalfHeart } from '@/components/Icons'
import { EThemeColors } from '@/services/theme'

type MovieHeartScoreProps = {
  score: number
}

const props = defineProps<MovieHeartScoreProps>()

const HeartScore = computed(() => {
  const score = Number(getMovieScore(props.score))
  const integerScore = Math.trunc(score)
  const filledHearts = Array(integerScore).fill(IconHeart)

  return [...filledHearts, IconHalfHeart]
})
</script>

<style lang="scss" scoped>
.MovieHeartScore {
  display: flex;
}
</style>

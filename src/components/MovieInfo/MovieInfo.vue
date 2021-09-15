<template>
  <span class="MovieInfo">
    <Text as="span">{{ year }}</Text>
    <Text class="MovieInfo__spacer" as="span"> • </Text>
    <Text as="span">{{ categories }}</Text>

    <template v-if="hasDuration">
      <Text class="MovieInfo__spacer" as="span"> • </Text>
      <Text as="span">{{ duration }}</Text>
    </template>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Text } from '@/components/Text'

type MovieInfoProps = {
  year: number
  category: string[]
  duration?: string
}

const props = defineProps<MovieInfoProps>()
const hasDuration = computed(() => Boolean(props.duration))
const categories = computed(() => props.category.join(', '))
</script>

<style lang="scss" scoped>
.MovieInfo__spacer {
  margin: rem(0 3px);
}
</style>

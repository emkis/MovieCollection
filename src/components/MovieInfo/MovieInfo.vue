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

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Text } from '@/components/Text'

export default defineComponent({
  name: 'MovieInfo',
  components: { Text },
  props: {
    year: { type: String, required: true },
    category: { type: Array as PropType<string[]>, required: true },
    duration: { type: String, required: false },
  },
  setup(props) {
    const hasDuration = computed(() => Boolean(props.duration))
    const categories = computed(() => props.category.join(', '))

    return { categories, hasDuration }
  },
})
</script>

<style lang="scss" scoped>
.MovieInfo__spacer {
  margin: rem(0 3px);
}
</style>

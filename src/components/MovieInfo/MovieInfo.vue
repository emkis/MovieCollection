<template>
  <span class="MovieInfo">
    <Text as="span">{{ age }}</Text>
    <InfoSpacing />
    <Text as="span">{{ categories }}</Text>
    <InfoSpacing />
    <Text as="span">{{ duration }}</Text>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

import InfoSpacing from './InfoSpacing.vue'
import { Text } from '@/components/Text'

export default defineComponent({
  name: 'MovieInfo',
  components: { Text, InfoSpacing },
  props: {
    age: { type: String, required: true },
    category: { type: Array as PropType<string[]>, required: true },
    duration: { type: String, required: true },
  },
  setup(props) {
    const categories = computed(() => props.category.join(', '))

    return { categories }
  },
})
</script>

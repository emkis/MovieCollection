<template>
  <Text class="InfoSpacing" as="span"> • </Text>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Text } from '@/components/Text'

export default defineComponent({
  name: 'InfoSpacing',
  components: { Text },
})
</script>

<style lang="scss" scoped>
.InfoSpacing {
  margin: rem(0 3px);
}
</style>

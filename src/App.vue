<template>
  <Movies />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { WakeUpApi } from '@/services/api/wake-up-api'
import { Movies } from '@/pages/Movies'

export default defineComponent({
  name: 'App',
  components: { Movies },
  setup() {
    WakeUpApi.init()
  },
})
</script>

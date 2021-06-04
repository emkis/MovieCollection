<template>
  <Container class="MovieCollection">
    <Heading level="1">Top box office 🍿</Heading>

    <Heading level="2" v-if="isFetchingMovie">Loading movies...</Heading>
    <Heading level="2" v-if="isFetchFailed">Error while loading</Heading>

    <ol class="MovieCollection__list">
      <li class="MovieCollection__list-item" :key="movie.id" v-for="movie in movies">
        <Heading level="3">{{ movie.name }}</Heading>
        <span>🍅 </span>
        <span>{{ movie.score }}%</span> -
        <span>{{ movie.year }}</span>
      </li>
    </ol>

    <!-- <Suspense>
      <Image
        alt="Cool stuff"
        src="https://cloud.headwayapp.co/changelogs_images/images/big/000/068/530-e7b211df6c65c9d713bdb192389967c37d85c9e0.png"
      />

      <template #fallback> Loading ... </template>
    </Suspense> -->
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import type { Movie } from './api/types'
// import { fetchMovieList } from './api'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
// import { Image } from './components/Image'

export default defineComponent({
  name: 'MovieCollection',
  components: { Container, Heading },
  setup() {
    const movies = ref<Movie[]>([])
    const isFetchingMovie = ref(true)
    const isFetchFailed = ref(false)

    async function getMovies() {
      isFetchingMovie.value = true

      // try {
      //   movies.value = await fetchMovieList()
      // } catch {
      //   isFetchFailed.value = true
      // } finally {
      //   isFetchingMovie.value = false
      // }
    }

    getMovies()

    return { movies, isFetchingMovie, isFetchFailed }
  },
})
</script>

<style lang="scss" scoped>
.MovieCollection {
  padding-top: rem(34px);
  text-align: center;

  &__list {
    list-style: none;
  }

  &__list-item {
    text-align: left;

    &:not(:last-child) {
      margin-bottom: rem(24px);
    }
  }
}
</style>

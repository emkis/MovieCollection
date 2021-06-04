<template>
  <Container class="MovieCollection">
    <Heading level="1">Movie Collection 🍿</Heading>

    <Text class="MovieCollection__description">
      An awesome movie collection with some nice user interface interactions
    </Text>

    <Heading level="2" v-if="isFetchingMovie">Loading movies...</Heading>
    <Heading level="2" v-if="isFetchFailed">Sorry, something went wrong :(</Heading>

    <ol class="MovieCollection__list">
      <li class="MovieCollection__list-item" :key="movie.id" v-for="movie in movies">
        <MovieCard tabindex="0" role="button" :movie="movie" />
      </li>
    </ol>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import type { MovieCard as TMovieCard } from '@/modules/movie/types'
import { MovieService } from '@/services/api/movie'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import MovieCard from './components/MovieCard.vue'

export default defineComponent({
  name: 'MovieCollection',
  components: { Container, Heading, Text, MovieCard },
  setup() {
    const movies = ref<TMovieCard[]>([])
    const isFetchingMovie = ref(true)
    const isFetchFailed = ref(false)

    async function getMovies() {
      isFetchFailed.value = false
      isFetchingMovie.value = true

      try {
        movies.value = await MovieService.fetchMovieCollection()
      } catch {
        isFetchFailed.value = true
      } finally {
        isFetchingMovie.value = false
      }
    }

    getMovies()

    return {
      movies,
      isFetchingMovie,
      isFetchFailed,
    }
  },
})
</script>

<style lang="scss" scoped>
.MovieCollection {
  margin: 0 auto;
  max-width: rem(768px);
  text-align: center;

  &__description {
    margin: rem(24px auto 72px);
    max-width: rem(450px);
  }

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

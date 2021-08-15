<template>
  <Container class="MovieCollection">
    <Heading level="1">Movie Collection 🍿</Heading>

    <Text class="MovieCollection__description">
      An awesome movie collection with some nice user interface interactions
    </Text>

    <Heading level="2" v-if="isFetchFailed">Sorry, something went wrong :(</Heading>

    <section class="MovieCollection__movies">
      <template v-if="isFetchingMovie">
        <MovieCardSkeleton :key="item" v-for="item in 5" />
      </template>

      <template v-else>
        <MovieCard
          tabindex="0"
          role="button"
          :movie="movie"
          :key="movie.id"
          v-for="movie in movies"
          @click="handleMovieClick(movie.id)"
          @keydown.space.enter.prevent="handleMovieClick(movie.id)"
        />
      </template>
    </section>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import type { MovieCard as TMovieCard } from '@/modules/movie'
import { MovieService } from '@/services/api/movie'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { MovieCard, MovieCardSkeleton } from './components/MovieCard'

export default defineComponent({
  name: 'MovieCollection',
  components: { Container, Heading, Text, MovieCard, MovieCardSkeleton },
  setup() {
    const { push } = useRouter()

    const movies = ref<TMovieCard[]>([])
    const isFetchingMovie = ref(true)
    const isFetchFailed = ref(false)

    function handleMovieClick(movieId: string) {
      push({
        name: 'MovieDetail',
        params: { id: movieId },
      })
    }

    async function getMovies() {
      isFetchFailed.value = false
      isFetchingMovie.value = true

      try {
        const moviesResponse = await MovieService.fetchMovieCollection()
        movies.value = moviesResponse.data
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
      handleMovieClick,
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

  &__movies > :not(:last-child) {
    margin-bottom: rem(24px);
  }
}
</style>

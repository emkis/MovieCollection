<template>
  <Container class="MovieCollection">
    <Heading class="MovieCollection__title" level="1">
      Movie Collection
      <IconPopcorn size="100%" />
    </Heading>

    <Text class="MovieCollection__description">
      An awesome movie collection with some nice user interface interactions
    </Text>

    <Heading level="2" v-if="isFetchFailed">Sorry, something went wrong :(</Heading>

    <section class="MovieCollection__movies">
      <template v-if="isFetchingMovie">
        <MovieCardLoader :key="item" v-for="item in 5" />
      </template>

      <template v-else>
        <MovieCard
          tabindex="0"
          role="button"
          :movie="movie"
          :key="movie.id"
          v-for="movie in movies"
          @click="handleMovieClick(movie.slug)"
          @keydown.space.enter.prevent="handleMovieClick(movie.slug)"
        />
      </template>
    </section>
  </Container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import type { Movie } from '@/modules/movie'
import { MovieService } from '@/services/api/movie'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { IconPopcorn } from '@/components/Icons'
import { Text } from '@/components/Text'
import { MovieCard } from './components/MovieCard'
import { MovieCardLoader } from './components/MovieCardLoader'

const { push } = useRouter()

const movies = ref<Movie[]>([])
const isFetchingMovie = ref(true)
const isFetchFailed = ref(false)

function handleMovieClick(movieSlug: string) {
  push({
    name: 'MovieDetail',
    params: { slug: movieSlug },
  })
}

async function getMovies() {
  isFetchFailed.value = false
  isFetchingMovie.value = true

  try {
    const moviesResponse = await MovieService.fetchMovies()
    movies.value = moviesResponse.data
  } catch {
    isFetchFailed.value = true
  } finally {
    isFetchingMovie.value = false
  }
}

getMovies()
</script>

<style lang="scss" scoped>
.MovieCollection {
  margin: 0 auto;
  max-width: rem(768px);
  text-align: center;

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      max-width: rem(40px);
      margin-left: 16px;
    }
  }

  &__description {
    margin: rem(24px auto 72px);
    max-width: rem(450px);
  }

  &__movies > :not(:last-child) {
    margin-bottom: rem(24px);
  }

  @media (min-width: $breakpoint-m) {
    &__title > svg {
      max-width: rem(60px);
    }
  }
}
</style>

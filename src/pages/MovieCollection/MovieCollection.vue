<template>
  <Container class="MovieCollection">
    <Heading class="MovieCollection__title" level="1">
      Movie Collection
      <IconPopcorn size="100%" />
    </Heading>

    <Text class="MovieCollection__description">
      An awesome movie collection with some nice user interface interactions
    </Text>

    <Heading v-if="moviesQuery.isError.value" level="2">Sorry, something went wrong :(</Heading>

    <section class="MovieCollection__movies">
      <template v-if="moviesQuery.isSuccess.value">
        <MovieCollectionCard
          v-for="movie in movies"
          :key="movie.id"
          tabindex="0"
          role="button"
          :movie="movie"
          @click="handleMovieClick(movie)"
          @keydown.space.enter.prevent="handleMovieClick(movie)"
        />
      </template>

      <template v-else-if="moviesQuery.isFetching.value">
        <MovieCollectionCardLoader v-for="item in 5" :key="item" />
      </template>
    </section>
  </Container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useMovies } from './hooks/use-movies'
import type { Movie } from '@/services/api/movie'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { IconPopcorn } from '@/components/Icons'
import { Text } from '@/components/Text'
import MovieCollectionCard from './components/MovieCollectionCard.vue'
import MovieCollectionCardLoader from './components/MovieCollectionCardLoader.vue'

const router = useRouter()
const moviesQuery = useMovies()
const movies = moviesQuery.data

function handleMovieClick(movie: Movie) {
  const { slug, name } = movie
  router.push({ name: 'Movie', params: { slug, name } })
}
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

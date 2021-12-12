<template>
  <Container class="container">
    <Heading class="app-title" level="1">
      Movie Collection
      <IconPopcorn size="100%" />
    </Heading>

    <Text class="app-description">
      An awesome movie collection with some nice user interface interactions
    </Text>

    <ul class="movie-list">
      <template v-if="moviesQuery.isSuccess.value">
        <li v-for="movie in movies" :key="movie.id" class="movie-list__item">
          <MovieCollectionCard
            tabindex="0"
            role="button"
            :movie="movie"
            @click="handleMovieClick(movie)"
            @keydown.space.enter.prevent="handleMovieClick(movie)"
          />
        </li>
      </template>

      <template v-else-if="moviesQuery.isFetching.value">
        <li v-for="item in 5" :key="item" class="movie-list__item" aria-hidden="true">
          <MovieCollectionCardLoader />
        </li>
      </template>
    </ul>
  </Container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useMoviesQuery } from './queries/movies-query'
import type { Movie } from '@/services/api/movie'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { IconPopcorn } from '@/components/Icons'
import { Text } from '@/components/Text'
import MovieCollectionCard from './components/MovieCollectionCard.vue'
import MovieCollectionCardLoader from './components/MovieCollectionCardLoader.vue'

const router = useRouter()
const moviesQuery = useMoviesQuery()
const movies = moviesQuery.data

function handleMovieClick(movie: Movie) {
  const { slug, name } = movie
  router.push({ name: 'Movie', params: { slug, name } })
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 768px;
  text-align: center;
}

.app-title {
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    max-width: rem(40px);
    margin-left: 16px;

    @media (min-width: $breakpoint-m) {
      max-width: rem(60px);
    }
  }
}

.app-description {
  margin: 24px auto 72px;
  max-width: 450px;
}

.movie-list > .movie-list__item:not(:last-child) {
  margin-bottom: 24px;
}
</style>

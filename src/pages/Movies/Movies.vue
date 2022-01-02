<template>
  <SafeEdgesContainer>
    <main class="container">
      <header class="header">
        <IconPopcorn class="header__icon" size="100%" />
        <Heading level="1">Movie Collection</Heading>
        <Text class="header__about">
          An awesome movie collection with some nice user interface interactions
        </Text>
      </header>

      <ul class="movie-list">
        <template v-if="moviesQuery.isSuccess.value">
          <li v-for="movie in movies" :key="movie.id">
            <MovieCard
              tabindex="0"
              role="button"
              class="movie-list__card"
              :movie="movie"
              @click="handleMovieClick(movie)"
              @keydown.space.enter.prevent="handleMovieClick(movie)"
              @mouseenter="handleMovieHover(movie)"
            />
          </li>
        </template>

        <template v-else-if="moviesQuery.isFetching.value">
          <li v-for="item in 5" :key="item" class="movie-list__item" aria-hidden="true">
            <MovieCardLoader />
          </li>
        </template>
      </ul>
    </main>
  </SafeEdgesContainer>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { debounce } from 'lodash-es'
import { useMoviesQuery } from './queries/movies-query'
import { useQueryClient } from 'vue-query'
import { createQueryKey, fetchMovieDetails } from '@/pages/Movie/queries/movie-details-query'
import type { Movie } from '@/services/api/movie'

import { SafeEdgesContainer } from '@/components/SafeEdgesContainer'
import { Heading } from '@/components/Heading'
import { IconPopcorn } from '@/components/Icons'
import { Text } from '@/components/Text'
import MovieCard from './components/MovieCard.vue'
import MovieCardLoader from './components/MovieCardLoader.vue'

const router = useRouter()
const queryClient = useQueryClient()
const moviesQuery = useMoviesQuery()
const movies = moviesQuery.data

function handleMovieClick(movie: Movie) {
  const { slug, name } = movie
  router.push({ name: 'Movie', params: { slug, name } })
}

function prefetchMovie(movie: Movie) {
  const queryKey = createQueryKey(movie.slug)
  const fetcher = () => fetchMovieDetails(movie.slug)
  queryClient.prefetchQuery(queryKey, fetcher, { staleTime: Infinity })
}

const handleMovieHover = debounce(prefetchMovie, 300)
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: $spacing-md 0 $spacing-xxl;
}

.header {
  display: grid;
  gap: $spacing-xxxs;
  text-align: left;

  &__icon {
    max-width: 40px;
    @media (min-width: $breakpoint-m) {
      max-width: 60px;
    }
  }

  &__about {
    max-width: 426px;
  }
}

.movie-list {
  margin-top: $spacing-xxl;
  display: grid;
  gap: $spacing-xxs;
  grid-template-columns: 1fr;

  @media (min-width: $breakpoint-m) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

  &__card {
    min-height: 228px;
  }
}
</style>

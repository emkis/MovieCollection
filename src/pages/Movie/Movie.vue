<template>
  <div v-if="movieDetailsQuery.isSuccess.value">
    <div class="movie-poster">
      <img :src="movie!.poster" alt="" aria-hidden="true" />
    </div>

    <SafeEdgesContainer>
      <main class="content-container">
        <section>
          <Heading level="1">{{ movie!.name }}</Heading>
          <div class="movie-specification">
            <MovieInfo
              :year="movie!.year"
              :duration="movie!.duration"
              :category="movie!.category"
            />
            <Text class="movie-score">
              <MovieHeartScore :score="movie!.score" />
              <Text as="span" :color="ThemeColors.white">{{ movie!.score }}%</Text>
            </Text>
          </div>
        </section>

        <section>
          <Heading level="2">About</Heading>
          <Text>{{ movie!.description }}</Text>
        </section>

        <section>
          <Heading level="2">Critic Reviews</Heading>
          <MovieReviews :movieSlug="movieSlug" />
        </section>
      </main>
    </SafeEdgesContainer>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieDetailsQuery } from './queries/movie-details-query'
import { usePageTitle } from '@/hooks/use-page-title'
import { ThemeColors } from '@/services/theme'

import { SafeEdgesContainer } from '@/components/SafeEdgesContainer'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { MovieInfo } from '@/components/MovieInfo'
import MovieHeartScore from './components/MovieHeartScore.vue'
import MovieReviews from './components/MovieReviews.vue'

const route = useRoute()
const pageTitle = usePageTitle()

const movieSlug = route.params.slug as string
const movieDetailsQuery = useMovieDetailsQuery(movieSlug)
const movie = movieDetailsQuery.data

const setMovieNameOnPage = () => {
  const movieName = route.params.name as string | undefined

  if (movieName) pageTitle.set(movieName)
  else movie.value && pageTitle.set(movie.value.name)
}

watch(movie, setMovieNameOnPage, { immediate: true })
</script>

<style lang="scss" scoped>
.movie-poster {
  position: relative;
  height: 519px;

  @media (min-width: $breakpoint-m) {
    height: 623px;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(24, 26, 32, 0.37) 28.04%,
      rgba(24, 26, 32, 0.94) 74.27%,
      rgba(24, 26, 32, 0.97) 79.98%,
      rgba(24, 26, 32, 0.99) 85.69%,
      #181a20 91.25%
    );
  }
}

.content-container {
  position: relative;
  max-width: 1200px;
  margin: -280px auto 0;
  padding-bottom: $spacing-xxxl;
  text-align: left;
}

section {
  display: grid;
  gap: $spacing-xxs;

  & + section {
    margin-top: $spacing-xl;
  }
}

.movie-specification {
  display: grid;
  gap: $spacing-xxxs;
}

.movie-score {
  display: flex;
  align-items: center;
  gap: $spacing-nano;
}
</style>

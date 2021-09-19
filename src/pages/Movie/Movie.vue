<template>
  <div v-if="isSuccess" class="Movie">
    <div class="Movie__poster">
      <Suspense>
        <Image alt="Movie Poster" :src="movie.poster" />

        <template #fallback> Loading hero... </template>
      </Suspense>
    </div>

    <main class="Movie__presentation">
      <Heading level="2">{{ movie.name }}</Heading>
      <MovieInfo
        class="Movie__about"
        :year="movie.year"
        :duration="movie.duration"
        :category="movie.category"
      />
      <Text class="Movie__rating">
        <MovieHeartScore :score="movie.score" />
        <Text as="strong">{{ movie.score }}%</Text>
      </Text>
      <Text class="Movie__description">{{ movie.description }}</Text>
    </main>

    <Suspense>
      <MovieReviews :movieSlug="movieSlug" />

      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieDetails } from './hooks/use-movie-details'
import { usePageTitle } from '@/hooks/use-page-title'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Image } from '@/components/Image'
import { MovieInfo } from '@/components/MovieInfo'
import MovieHeartScore from './components/MovieHeartScore.vue'
import MovieReviews from './components/MovieReviews.vue'

const { params } = useRoute()
const { setTitle } = usePageTitle()
const movieSlug = params.slug as string
const { movieDetails: movie, isSuccess } = useMovieDetails(movieSlug)
const setMovieNameOnPage = () => setTitle(movie.value!.name)

watch(movie, () => isSuccess && setMovieNameOnPage())
</script>

<style lang="scss" scoped>
.Movie {
  $poster-height: 400px;

  max-width: 768px;
  margin: 0 auto;
  padding: 0 24px 72px;

  &__poster {
    position: absolute;
    top: 0;
    left: 0;
    height: $poster-height;
    width: 100%;

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
        rgba(196, 196, 196, 0) 0%,
        rgba(78, 79, 83, 0.688174) 59.56%,
        var(--color-shark) 91.25%
      );
    }
  }

  &__presentation {
    position: relative;
    padding-top: calc(#{$poster-height} - 110px);
    text-align: center;
  }

  &__about {
    display: block;
    margin: rem(24px 0 14px);
  }

  &__rating {
    display: flex;
    justify-content: center;
    align-items: center;

    > strong {
      margin-left: rem(6px);
      color: var(--concept-text-primary);
    }
  }

  &__description {
    text-align: left;
    margin: rem(72px 0 120px);
  }
}
</style>

<template>
  <div class="MovieDetail" v-if="movie?.id">
    <div class="MovieDetail__poster">
      <Suspense>
        <Image alt="Movie Poster" :src="movie.poster" />

        <template #fallback> Loading hero... </template>
      </Suspense>
    </div>

    <main class="MovieDetail__presentation">
      <Heading level="2">{{ movie.name }}</Heading>

      <MovieInfo
        class="MovieDetail__about"
        :year="movie.year"
        :duration="movie.duration"
        :category="movie.category"
      />

      <Text class="MovieDetail__rating">
        <IconHeart size="30" :color="EThemeColors.geraldine" :key="heart" v-for="heart in 4" />
        <Text as="strong">{{ movie.score }}%</Text>
      </Text>

      <Text class="MovieDetail__description">{{ movie.description }}</Text>
    </main>

    <Suspense>
      <MovieReviews :movieId="movieId" />

      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

import { usePageTitle } from '@/hooks/page-title'
import { EThemeColors } from '@/services/theme'
import { MovieService } from '@/services/api/movie'
import type { MovieDetail } from '@/modules/movie'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Image } from '@/components/Image'
import { IconHeart } from '@/components/Icons'
import { MovieInfo } from '@/components/MovieInfo'
import MovieReviews from './components/MovieReviews.vue'

export default defineComponent({
  name: 'MovieDetail',
  components: { Heading, Text, Image, IconHeart, MovieInfo, MovieReviews },
  setup() {
    const { setTitle } = usePageTitle()
    const { params } = useRoute()
    const movie = ref<MovieDetail>()

    const movieId = params.slug as string

    async function useMovieDetails() {
      const movieDetailResponse = await MovieService.fetchMovieDetails(movieId)
      movie.value = movieDetailResponse.data

      setTitle(movie.value.name)
    }

    useMovieDetails()

    return { movieId, movie, EThemeColors }
  },
})
</script>

<style lang="scss" scoped>
.MovieDetail {
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

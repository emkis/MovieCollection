import { ref, readonly } from 'vue'
import { useFetch } from '@/hooks/use-fetch'
import { MovieService } from '@/services/api/movie'

import type { MovieDetail } from '@/modules/movie'
import type { UseMovieDetailsHook, DetailsResponse } from './types'

export function useMovieDetails(movieSlug: string): UseMovieDetailsHook {
  const movieDetails = ref<MovieDetail | null>(null)
  const fetcher = () => MovieService.fetchMovieDetails(movieSlug)

  const { isError, isFetching, isSuccess, refetch } = useFetch<DetailsResponse>(fetcher, {
    onSuccess: (response) => (movieDetails.value = response.data),
  })

  return {
    movieDetails: readonly(movieDetails),
    isError,
    isSuccess,
    isFetching,
    refetch,
  }
}

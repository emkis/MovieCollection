import { ref } from 'vue'
import { useFetch } from '@/hooks/use-fetch'
import { MovieService, MovieDetail } from '@/services/api/movie'
import type { UseMovieDetailsHook, DetailsResponse } from './types'

export function useMovieDetails(movieSlug: string): UseMovieDetailsHook {
  const movieDetails = ref<MovieDetail | null>(null)
  const fetcher = () => MovieService.fetchMovieDetails(movieSlug)

  const { isError, isFetching, isSuccess, refetch } = useFetch<DetailsResponse>(fetcher, {
    onSuccess: (response) => (movieDetails.value = response.data),
  })

  return {
    movieDetails,
    isError,
    isSuccess,
    isFetching,
    refetch,
  }
}

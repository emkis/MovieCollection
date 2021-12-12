import { useQuery } from 'vue-query'
import { MovieService } from '@/services/api/movie'
import { getDataFromRequest } from '@/utilities/from-request'
import { minutesInMilliseconds } from '@/utilities/time'
import { movieKeys } from './movie-query-keys'

export function createQueryKey(movieSlug: string) {
  return movieKeys.detailWithSlug(movieSlug)
}

export function fetchMovieDetails(movieSlug: string) {
  return getDataFromRequest(() => MovieService.fetchMovieDetails(movieSlug))
}

export function useMovieDetailsQuery(movieSlug: string) {
  return useQuery(createQueryKey(movieSlug), () => fetchMovieDetails(movieSlug), {
    staleTime: minutesInMilliseconds(3),
  })
}

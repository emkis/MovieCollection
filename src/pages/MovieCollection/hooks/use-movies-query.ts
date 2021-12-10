import { useQuery } from 'vue-query'
import { MovieService } from '@/services/api/movie'
import { getDataFromRequest } from '@/utilities/from-request'

export const moviesKeys = {
  all: ['movies'] as const,
}

export function useMoviesQuery() {
  const fetchMovies = () => getDataFromRequest(MovieService.fetchMovies)
  return useQuery(moviesKeys.all, fetchMovies, {
    staleTime: Infinity,
  })
}

import { useQuery } from 'vue-query'
import { MovieService } from '@/services/api/movie'
import { getDataFromRequest } from '@/utilities/from-request'

export const queryKey = 'movies'

export function useMovies() {
  const fetchMovies = () => getDataFromRequest(MovieService.fetchMovies)
  return useQuery(queryKey, fetchMovies)
}

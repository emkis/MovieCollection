import { useQuery } from 'vue-query'
import { MovieService } from '@/services/api/movie'
import { getDataFromRequest } from '@/utilities/from-request'

export const queryKey = 'movie-detail'

export function useMovieDetails(movieSlug: string) {
  const fetchMovieDetails = () => {
    return getDataFromRequest(() => MovieService.fetchMovieDetails(movieSlug))
  }

  return useQuery(['movie-detail', movieSlug], fetchMovieDetails)
}

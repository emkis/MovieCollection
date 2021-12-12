import { useQuery } from 'vue-query'
import { MovieService } from '@/services/api/movie'
import { getDataFromRequest } from '@/utilities/from-request'
import { movieKeys } from './movie-query-keys'

export function useMovieDetailsQuery(movieSlug: string) {
  const fetchMovieDetails = () => {
    return getDataFromRequest(() => MovieService.fetchMovieDetails(movieSlug))
  }

  return useQuery(movieKeys.detailWithSlug(movieSlug), fetchMovieDetails, {
    staleTime: Infinity,
  })
}

import { useQuery } from 'vue-query'
import { MovieService } from '@/services/api/movie'
import { getDataFromRequest } from '@/utilities/from-request'

export const movieDetailsKeys = {
  all: ['movie', 'detail'] as const,
  specific: (slug: string) => [...movieDetailsKeys.all, slug] as const,
}

export function useMovieDetailsQuery(movieSlug: string) {
  const fetchMovieDetails = () => {
    return getDataFromRequest(() => MovieService.fetchMovieDetails(movieSlug))
  }

  return useQuery(movieDetailsKeys.specific(movieSlug), fetchMovieDetails, {})
}

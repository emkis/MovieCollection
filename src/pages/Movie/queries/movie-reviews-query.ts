import { useQuery } from 'vue-query'
import { MovieService, MovieReview } from '@/services/api/movie'
import { getDataFromRequest } from '@/utilities/from-request'
import { movieKeys } from './movie-query-keys'

export function createQueryKey(movieSlug: string) {
  return movieKeys.reviewWithSlug(movieSlug)
}

export function useMovieReviewsQuery(movieSlug: string) {
  const fetchMovieReviews = () => {
    return getDataFromRequest(() => MovieService.fetchMovieReviews(movieSlug))
  }

  return useQuery<MovieReview[]>(createQueryKey(movieSlug), fetchMovieReviews, {
    staleTime: 2000 * 60, // 2 minutes
  })
}

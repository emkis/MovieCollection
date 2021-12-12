import { useQuery } from 'vue-query'
import { MovieService, MovieReview } from '@/services/api/movie'
import { getDataFromRequest } from '@/utilities/from-request'

export const movieReviewsKeys = {
  all: ['movie', 'review'] as const,
  specific: (slug: string) => [...movieReviewsKeys.all, slug] as const,
}

export function useMovieReviewsQuery(movieSlug: string) {
  const fetchMovieReviews = () => {
    return getDataFromRequest(() => MovieService.fetchMovieReviews(movieSlug))
  }

  return useQuery<MovieReview[]>(movieReviewsKeys.specific(movieSlug), fetchMovieReviews, {
    staleTime: 2000 * 60, // 2 minutes
  })
}

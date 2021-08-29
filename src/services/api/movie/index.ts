import type { Movie, MovieDetail, MovieReview } from '@/modules/movie/types'
import { ApiService } from '@/services/api'

function createMovieService(httpClient = ApiService) {
  return {
    async fetchMovies() {
      return httpClient.get<Movie[]>('/movies')
    },

    async fetchMovieReviews(movieSlug: string) {
      return httpClient.get<MovieReview[]>(`/movie-review/${movieSlug}`)
    },

    async fetchMovieDetails(movieSlug: string) {
      return httpClient.get<MovieDetail>(`/movie-detail/${movieSlug}`)
    },
  }
}

export const MovieService = createMovieService()

import type { Movie, MovieDetail, MovieReview } from '@/modules/movie/types'
import { ApiService } from '@/services/api'

function createMovieService(httpClient = ApiService) {
  return {
    async fetchMovieCollection() {
      return httpClient.get<Movie[]>('/movies')
    },

    async fetchMovieReviews(movieId: string) {
      return httpClient.get<MovieReview[]>(`/movie-review/${movieId}`)
    },

    async fetchMovieDetails(movieId: string) {
      return httpClient.get<MovieDetail>(`/movie-detail/${movieId}`)
    },
  }
}

export const MovieService = createMovieService()

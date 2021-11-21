import { ApiService } from '@/services/api'
import type { Movie, MovieDetail, MovieReview } from './movie-types'

export const MAX_HEART_SCORE = 5
export const AVERAGE_MOVIE_SCORE = 55

export function createMovieService(httpClient = ApiService) {
  return {
    fetchMovies() {
      return httpClient.get<Movie[]>('/movies')
    },

    fetchMovieReviews(movieSlug: string) {
      return httpClient.get<MovieReview[]>(`/movie/${movieSlug}/review`)
    },

    fetchMovieDetails(movieSlug: string) {
      return httpClient.get<MovieDetail>(`/movie/${movieSlug}/detail`)
    },

    isScoreOverAverage(score: number): boolean {
      return score > AVERAGE_MOVIE_SCORE
    },

    calculateScore(score: number): string {
      const calculatedScore = (MAX_HEART_SCORE * score) / 100
      return calculatedScore.toFixed(2)
    },
  }
}

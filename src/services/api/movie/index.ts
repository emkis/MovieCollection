import { createMovieService, AVERAGE_MOVIE_SCORE, MAX_HEART_SCORE } from './movie-service'
import type { Movie, MovieDetail, MovieReview } from './movie-types'

export const MovieService = createMovieService()
export { Movie, MovieDetail, MovieReview }
export { createMovieService, AVERAGE_MOVIE_SCORE, MAX_HEART_SCORE }

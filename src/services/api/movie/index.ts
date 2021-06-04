import { pick, omit } from 'lodash-es'

import type { MovieCard, MovieDetail, MovieReview } from '@/modules/movie/types'
import { ApiService } from '@/services/api'
import { asyncDelay } from '@/utilities'
import { movies } from './static-data'

interface IMovieService {
  fetchMovieCollection(delay?: number): Promise<MovieCard[]>
  fetchMovieDetails(targetMovieId: string, delay?: number): Promise<MovieDetail>
  fetchMovieReviews(targetMovieId: string, delay?: number): Promise<MovieReview[]>
}

function getMovieById(targetMovieId: string) {
  const movie = movies.find((movie) => movie.id === targetMovieId)

  if (!movie) {
    throw new Error(`Movie id:"${targetMovieId}" not exists`)
  }

  return movie
}

function createMovieService(_httpClient = ApiService): IMovieService {
  return {
    async fetchMovieCollection(delay = 1500) {
      await asyncDelay(delay)

      return movies.map((movie) => {
        return pick(movie, 'id', 'name', 'category', 'score', 'year')
      })
    },

    async fetchMovieReviews(targetMovieId: string, delay = 1500) {
      await asyncDelay(delay)

      const movie = getMovieById(targetMovieId)
      return pick(movie, ['reviews']).reviews
    },

    async fetchMovieDetails(targetMovieId: string, delay = 1500) {
      await asyncDelay(delay)

      const movie = getMovieById(targetMovieId)
      return omit(movie, ['reviews'])
    },
  }
}

export const MovieService = createMovieService()

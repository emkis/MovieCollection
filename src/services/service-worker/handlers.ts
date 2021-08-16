import { rest, RestHandler } from 'msw'
import { omit, pick } from 'lodash-es'

import { environment } from '@/configs/environment'
import { movies } from './static-data'
import type { Movie, MovieDetail, MovieReview } from '@/modules/movie'

const { apiUrl } = environment
const defaultDelay = 1800

function getMovieById(targetMovieId: string) {
  const movie = movies.find((movie) => movie.id === targetMovieId)

  if (!movie) {
    throw new Error(`Movie id:"${targetMovieId}" not exists`)
  }

  return movie
}

export const handlers: RestHandler[] = [
  rest.get<never, Movie[]>(`${apiUrl}/movies`, (request, response, context) => {
    const parsedMovies = movies.map((movie) => {
      return pick(movie, 'id', 'name', 'category', 'score', 'year')
    })

    return response(context.status(200), context.delay(defaultDelay), context.json(parsedMovies))
  }),

  rest.get<never, MovieReview[]>(`${apiUrl}/movie-review/:id`, (request, response, context) => {
    const { id: movieId } = request.params
    const movie = getMovieById(movieId)

    return response(context.status(200), context.delay(defaultDelay), context.json(movie.reviews))
  }),

  rest.get<never, MovieDetail>(`${apiUrl}/movie-detail/:id`, (request, response, context) => {
    const { id: movieId } = request.params
    const movie = getMovieById(movieId)
    const movieDetails = omit(movie, ['reviews'])

    return response(context.status(200), context.delay(defaultDelay), context.json(movieDetails))
  }),
]

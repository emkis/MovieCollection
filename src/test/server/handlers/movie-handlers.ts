import { rest, RestHandler, response, context } from 'msw'
import { omit, pick } from 'lodash-es'
import { environment } from '@/configs/environment'
import { movieDatabase } from '@/test/data/movies-database'
import type { Movie, MovieDetail, MovieReview } from '@/services/api/movie'

const { apiUrl } = environment
const defaultDelay = 1800

function notFoundResponse() {
  return response(
    context.status(404),
    context.delay(defaultDelay),
    context.json({ message: 'Movie not found' })
  )
}

export const movieHandlers: RestHandler[] = [
  rest.get<never, Movie[]>(`${apiUrl}/movies`, (_, response, context) => {
    const movies = movieDatabase.getAll()

    const parsedMovies = movies.map((movie) => {
      return pick(movie, 'id', 'slug', 'name', 'category', 'score', 'year')
    })

    return response(context.status(200), context.delay(defaultDelay), context.json(parsedMovies))
  }),

  rest.get<never, MovieReview[]>(`${apiUrl}/movie-review/:slug`, (request, response, context) => {
    const movie = movieDatabase.getBySlug(request.params.slug)
    if (!movie) return notFoundResponse()

    return response(context.status(200), context.delay(defaultDelay), context.json(movie.reviews))
  }),

  rest.get<never, MovieDetail>(`${apiUrl}/movie-detail/:slug`, (request, response, context) => {
    const movie = movieDatabase.getBySlug(request.params.slug)
    if (!movie) return notFoundResponse()

    const movieDetails = omit(movie, ['reviews'])
    return response(context.status(200), context.delay(defaultDelay), context.json(movieDetails))
  }),
]

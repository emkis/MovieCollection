import { rest, RestHandler } from 'msw'
import { pick } from 'lodash-es'

import { environment } from '@/configs/environment'
import { movies } from './static-data'

export const handlers: RestHandler[] = [
  rest.get(`${environment.apiUrl}/movies`, (request, response, context) => {
    const parsedMovies = movies.map((movie) => {
      return pick(movie, 'id', 'name', 'category', 'score', 'year')
    })

    return response(context.status(200), context.delay(2000), context.json(parsedMovies))
  }),
]

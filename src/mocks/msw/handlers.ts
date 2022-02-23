import type { RestHandler } from 'msw'
import { movieHandlers } from '@msw/modules/movie/handlers'

export const handlers: RestHandler[] = [...movieHandlers]

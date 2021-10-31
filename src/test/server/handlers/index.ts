import type { RestHandler } from 'msw'
import { movieHandlers } from './movie-handlers'

export const handlers: RestHandler[] = [...movieHandlers]

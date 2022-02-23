import type { RestHandler } from 'msw'
import { movieHandlers } from '@/mocks/msw/modules/movie/handlers'

export const handlers: RestHandler[] = [...movieHandlers]

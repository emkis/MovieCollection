import { setupServer } from 'msw/node'
import { handlers } from '@/mocks/msw/handlers'

export const server = setupServer(...handlers)

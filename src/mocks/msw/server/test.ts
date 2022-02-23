import { setupServer } from 'msw/node'
import { handlers } from '@msw/handlers/default'

export const server = setupServer(...handlers)

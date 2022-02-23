import { setupWorker } from 'msw'
import { handlers } from '@/mocks/msw/handlers'

export const worker = setupWorker(...handlers)

worker.start({
  quiet: true,
  onUnhandledRequest: 'bypass',
})

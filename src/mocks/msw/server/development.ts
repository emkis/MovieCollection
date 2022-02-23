import { setupWorker } from 'msw'
import { handlers } from '@msw/handlers/default'

export const worker = setupWorker(...handlers)

worker.start({
  quiet: true,
  onUnhandledRequest: 'bypass',
})

import { rest, RestHandler } from 'msw'

const defaultErrorMessage = 'MSW Forced network error'

export const networkErrorHandlers: RestHandler[] = [
  rest.get('*', (_, response) => response.networkError(defaultErrorMessage)),
  rest.post('*', (_, response) => response.networkError(defaultErrorMessage)),
  rest.patch('*', (_, response) => response.networkError(defaultErrorMessage)),
  rest.put('*', (_, response) => response.networkError(defaultErrorMessage)),
  rest.delete('*', (_, response) => response.networkError(defaultErrorMessage)),
]

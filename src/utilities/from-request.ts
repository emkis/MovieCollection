import type { AxiosResponse } from 'axios'

export async function getDataFromRequest<T>(fetcher: () => Promise<AxiosResponse<T>>) {
  const response = await fetcher()
  return response.data
}

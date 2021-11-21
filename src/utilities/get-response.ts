import type { AxiosResponse } from 'axios'

export async function getResponseData<T>(fetcher: () => Promise<AxiosResponse<T>>) {
  const response = await fetcher()
  return response.data
}

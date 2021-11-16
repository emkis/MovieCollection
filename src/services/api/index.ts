import axios from 'axios'
import axiosRetry from 'axios-retry'
import { environment } from '@/configs/environment'

export function createApiService(baseURL: string) {
  return axios.create({
    baseURL,
    timeout: 10000,
  })
}

export const ApiService = createApiService(environment.apiUrl)
axiosRetry(ApiService, { retries: 1 })

import axios from 'axios'
import axiosRetry from 'axios-retry'

import { environment } from '@/configs/environment'

export function createApiService() {
  return axios.create({
    baseURL: environment.apiUrl,
    timeout: 10000,
  })
}

export const ApiService = createApiService()
axiosRetry(ApiService, { retries: 1 })

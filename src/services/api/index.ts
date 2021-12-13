import axios from 'axios'
import { environment } from '@/configs/environment'

export function createApiService(baseURL: string) {
  return axios.create({
    baseURL,
    timeout: 10000,
  })
}

export const ApiService = createApiService(environment.apiUrl)

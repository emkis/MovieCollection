import { validateStorageItem } from './local-storage-validators'
import { createLocalStorageKey } from './local-storage-key'

export function createLocalStorageService() {
  return {
    get<T>(key: string): T | null {
      const customKey = createLocalStorageKey(key)
      const isValidData = validateStorageItem(customKey)
      if (!isValidData) return null

      const rawData = localStorage.getItem(customKey) as string
      return JSON.parse(rawData)
    },

    set<T>(key: string, data: T): void {
      const customKey = createLocalStorageKey(key)
      localStorage.setItem(customKey, JSON.stringify(data))
    },

    delete(key: string): void {
      const customKey = createLocalStorageKey(key)
      localStorage.removeItem(customKey)
    },
  }
}

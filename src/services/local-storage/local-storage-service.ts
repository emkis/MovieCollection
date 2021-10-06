import { validateStorageItem } from './local-storage-validators'

const LOCAL_STORAGE_PREFIX = '@MovieCollection:'

export function createLocalStorageService(storagePrefixKey = LOCAL_STORAGE_PREFIX) {
  // Creates the custom key that will be used in all stored items
  function makeCustomKey(key: string): string {
    return `${storagePrefixKey}${key}`
  }

  return {
    get<T>(key: string): T | null {
      const customKey = makeCustomKey(key)
      const isValidData = validateStorageItem(customKey)
      if (!isValidData) return null

      const rawData = localStorage.getItem(customKey) as string
      return JSON.parse(rawData)
    },

    set<T>(key: string, data: T): void {
      const customKey = makeCustomKey(key)
      localStorage.setItem(customKey, JSON.stringify(data))
    },

    delete(key: string): void {
      const customKey = makeCustomKey(key)
      localStorage.removeItem(customKey)
    },
  }
}

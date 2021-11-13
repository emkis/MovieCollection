import { hashString } from '@/utilities/hash'
import { environment } from '@/configs/environment'

export const localStoragePrefixKey = 'MovieCollection'

export function createLocalStorageKey(originalKey: string): string {
  const finalKey = environment.isProduction ? hashString(originalKey) : originalKey

  return `${localStoragePrefixKey}:${finalKey}`
}

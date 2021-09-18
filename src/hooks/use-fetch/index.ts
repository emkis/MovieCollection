import { ref, readonly, watchEffect } from 'vue'
import type { FetchStatus, UseFetchHook, UseFetchOptions } from './types'

export function useFetch<TData>(
  fetcher: () => Promise<TData>,
  options: UseFetchOptions<TData> = {}
): UseFetchHook<TData> {
  const data = ref<TData>()
  const status = ref<FetchStatus>('idle')

  watchEffect(async () => {
    try {
      data.value = undefined
      status.value = 'fetching'

      const response = await fetcher()
      data.value = response

      status.value = 'success'
      options.onSuccess?.(response)
    } catch (error) {
      options.onError?.(error)
      status.value = 'error'
    } finally {
      options.onSettled?.()
    }
  })

  return {
    data: readonly(data),
    status: readonly(status),
  }
}

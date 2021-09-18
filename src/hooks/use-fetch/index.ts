import { ref, readonly, watchEffect, computed } from 'vue'
import type { FetchStatus, UseFetchHook, UseFetchOptions } from './types'

export function useFetch<TData>(
  fetcher: () => Promise<TData>,
  options: UseFetchOptions<TData> = {}
): UseFetchHook<TData> {
  const data = ref<TData>()
  const status = ref<FetchStatus>('idle')
  const isIdle = computed(() => status.value === 'idle')
  const isError = computed(() => status.value === 'error')
  const isFetching = computed(() => status.value === 'fetching')
  const isSuccess = computed(() => status.value === 'success')

  watchEffect(handleFetch)

  async function handleFetch() {
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
  }

  return {
    data: readonly(data),
    status: readonly(status),
    isIdle,
    isError,
    isFetching,
    isSuccess,
  }
}

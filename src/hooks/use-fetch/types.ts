import type { DeepReadonly, Ref, ComputedRef } from 'vue'

export type FetchStatus = 'idle' | 'fetching' | 'error' | 'success'

export interface UseFetchHook<T> {
  data: DeepReadonly<Ref<undefined | T>>
  status: DeepReadonly<Ref<FetchStatus>>
  isIdle: ComputedRef<boolean>
  isError: ComputedRef<boolean>
  isFetching: ComputedRef<boolean>
}

export type UseFetchOptions<D> = {
  onSuccess?: (data: D) => void
  onSettled?: () => void
  onError?: (error: unknown) => void
}

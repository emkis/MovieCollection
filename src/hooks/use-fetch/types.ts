import type { DeepReadonly, Ref } from 'vue'

export type FetchStatus = 'idle' | 'fetching' | 'error' | 'success'

export interface UseFetchHook<T> {
  data: DeepReadonly<Ref<undefined | T>>
  status: DeepReadonly<Ref<FetchStatus>>
}

export type UseFetchOptions<D> = {
  onSuccess?: (data: D) => void
  onSettled?: () => void
  onError?: (error: unknown) => void
}

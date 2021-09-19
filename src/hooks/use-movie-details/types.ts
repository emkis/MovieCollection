import type { DeepReadonly, Ref, ComputedRef } from 'vue'
import type { AxiosResponse } from 'axios'
import type { MovieDetail } from '@/modules/movie'

export type DetailsResponse = AxiosResponse<MovieDetail>

export interface UseMovieDetailsHook {
  movieDetails: DeepReadonly<Ref<MovieDetail | null>>
  isError: ComputedRef<boolean>
  isSuccess: ComputedRef<boolean>
  isFetching: ComputedRef<boolean>
}

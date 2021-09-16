import type { Component } from 'vue'

export const MovieDetailLazy = (): Promise<Component> => {
  return import('@/pages/MovieDetail/MovieDetail.vue')
}

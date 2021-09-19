import type { Component } from 'vue'

export const MovieLazy = (): Promise<Component> => {
  return import('@/pages/Movie/Movie.vue')
}

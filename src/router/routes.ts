import type { RouteRecordRaw } from 'vue-router'

import { MovieCollection } from '@/pages/MovieCollection'
import { MovieLazy } from '@/router/lazy-routes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MovieCollection',
    component: MovieCollection,
  },
  {
    path: '/movie/:slug',
    name: 'Movie',
    component: MovieLazy,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    redirect: '/',
  },
]

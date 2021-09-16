import type { RouteRecordRaw } from 'vue-router'

import { MovieCollection } from '@/pages/MovieCollection'
import { MovieDetailLazy } from '@/router/lazy-routes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MovieCollection',
    component: MovieCollection,
  },
  {
    path: '/movie/:slug',
    name: 'MovieDetail',
    component: MovieDetailLazy,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    redirect: '/',
  },
]

import type { RouteRecordRaw } from 'vue-router'

import { Movies } from '@/pages/Movies'
import { MovieLazy } from '@/router/lazy-routes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Movies',
    component: Movies,
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

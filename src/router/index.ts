import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { environment } from '@/configs/environment'
import { setRouteTitle } from '@/router/route-title'

import { MovieCollection } from '@/pages/MovieCollection'
import { MovieDetailLazy } from '@/router/lazy-routes'

const routes: Array<RouteRecordRaw> = [
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

export const router = createRouter({
  history: createWebHistory(environment.baseUrl),
  routes,
})

router.beforeEach(setRouteTitle)

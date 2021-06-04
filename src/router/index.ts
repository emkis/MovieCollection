import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { environment } from '@/configs/environment'
import { handlePageTitle } from './helpers'

import { MovieCollection } from '@/pages/MovieCollection'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MovieCollection',
    component: MovieCollection,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory(environment.appUrl),
  routes,
})

router.beforeEach(handlePageTitle)

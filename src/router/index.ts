import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { environment } from '@/configs/environment'
import { handlePageTitle } from './helpers'

import { Movies } from '../pages/Movies'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Movies',
    component: Movies,
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

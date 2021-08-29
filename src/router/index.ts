import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { Component } from 'vue'

import { environment } from '@/configs/environment'
import { handlePageTitle } from './helpers'

import { MovieCollection } from '@/pages/MovieCollection'

export const MovieDetailLazy = (): Promise<Component> => {
  return import(/* webpackChunkName: "MovieDetail" */ '@/pages/MovieDetail/MovieDetail.vue')
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MovieCollection',
    component: MovieCollection,
  },
  {
    path: '/movie/:id',
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

router.beforeEach(handlePageTitle)

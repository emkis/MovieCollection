import { createRouter, createWebHistory } from 'vue-router'
import { environment } from '@/configs/environment'
import { setRouteTitle } from '@/router/route-title'
import { routes } from '@/router/routes'

export const router = createRouter({
  history: createWebHistory(environment.baseUrl),
  routes,
})

router.beforeEach(setRouteTitle)

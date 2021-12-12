import { createRouter, createWebHistory } from 'vue-router'
import { environment } from '@/configs/environment'
import { setRouteTitle } from '@/router/route-title'
import { routes } from '@/router/routes'
import { scrollBehavior } from '@/router/router-scroll-behavior'

export const router = createRouter({
  history: createWebHistory(environment.baseUrl),
  routes,
  scrollBehavior,
})

router.beforeEach(setRouteTitle)

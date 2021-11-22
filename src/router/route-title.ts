import { RouteLocationNormalized } from 'vue-router'
import { usePageTitle } from '@/hooks/use-page-title'

export function setRouteTitle(route: RouteLocationNormalized) {
  const pageTitle = usePageTitle()
  const routeTitleExists = Boolean(route.meta?.title)

  if (routeTitleExists) pageTitle.set(String(route.meta.title))
  else pageTitle.reset()
}

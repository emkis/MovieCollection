import { RouteLocationNormalized } from 'vue-router'
import { usePageTitle } from '@/hooks/use-page-title'

export function setRouteTitle(route: RouteLocationNormalized) {
  const { setTitle, resetTitle } = usePageTitle()
  const routeTitleExists = Boolean(route.meta?.title)

  if (routeTitleExists) setTitle(String(route.meta.title))
  else resetTitle()
}

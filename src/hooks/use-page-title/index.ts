import { ref, watchEffect, readonly } from 'vue'
import { environment } from '@/configs/environment'

type SetTitleOptions = {
  appendAppName?: boolean
}

export function usePageTitle() {
  const { appTitle } = environment
  const currentTitle = document.title
  const title = ref(currentTitle)

  watchEffect(() => setAppTitle(title.value))

  function setAppTitle(title: string) {
    document.title = title
  }

  function resetTitle() {
    setTitle(appTitle, { appendAppName: false })
  }

  function setTitle(pageName: string, { appendAppName = true }: SetTitleOptions = {}) {
    if (appendAppName) {
      title.value = `${pageName} on ${appTitle}`
    } else {
      title.value = pageName
    }
  }

  return { title: readonly(title), setTitle, resetTitle }
}

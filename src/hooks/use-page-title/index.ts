import { ref, watchEffect, readonly } from 'vue'
import { environment } from '@/configs/environment'

type SetOptions = { appendAppName?: boolean }
const defaultSetOptions: SetOptions = { appendAppName: true }

export function usePageTitle() {
  const { appTitle } = environment
  const currentTitle = document.title
  const title = ref(currentTitle)

  watchEffect(() => setAppTitle(title.value))

  function setAppTitle(title: string) {
    document.title = title
  }

  function reset() {
    set(appTitle, { appendAppName: false })
  }

  function set(pageName: string, options: SetOptions = defaultSetOptions) {
    if (options.appendAppName) {
      title.value = `${pageName} on ${appTitle}`
    } else {
      title.value = pageName
    }
  }

  return {
    set,
    reset,
    currentTitle: readonly(title),
  }
}

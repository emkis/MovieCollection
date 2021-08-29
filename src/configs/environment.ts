export const environment = Object.freeze({
  appTitle: import.meta.env.VUE_APP_TITLE || '[dev] Movie Collection',
  appUrl: import.meta.env.VUE_APP_BASE_URL || '/',
  apiUrl: import.meta.env.VUE_APP_API_URL || 'http://localhost:3333',
})

export const environment = Object.freeze({
  appTitle: process.env.VUE_APP_TITLE || '[dev] Movie Collection',
  appUrl: process.env.VUE_APP_BASE_URL || '/',
  apiUrl: process.env.VUE_APP_API_URL || 'http://localhost:3333',
})

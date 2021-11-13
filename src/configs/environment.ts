export const environment = Object.freeze({
  /**
   * The base URL the app is being served from, default value is "/".
   * If the value were "/app" the URL would be: https://loremipsum.com/app/
   */
  baseUrl: import.meta.env.BASE_URL,

  /** Default title of this app, will be set on document.title */
  appTitle: import.meta.env.VITE_APP_TITLE,

  /** The base URL of the API */
  apiUrl: import.meta.env.VITE_APP_API_URL,

  /** Whether the app is running in development */
  isDevelopment: import.meta.env.DEV,

  /** Whether the app is running in production */
  isProduction: import.meta.env.PROD,
})

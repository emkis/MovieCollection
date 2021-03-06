import { createApp } from 'vue'
import { router } from '@/router'
import '@msw/server/development'

import App from '@/App.vue'
import '@/styles/global/index.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')

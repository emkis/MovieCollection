import { createApp } from 'vue'
import { router } from '@/router'
import '@/services/service-worker'

import App from '@/App.vue'
import '@/styles/global/index.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')

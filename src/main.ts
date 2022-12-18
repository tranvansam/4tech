import { createApp } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '~/assets/styles/main.scss'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import pinia from './store'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')

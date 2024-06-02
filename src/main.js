import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { lazyPlugin } from "@/directives/index.js";
import {componentPlugin} from "@/components/index.js";


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import vuetify from "./plugins/vuetify";

const app = createApp(App).use(vuetify).use(router)

app.use(createPinia())

app.mount('#app')

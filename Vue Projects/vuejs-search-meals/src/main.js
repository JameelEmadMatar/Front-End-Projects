import { createApp } from 'vue'
import router from './Compontents/Router'
import store from './Store'
import './style.css'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')

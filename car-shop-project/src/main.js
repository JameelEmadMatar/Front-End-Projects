import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Css/Style.css"
import '@coreui/coreui/dist/css/coreui.min.css'
import Paginate from "vuejs-paginate-next"
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnglesRight, faClock, faGear , faPhone , faFax , faEnvelope ,faLocationDot, faBars} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube  , faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from "./router/router"
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
library.add(faBars ,faGear , faFacebook , faInstagram , faLinkedin , faYoutube , faClock , faAnglesRight , faPhone , faFax , faEnvelope , faLocationDot)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(pinia).use(Paginate).mount('#app')

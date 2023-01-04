import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnglesRight, faClock, faGear , faPhone , faFax , faEnvelope ,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube  , faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from "./router/router"

library.add(faGear , faFacebook , faInstagram , faLinkedin , faYoutube , faClock , faAnglesRight , faPhone , faFax , faEnvelope , faLocationDot)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

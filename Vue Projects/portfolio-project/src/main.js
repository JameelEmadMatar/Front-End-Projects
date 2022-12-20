import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faFacebook , faTwitter , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './Components/Router'

library.add(faHatWizard , faMagnifyingGlass , faInstagram , faFacebook , faTwitter , faLinkedin)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
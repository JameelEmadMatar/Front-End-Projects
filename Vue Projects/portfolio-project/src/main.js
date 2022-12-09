import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard , faMagnifyingGlass)


createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

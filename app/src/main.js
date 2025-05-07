import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faShoppingCart,
  faRocket,
  faChartBar,
  faGift,
  faUser,
  faCog,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faRocket, faChartBar, faGift, faUser, faCog, faMapMarkerAlt)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

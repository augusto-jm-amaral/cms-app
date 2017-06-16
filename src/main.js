import Vue from 'vue'

import App from './App'
import router from './router'
import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

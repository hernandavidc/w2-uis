import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
import App from './App.vue'
import router from './router'

require('./plugins')

import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

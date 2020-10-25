import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import calendar from 'v-calendar'

Vue.config.productionTip = false

Vue.use(calendar, {
  componentPrefix: 'eh'
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

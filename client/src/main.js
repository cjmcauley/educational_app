import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
//import './plugins/vue-material-design-icons/styles.css';
import { mdiAccount } from '@mdi/js'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import BaseDialog from './lib'

Vue.config.productionTip = false

Vue.use(BaseDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')

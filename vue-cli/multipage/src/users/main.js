import Vue from 'vue'
import UsersTest from './UsersTest.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(UsersTest),
}).$mount('#app')

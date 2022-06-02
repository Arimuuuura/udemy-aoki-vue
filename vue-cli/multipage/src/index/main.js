import Vue from 'vue'
import IndexTest from './IndexTest.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(IndexTest),
}).$mount('#app')

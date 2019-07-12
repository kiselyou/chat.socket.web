import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import './src/scss/custom.scss'
Vue.use(BootstrapVue)

import store from './src/store'
import './src/containers/Chat'

new Vue({
  store,
  el: '#app-container',
  template: `<Chat/>`
})
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

new Vue({
  el: '#app',
  render: h => h(App)
})


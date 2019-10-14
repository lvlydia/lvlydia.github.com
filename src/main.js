// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './vuex/store'
import './common/stylus/icon.styl'


Vue.use(vueResource)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.http.options.emulateJSON=true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

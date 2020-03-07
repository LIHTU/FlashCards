import Vue from 'vue'
import App from './App.vue'
import Vuex, { mapGetters } from 'vuex'
import store  from './store.js'
// const fb = require('../firebaseConfig.js')

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// theme css
import './css/startbootstrap-freelancer/css/freelancer.min.css'

// custom css
import './css/styles.css';

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(Vuex);


new Vue({
  el: '#app',
  store,
  // mapGetters([
  //   // 'gettersDoneTodos' // doesn't work.  Need to pass $store.getters.obj into component's data instead.
  // ])
  // try to access done todo from here in the following syntax:
  // {doneTodos: $store.state.getters.doneTodos}  // also doesn't work to call 'doneTodos' in data of child component after setting this here.
  render: h => h(App),
});

// // handle page reloads
// let app
// fb.auth.onAuthStateChanged(user => {
//   if (!app) {
//     app = new Vue({
//       el: '#app',
//       store,
//       computed: {},
//       // mapGetters([
//       //   // 'gettersDoneTodos' // doesn't work.  Need to pass $store.getters.obj into component's data instead.
//       // ])
//       // try to access done todo from here in the following syntax:
//       // {doneTodos: $store.state.getters.doneTodos}  // also doesn't work to call 'doneTodos' in data of child component after setting this here.
//       render: h => h(App),
//     });
//   }
// })
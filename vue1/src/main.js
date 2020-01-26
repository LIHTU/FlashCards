import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

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

Vue.use(BootstrapVue, Vuex);

// new Vue({
//   render: h => h(App, store),
// }).$mount('#app')

new Vue({
  // el: '#app',
  // store,
  render: h => h(App),
}).$mount('#app')

// const store = new Vuex.Store({
//   debug: true, // what does this do?
//   state: {
//     count: 0, 
//     // just try 3 cards for now.
//     // what?
//     cat: "pippen",
//     dog: "hank",
//     cards: [
//       {
//         prompt: "What 8 data types are defined in the ECMAScript Standard?",
//         answer:
//           "Null, Undefined, Boolean, Number, BigInt, Symbol, String, Object \npneumonics: (NUBN BS SO, NUBN SO BS)",
//         tags: "javascript",
//         revealed: false
//       },
//       {
//         prompt:
//           "What vue directive would you use to bind an html attribute to the vue data model?",
//         answer: "v-bind:src='./imanges/foo.jpg'",
//         tags: "javascript, vue, robin",
//         revealed: false
//       },
//       {
//         prompt: "How do you import a js file into another as a module?",
//         answer:
//           "In module file items to export should be inside of an iief that is assigned to a var. The iief returns all needed items.\n" +
//           "<pre>var itemsToExport = (function () {\n\tvar foo = 1;\n\tvar bar = 'a';\n\treturn {foo: foo, bar: bar};\n})();\n" +
//           "module.exports = itemsToExport;</pre>\n" +
//           "in file that utilizes module: <pre>var usefulObjectImport = require('./path/fileWithItemsToExport')\n" +
//           "var usefulThing = usefulObjectImport.foo;</pre>",
//         tags: "javascript, front-end architecture, robin",
//         revealed: false
//       }
//     ]
//   },
//   mutations: {
//     increment: state => state.count++,
//     decrement: state => state.count--
//   }
// })



// export default store;
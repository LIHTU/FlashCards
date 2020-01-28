import Vue from 'vue'
import App from './App.vue'
import Vuex, { mapGetters } from 'vuex'

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


const store = new Vuex.Store({
  state: {
    count: 10,
    cat: 'Pippin',
    message: "Keep Trying",
    todos: [
      { text: 'eat', done: true},
      { text: 'sweep', done: false},
      { text: 'comb hair', done: true},
      { text: 'mop', done: false}
    ],
    cards: [
      {
        prompt: "What 8 data types are defined in the ECMAScript Standard?",
        answer:
          "Null, Undefined, Boolean, Number, BigInt, Symbol, String, Object \npneumonics: (NUBN BS SO, NUBN SO BS)",
        tags: "javascript",
        revealed: false
      },
      {
        prompt:
          "What vue directive would you use to bind an html attribute to the vue data model?",
        answer: "v-bind:src='./imanges/foo.jpg'",
        tags: "javascript, vue, robin",
        revealed: false
      },
      {
        prompt: "How do you import a js file into another as a module?",
        answer:
          "In module file items to export should be inside of an iief that is assigned to a var. The iief returns all needed items.\n" +
          "<pre>var itemsToExport = (function () {\n\tvar foo = 1;\n\tvar bar = 'a';\n\treturn {foo: foo, bar: bar};\n})();\n" +
          "module.exports = itemsToExport;</pre>\n" +
          "in file that utilizes module: <pre>var usefulObjectImport = require('./path/fileWithItemsToExport')\n" +
          "var usefulThing = usefulObjectImport.foo;</pre>",
        tags: "javascript, front-end architecture, robin",
        revealed: false
      }
    ]
  },
  mutations: {

  }, 
  actions: {

  },
  // getters will re-evaluate if the state they depend on changes.  This makes them reactive.
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    }
    // doneTodoCount: (state, getters) => {
    //   return getters.doneTodos.lenght
    // },
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // },
    // getCardByTag: (state) => (tag) => {
    //   return state.cards.find(todo => todo.tags.includes(tag))
    // }
  }
});

import {mapState} from 'vuex';

new Vue({
  el: '#app',
  store,
  computed: {},
  // mapGetters([
  //   // 'gettersDoneTodos' // doesn't work.  Need to pass $store.getters.obj into component's data instead.
  // ])
  // try to access done todo from here in the following syntax:
  // {doneTodos: $store.state.getters.doneTodos}  // also doesn't work to call 'doneTodos' in data of child component after setting this here.
  render: h => h(App), 
});
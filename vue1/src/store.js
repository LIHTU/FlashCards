import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
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
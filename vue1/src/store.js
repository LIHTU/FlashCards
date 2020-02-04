import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBbDjN2mTPhwsjYBsjM8ok6XngNnAIM1QM",
  authDomain: "flashcardslight.firebaseapp.com",
  databaseURL: "https://flashcardslight.firebaseio.com",
  projectId: "flashcardslight",
  storageBucket: "flashcardslight.appspot.com",
  messagingSenderId: "898212394500",
  appId: "1:898212394500:web:1a3d8d0e0877dc64976751",
  measurementId: "G-K3DES6FEJP"
};
firebase.initializeApp(config);



Vue.use(Vuex);


// firebase utils
const db = firebase.firestore()
// const auth = firebase.auth()
// const currentUser = auth.currentUser

// firebase collections
// const usersCollection = db.collection('users')
var cardsCollection = [];
db.collection("cards").get().then(function(querySnapshot) {
  querySnapshot.forEach(doc => {
      var card = doc.data();
      card.revealed = false;
      cardsCollection.push(card);
  });
})
.catch(error => {
  console.log(`Error getting documents: \n\t ${error}`);
});

export const store = new Vuex.Store({
    state: {
      message: "Keep Trying",
      todos: [
        { text: 'eat', done: true},
        { text: 'sweep', done: false},
        { text: 'comb hair', done: true},
        { text: 'mop', done: false}
      ],
      firestoreCards: cardsCollection,
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
        },
        {
          prompt: "What is hoisting in javascript?",
          answer:
            "Hoisting allows the declaration of a variable after it's definition\n" +
            "<pre>x = 5;\nvar x;</pre>\n" +
            "variables defined with let and const cannot be hoisted.",
          tags: "javascript",
          revealed: false
        },
        {
          prompt: "What is the use of <b>let</b> in js?",
          answer:
            "It declares a block level variable that is not added to the global window object." +
            "<b>var</b> on the otherhand is function level and is available outside the block it was defined in within that blocks function." +
            "\nUseful if you need a tightly scoped variable or func.  Also good for declarations in for and while loops.",
          tags: "javascript",
          revealed: false
        },
        {
          prompt: "How would you define and use a css variable (native)",
          answer:
            "define\n<pre>:root {\n\t--seaGreen: #44c87f;\n}</pre>\n\n" +
            "use:\n<pre>" +
            "div {\n\tcolor: var(--seaGreen);\n}" +
            "</pre>",
          tags: "css",
          revealed: false
        },
        {
          prompt: "What is a Google Cloud Platform Managed Zone?",
          answer:
            "A managed zone is the container for all of your DNS records that share the same domain name, for example, example.com",
          tags: "web hosting",
          revealed: false
        },
        {
          prompt: "How would you make an a tag open in a new tab or window?",
          answer:
            "<pre>target='_blank'</pre>\nLink will open in a new tab or window depending on browser settings.",
          tags: "html",
          revealed: false
        },
        {
          prompt: "How would you title a web page?",
          answer: "Use the title tag",
          tags: "html",
          revealed: false
        },
        {
          prompt: "What is a static asset? (webapp)",
          answer:
            "Files like JS, css, and images that don't need to be rendered (as views often do) by the server.  Static files should be cached by the browser.",
          tags: "web architecture",
          revealed: false
        },
        {
          prompt: "How are static files cached in the browser invalidated?",
          answer: "",
          tags: "",
          revealed: false
        },
        {
          prompt: "What is the etag in an http response header?",
          answer:
            "It contains a hash for the requested file which determines whether the cache should be invalidated or not.",
          tags: "http",
          revealed: false
        },
        {
          prompt: "What 4 http response headers are used for cache control?",
          answer: "expires, last-modified, cache-control, ETag",
          tags: "http",
          revealed: false
        },
        {
          prompt:
            "What is the http response header cache-control: 'no-cache' used for?",
          answer:
            "Misleading.  It instructs the browser to cache the file! But it also instructs the browser to verify the etag with the server.  This cache-control method is used frequently.\n" +
            "'no-store' on the other hand tells the browser not to cache the file.",
          tags: "http",
          revealed: false
        },
        {
          prompt:
            "In a nutshell, what are user authentication and authorization? How are they different?",
          answer:
            "Authentication deals with the matter of <b>who</b> the user is. Authorization handles matters of <b>What<b>",
          tags: "web security",
          revealed: false
        },
        {
          prompt: "What is cross site scripting attack?",
          answer:
            "it's when a user enters html to an input and that html can be run in others users browser, which allows script tags and their contents to be injected.",
          tags: "web security",
          revealed: false
        },
        {
          prompt:
            "How would you prevent a view model object from continuing to be updated, say, by a change in one of it's dependencies?",
          answer: "object.freeze()",
          tags: "vue",
          revealed: false
        },
        {
          prompt: "What are some steps of a vue instance initialization?",
          answer:
            "1. set up data observation\n2.compile the template \n3. mount the instance to the DOM \n4.update the DOM when data changes",
          tags: "vue",
          revealed: false
        },
        {
          prompt:
            "What's the diff between <i>await Html.PartialAsync(_view) and <i>@RenderPartial</i>?",
          answer: "...",
          tags: "asp.net",
          revealed: false
        },
        {
          prompt: "Describe the function of align-items in flexbox",
          answer:
            "It's a class applied to a container that aligns clidren vertically along the 'cross axis'.",
          tags: "flexbox",
          revealed: false
        },
        {
          prompt: "What are the advantages of a single page application?",
          answer: "",
          tags: "",
          revealed: false
        },
        {
          prompt:
            "How would you use native css to dynamically determine the width of an element based on a combo of % and px values?",
          answer: "calc(100% - 10px)",
          tags: "css",
          revealed: false
        },
        {
          prompt: "What is a fragment identifier?",
          answer:
            "A fragment identifier is a string of characters that refers to a resource that is subordinate to another, primary resource, which" +
            "points to a URI.  The fragment identifier is often preceded by a '#' or '?'",
          tags: "",
          revealed: false
        },
        {
          prompt: "Why should you specify button type in a form?",
          answer:
            "If you don't the browser will treat it like a submit button, triggering a request that will probably refresh the page.",
          tags: "html, html forms",
          revealed: false
        },
        {
          prompt: "What do the squre brackets mean in mdn sytax notation?",
          answer:
            "The square brackets mean that the enclosed parameter is optional.",
          tags: "computer science, js",
          revealed: false
        },
        {
          prompt: "What are the parameters of splice (js)?",
          answer:
            "<pre>var arrDeletedItems = \narray.splice(start[, deleteCount[, item1[, item2[, ...]]]])</pre>" +
            "\n<a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'>mdn</a>",
          tags: "computer science, js",
          revealed: false
        },
        {
          prompt:
            "What is the shorthand for\n <pre>v-bind:disabled='<expression>'</pre>?",
          answer: "<pre>:disabled='<expression>'</pre>",
          tags: "vue",
          revealed: false
        },
        {
          prompt: "How would you use cat in linux cli?",
          answer:
            "'cat filename' to display contents of file.\n" +
            "'cat >newfilename' to crate a new file. cursor stays active to enter file contents. ctrl+c to exit.",
          tags: "linux cli",
          revealed: false
        },
        {
          prompt: "How are macOs and Linux related?",
          answer:
            "Linux and macOS both follow the POSIX standard. POSIX stands for Portable Operating System Interface for Unix-like Operating Systems." +
            "This compatibility makes it possible to compile applications developed on Linux on macOS systems",
          tags: "linux, macOs, operating systems",
          revealed: false
        },
        {
          prompt:
            "How do you indicated that a file or folder should be hidden in linux?",
          answer: "prefix the name with a '.'",
          tags: "linux",
          revealed: false
        },
        {
          prompt: "How do you recursively show contents of all subdirectories?",
          answer: "<pre>ls -R</pre>",
          tags: "linux cli",
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
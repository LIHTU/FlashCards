new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      cards: [
        {
          prompt: "What 8 data types are defined in the ECMAScript Standard?",
          answer: "Null, Undefined, Boolean, Number, BigInt, Symbol, String, Object (NUBN BS SO, NUBN SO BS)",
          tags: "computer science, javascript, robin",
          revealed: false
        }
        ,{
          prompt: "What vue directive would you use to bind an html attribute to the vue data model?",
          answer: "v-bind:src='./imanges/foo.jpg'",
          tags: "javascript, front-end frameworks, robin",
          revealed: false
        }
        ,{
          prompt: "How do you import a js file into another as a module?",
          answer: "In module file items to export should be inside of an iief that is assigned to a var. The iief returns all needed items.\n"
          + "<pre>var itemsToExport = (function () {\n\tvar foo = 1;\n\tvar bar = 'a';\n\treturn {foo: foo, bar: bar};\n})();\n"
          + "module.exports = itemsToExport;</pre>\n"
          + "in file that utilizes module: <pre>var usefulObjectImport = require('./path/fileWithItemsToExport')\n"
          + "var usefulThing = usefulObjectImport.foo;</pre>",
          tags: "javascript, front-end architecture, robin",
          revealed: false
        }
        // ,{
        //   prompt: "",
        //   answer: "",
        //   tags: ""
        // }
      ]
    }
  })
"use strict";

var app = new Vue({
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
        ,{
          prompt: "What is hoisting in javascript?",
          answer: "Hoisting allows the declaration of a variable after it's definition\n"
          + "<pre>x = 5;\nvar x;</pre>\n"
          + "variables defined with let and const cannot be hoisted."
          ,
          tags: "javascript",
          revealed: false
        }
        ,{
          prompt: "What is the use of <b>let</b> in js?",
          answer: "It declares a block level variable that is not added to the global window object." 
          +"<b>var</b> on the otherhand is function level and is available outside the block it was defined in within that blocks function."
          +"\nUseful if you need a tightly scoped variable or func.  Also good for declarations in for and while loops.",
          tags: "javascript",
          revealed: false
        }
        ,{
          prompt: "How would you define and use a css variable (native)",
          answer: "define\n<pre>:root {\n\t--seaGreen: #44c87f;\n}</pre>\n\n"
          + "use:\n<pre>"
          + "div {\n\tcolor: var(--seaGreen);\n}"
          + "</pre>",
          tags: "css",
          revealed: false
        }
        ,{
          prompt: "What is a Google Cloud Platform Managed Zone?",
          answer: "A managed zone is the container for all of your DNS records that share the same domain name, for example, example.com",
          tags: "web hosting",
          revealed: false
        }
        ,{
          prompt: "How would you make an a tag open in a new tab or window?",
          answer: "<pre>target='_blank'</pre>\nLink will open in a new tab or window depending on browser settings.",
          tags: "html",
          revealed: false
        }
        ,{
          prompt: "How would you title a web page?",
          answer: "Use the title tag",
          tags: "",
          revealed: false
        }
        ,{
          prompt: "What is domain privacy",
          answer: "I means your hosting provider uses their own contact info in your whois entry that is required by ICANN",
          tags: "hosting",
          revealed: false
        }
        // ,{
        //   prompt: "",
        //   answer: "",
        //   tags: "",
        //   revealed: false
        // }
        // ,{
        //   prompt: "",
        //   answer: "",
        //   tags: "",
        //   revealed: false
        // }
        // ,{
        //   prompt: "",
        //   answer: "",
        //   tags: "",
        //   revealed: false
        // }
      ],
      showNewCardForm: false,
      showCarrot: false,
      toggleCarrot: function(){
        console.log('this.showCarrot', this.showCarrot);
        this.showCarrot = !this.showCarrot;
      },
      f: function (){
        var x = 1;
        {
          let x = 2;
          console.log("letted x", x);
          var y = 3;
        }
        console.log('y', y)
        return x;
      }
    }
  })



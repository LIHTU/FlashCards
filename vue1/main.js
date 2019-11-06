"use strict";

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      view: 'single',
      // todo1: request card data from a js service that returns the object below.
      // todo2: request card data from a server.
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
          tags: "html",
          revealed: false
        }
        ,{
          prompt: "What is a static asset? (webapp)",
          answer: "Files like JS, css, and images that don't need to be rendered (as views often do) by the server.  Static files should be cached by the browser.",
          tags: "web architecture",
          revealed: false
        }
        ,{
          prompt: "How are static files cached in the browser invalidated?",
          answer: "",
          tags: "",
          revealed: false
        }
        ,{
          prompt: "What is the etag in an http response header?",
          answer: "It contains a hash for the requested file which determines whether the cache should be invalidated or not.",
          tags: "http",
          revealed: false
        }
        ,{
          prompt: "What 4 http response headers are used for cache control?",
          answer: "expires, last-modified, cache-control, ETag",
          tags: "http",
          revealed: false
        }
        ,{
          prompt: "What is the http response header cache-control: 'no-cache' used for?",
          answer: "Misleading.  It instructs the browser to cache the file! But it also instructs the browser to verify the etag with the server.  This cache-control method is used frequently.\n" +
          "'no-store' on the other hand tells the browser not to cache the file.",
          tags: "http",
          revealed: false
        }
        ,{
          prompt: "In a nutshell, what are user authentication and authorization? How are they different?",
          answer: "Authentication deals with the matter of <b>who</b> the user is. Authorization handles matters of <b>What<b>",
          tags: "web security",
          revealed: false
        }
        ,{
          prompt: "What is cross site scripting attack?",
          answer: "it's this <script>alert('Youre being attacked!');console.log('attack!');</script>"
          +"<script>console.log('hi');</script>",
          tags: "web security",
          revealed: false
        }
        ,{
          prompt: "How would you prevent a view model object from continuing to be updated, say, by a change in one of it's dependencies?",
          answer: "object.freeze()",
          tags: "vue",
          revealed: false
        }
        ,{
          prompt: "What are some steps of a vue instance initialization?",
          answer: "1. set up data observation\n2.compile the template \n3. mount the instance to the DOM \n4.update the DOM when data changes",
          tags: "vue",
          revealed: false
        }
        ,{
          prompt: "What's the diff between <i>await Html.PartialAsync(_view) and <i>@RenderPartial</i>?",
          answer: "...",
          tags: "asp.net",
          revealed: false
        }
        ,{
          prompt: "Describe the function of align-items in flexbox",
          answer: "It's a class applied to a container that aligns clidren vertically along the 'cross axis'.",
          tags: "flexbox",
          revealed: false
        }
        ,{
            prompt: "What are the advantages of a single page application?",
            answer: "",
            tags: "",
            revealed: false
        }
        ,{
            prompt: "How would you use native css to dynamically determine the width of an element based on a combo of % and px values?",
            answer: "calc(100% - 10px)",
            tags: "css",
            revealed: false
        }
        // ,{
          //   prompt: "",
          //   answer: "",
          //   tags: "",
          //   revealed: false
        // }
      
      ],
      currentCardIndex: 0,
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
      },
      setView: function(newView){
        return 'newView';
      }
    },
    computed: {
      currentCard: function(){
        return this.cards[this.currentCardIndex];
      }
    },
    methods: {
      setView: function(newView) {
        console.log('newView', newView);
        this.view = newView;
        return newView;
      },
      nextCard: function() {
        // handle going to begining of array from end.
        if(this.currentCardIndex == this.cards.length-1){
          this.currentCardIndex = 0;
        } else {
          this.currentCardIndex++;
        }
        this.currentCard = this.cards[this.currentCardIndex];
      },
      prevCard: function() {
        // handle going to begining of array from end.
        if(this.currentCardIndex == 0){
          this.currentCardIndex = this.cards.length-1;
        } else {
          this.currentCardIndex--;
        }
        this.currentCard = this.cards[this.currentCardIndex];
      }
    }
  })
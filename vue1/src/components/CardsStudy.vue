<template>
  <div>
    <main>

      <div class="first-container">

        <!-- vuex demos -->
      
        <!-- <div>{{message}} (if you see "keep trying" it means you're able to access store.state with out setting it in computed on app instantiation.  Why?  maybe adding it to app instantiation makes it reactive?)</div>
        
        <h3>Getters Done Todos: </h3> 
        <div v-for="todo in doneTodos" v-bind:key="todo.text">
          {{todo.text}}
        </div> -->
        <!-- end vuex demos -->

        <div class="button-container display-toggler">
          <button v-on:click="shuffle()" type="button" class="btn btn-secondary">
            <i class="fa fa-random"></i>
          </button>
          <button
            v-on:click="showNewCardForm=true"
            v-bind:disabled="showNewCardForm"
            type="button"
            class="btn btn-secondary"
          >
            <font-awesome-icon icon="plus-circle" />
          </button>
          <button
            v-show="view=='single'"
            v-on:click="setView('grid')"
            type="button"
            class="btn btn-secondary"
          >
            <i class="fa fa-th-large"></i>
          </button>
          <button
            v-cloak
            v-show="view=='grid'"
            v-on:click="setView('single')"
            type="button"
            class="btn btn-secondary"
          >
            <i class="fa fa-square"></i>
          </button>
        </div>

        <!-- New Card UI -->
        <div v-cloak v-show="showNewCardForm" class="card f-card mt-0">
          <div class="card-header">New Card</div>
          <div class="card-body card-content">
            <form>
              <div class="form-group">
                <div class="label">Prompt:</div>
                <textarea v-model="newCard.prompt" class="form-control" rows="2" cols="60"></textarea>
              </div>
              <div class="form-group">
                <div class="label">Answer:</div>
                <textarea v-model="newCard.answer" class="form-control"></textarea>
              </div>
              <div class="form-group">
                <div class="label">Tags (Comma Separated):</div>
                <!-- TODO: change to type ahead -->
                <input v-model="newCard.tagsString" type="text" class="form-control" />
              </div>
              <!-- <div class="form-group">
              <div class="label">This tag is a subcategory:</div>
              <input v-model="newHasParent" type="checkbox" class="form-control">
            </div>
            <div v-if="newHasParent" class="form-group">
              <div class="label">Parent Tag:</div>
              <input v-model="newParentTags" type="text" class="form-control">
              </div>-->
            </form>
          </div>
          <div class="card-footer">
            <!-- TODO: SHOW DISABLED WHEN FORM SHOWN  -->
            <button
              v-on:click="createCard();"
              type="button"
              class="btn btn-primary float-right"
            >Create</button>
            <button v-on:click="showNewCardForm = false" type="button" class="btn btn-warning">Close</button>
          </div>
        </div>

        <!-- Grid View -->
        <div id="gridContainer" v-cloak v-if="view=='grid' && showNewCardForm==false" class="row">
          <div v-for="fCard in cards" v-bind:key="fCard.prompt" class="col-sm-12 col-md-6 col-xl-4">
            <div
              v-on:click="flipCard(fCard)"
              v-bind:class="{'red-prompt': !fCard.revealed, 'apple-answer':fCard.revealed}"
              class="card f-card"
            >
              <div class="card-body card-content">
                <p v-if="!fCard.revealed" v-html="fCard.prompt" class="prompt"></p>
                <p v-else class="answer" v-html="fCard.answer"></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Single Card View -->
        <div v-if="view=='single' && !showNewCardForm">
          <!-- todo: put card in directive or some re-usable html as view does it. -->
          <div
            v-on:click="flipCard(currentCard)"
            v-bind:class="{'red-prompt': !currentCard.revealed, 'apple-answer':currentCard.revealed}"
            class="card f-card"
          >
            <div class="card-body card-content">
              <p v-if="!currentCard.revealed" v-html="currentCard.prompt" class="prompt"></p>
              <p v-else class="answer" v-html="currentCard.answer"></p>
            </div>
          </div>
          <div class="nextPrevRow">
            <button @click="prevCard()" class="btn btn-secondary">Prev</button>
            <button @click="nextCard()" class="btn btn-secondary float-right">Next</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: "CardsStudy",
  props: {
    msg: String
  },
  data: function() {
    return {
      view: "single",
      currentCardIndex: 0,
      showNewCardForm: false,
      // currentSet: this.$store.state.currentSet,
      newCard: {
        prompt: "",
        answer: "",
        tagsString: "",
        revealed: false
        // hasParent: "",
        // parentTags: ""
      },
      // todo1: request card data from a js service that returns the array below.
      // todo2: request card data from a server.
      tags: [
        {
          name: "front-end",
          parentTags: []
        },
        {
          name: "js",
          parentTags: ["front-end"]
        },
        {
          name: "vue",
          parentTags: ["js", "front-end"]
        }
      ]
      // ,cards: this.$store.state.cards,
    };
  },
  computed: {
    // cards() {
    //   return this.$store.state.cards;  // Error in render: "TypeError: Cannot read property 'state' of undefined"
    // },
    // cards() {
    //   return this.store.state.cards;  // Error in render: "TypeError: Cannot read property 'state' of undefined"
    // },
    // cards() {
    //   return store.state.cards // "ReferenceError: store is not defined"
    // },
    // cards() {
    //   return $store.state.cards // "ReferenceError: $store is not defined"
    // },
    // cards() {
    //   return state.cards // "ReferenceError: state is not defined"
    // },
    cards: function() {
      return this.$store.state.cards
    }, // Uncaught TypeError: Cannot read property 'store' of undefined
    // cards: this.$store.state.cards, // TypeError: Cannot read property '$store' of undefined
    // cards: $store.state.cards,
    currentCard: function() {
      return this.cards[this.currentCardIndex];
    },
    currentSet: function() { return this.cards }
  },
  methods: {
    flipCard: function(card) {
      card.revealed = !card.revealed;
    },
    createCard: function() {
      this.cards.push(this.newCard);
      this.newCard = {
        prompt: "",
        answer: "",
        tagsString: "",
        revealed: false
        //  hasParent: "",
        //  parentTags: ""
      };
      this.showNewCardForm = false; // doesn't work :(
    },
    setView: function(newView) {
      this.view = newView;
      return newView;
    },
    nextCard: function() {
      // handle going to begining of array from end.
      if (this.currentCardIndex == this.cards.length - 1) {
        this.currentCardIndex = 0;
      } else {
        this.currentCardIndex++;
      }
      this.currentCard = this.cards[this.currentCardIndex];
    },
    prevCard: function() {
      // handle going to begining of array from end.
      if (this.currentCardIndex == 0) {
        this.currentCardIndex = this.cards.length - 1;
      } else {
        this.currentCardIndex--;
      }
      this.currentCard = this.cards[this.currentCardIndex];
    },
    shuffle: function(set) {
      if (set && set.length == 0) {
        set = this.cards;
        // console.log('set:', cards);
      } else {
        set = this.currentSet;
        // console.log('set:', currentSet);
      }
      var shuffledSet = [];
      while (set.length > 0) {
        let randIndex = getRandomInt(set.length);
        let pluckedCard = set.splice(randIndex, 1)[0];
        shuffledSet.push(pluckedCard);
      }
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      this.cards = shuffledSet;
    },
    promiseToSleep: function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    sleep: async function(ms) {
      // console.log('Taking a break...');
      // await promiseToSleep(2000);
      await new Promise(resolve => setTimeout(resolve, ms));

      // console.log(`${ms}ms later, showing sleep in a loop...`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
pre {
  font-family: monospace;
  background-color: #444;
  color: var(--seaGreen);
  padding: 5px;
  border-radius: 3px;
  text-align: left;
}

.prompt {
  font-weight: bold;
}
.answer {
  width: 100%;
}
.button-container {
  display: flex;
  justify-content: space-between;
}
.button-container button {
  margin: 0 3px;
}
.f-card {
  /* width: 22rem; */
  margin: 10px auto;
  min-height: 250px;
  max-width: 586px;
  box-shadow: 2px 2px 3px #ccc;
  transition: all 0.5;
}
.nextPrevRow {
  margin: 10px auto;
  max-width: 586px;
}

.card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.red-prompt {
  /* background-color: darkslateblue;
    color: var(--appleWhite); */
  background-color: white;
  /* color: var(--appleWhite); */
}
.apple-answer {
  background-color: var(--appleWhite);
}
</style>

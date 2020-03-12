<template>
  <div>
    <GlobalEvents
      @keydown.left="prevCard()"
      @keydown.right="nextCard()"
      @keydown.up="flipCard(currentCard)"
      @keydown.down="flipCard(currentCard)"
    />

    <main>
      <div class="first-container">

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
                <div class="label">Set Tags (Comma Separated):</div>
                <!-- TODO: change to type ahead -->
                <input v-model="newCard.tags" type="text" class="form-control" />
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button
              v-on:click="addCard();"
              type="button"
              class="btn btn-primary float-right"
            >Create</button>
            <button v-on:click="showNewCardForm = false" type="button" class="btn btn-warning">Close</button>
          </div>
        </div>

        <!-- Grid View -->
        <div id="gridContainer" v-cloak v-if="view=='grid' && showNewCardForm==false" class="row">

          <div v-for="fCard in cards" v-bind:key="fCard.prompt" class="col-sm-12 col-md-6 col-xl-4">
            <div class="card f-card">
              <div v-if="!fCard.editMode" class="card-body card-content red-prompt" @click="flipCard(fCard)" :class="{'apple-answer':fCard.revealed}">
                <div>
                  <p v-if="!fCard.revealed" v-html="fCard.prompt" class="prompt"></p>
                  <p v-else class="answer" v-html="fCard.answer"></p>
                  <button v-on:click="fCard.editMode=true" class="btn card-edit-btn pull-left"><i class="fa fa-pencil-alt"></i></button>
                  <button v-on:click="fCard.deletePending=true" @click.stop="stopProp" class="btn card-delete-btn pull-left"><i class="fa fa-trash"></i></button>
                  <p class="basebar-txt" v-if="fCard.deletePending">Delete Card?          
                    <span @click="deleteCard(fCard)" v-on:click.stop="stopProp" class="action-danger action pl-3">Yes, Delete</span>
                    <span @click="fCard.deletePending=false" @click.stop="stopProp" class="action-default action pl-3">No, Keep</span>
                  </p>
                </div>
              </div>

              <!-- edit form -->
              <div v-else>
                <div class="card-header">Edit Card</div>
                <div class="card-body card-content">
                  <form >
                    <div class="form-group">
                      <div class="label">Prompt:</div>
                      <textarea v-model="fCard.prompt" class="form-control" rows="2" cols="60"></textarea>
                    </div>
                    <div class="form-group">
                      <div class="label">Answer:</div>
                      <textarea v-model="fCard.answer" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                      <div class="label">Set Tags (Comma Separated):</div>
                      <!-- TODO: change to type ahead -->
                      <input v-model="fCard.tags" type="text" class="form-control" />
                    </div>
                  </form>
                </div>
                <div class="card-footer">
                  <button
                    v-on:click="updateCard(fCard);" type="button" class="btn btn-primary float-right">
                    <i v-if="fCard.updating == false" class="fa fa-save"></i>
                    <i v-else class="fa fa-spinner fa-pulse"></i>
                  </button>
                  <button v-on:click="deactivateEditMode(fCard)" v-on:click.stop="stopProp" type="button" class="btn btn-warning">Cancel</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <!-- Single Card View -->
        <div v-if="view=='single' && !showNewCardForm && currentCard">
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
        tags: "",
        revealed: false
        // hasParent: "",
        // parentTags: ""
      },
      cards: this.$store.state.cards
    };
  },
  computed: {
    // this basically sets up watchers
    currentCard: function() { 
      if (!this.cards) {return {}};
      return this.cards[this.currentCardIndex];
    },
    currentSet: function() { return this.cards }
  },
  methods: {
    flipCard: function(card) {
      if(card.editMode) return;
      card.revealed = !card.revealed;
    },
    addCard: function() {
      this.$store.dispatch('addCard', this.newCard);

      // reset card form
      this.newCard = {
        prompt: "",
        answer: "",
        tags: "",
        revealed: false
        //  hasParent: "",
        //  parentTags: ""
      };
      this.showNewCardForm = false; // doesn't work :(
    },
    deactivateEditMode: card => {
      card.editMode = false; 
      card.revealed = false;
    },
    updateCard: function(card) {
      // todo: figure out why dom isn't reaciting to .updating property
      card.updating = true;
      this.$store.dispatch('updateCard', card)
    },
    deleteCard: function(card) {
      this.$store.dispatch('deleteCard', card)
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
    },
    prevCard: function() {
      // handle going to begining of array from end.
      if (this.currentCardIndex == 0) {
        this.currentCardIndex = this.cards.length - 1;
      } else {
        this.currentCardIndex--;
      }
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
    stopProp: event => {
      event.stopPropagation();
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
.card ul, .card ol {
  text-align: left;
}
div#gridContainer div.card-content {
  padding-bottom: 3rem;
}
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

button.card-edit-btn {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 46px;
  height: 46px;
  background-color: #eee;
  color: #4b4b4b;
  border-radius: 50%;
  box-shadow: 1px 1px 2px #ccc;
}

button.card-delete-btn {
  position: absolute;
  bottom: 10px;
  left: 60px;
  width: 46px;
  height: 46px;
  background-color: #eee;
  color: #4b4b4b;
  border-radius: 50%;
  box-shadow: 1px 1px 2px #ccc;
}

button.card-edit-btn:hover{
  /* background-color: #dfdedf; */
  color: #333;
  box-shadow: 2px 2px 4px #ccc;
}

button.card-delete-btn:hover{
  /* background-color: #dfdedf; */
  color: #333;
  box-shadow: 2px 2px 4px #ccc;
}

.basebar-txt {
  position: absolute;
  bottom: 6px;
  left: 120px;
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

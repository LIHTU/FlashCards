import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
import 'firebase/firestore'
import _ from 'lodash'

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
db.collection("cards").get().then(function (querySnapshot) {
  querySnapshot.forEach(doc => {
    var card = doc.data();
    card.revealed = false;
    card.editMode = false;
    card.updating = false;
    card.deletePending = false;
    card.docId = doc.id;
    cardsCollection.push(card);
  });
}).catch(error => {
  console.log(`Error getting documents: \n\t ${error}`);
});

var initCard = function(card){
  card.revealed = false;
  card.editMode = false;
  card.updating = false;
  card.deletePending = false;
  return card;
}

export const store = new Vuex.Store({
  state: {
    cards: cardsCollection
  },

  mutations: {
    addCard(state, card) {
      console.log('card in mutation', card);
      card = initCard(card);
      state.cards.push(Object.assign({}, card));
    }, 
    updateCard(state, card) {
      console.log('card', card.docId, "updated");
    },
    deleteCard(state, card) {
      let cardIndex = state.cards.findIndex(c => c.docId == card.docId);
      console.log('card with prompt', state.cards[cardIndex].prompt.slice(0,20), "has been deleted");
      state.cards.splice(cardIndex, 1);
    }
  },

  actions: {
    addCard(context, card) {
      db.collection("cards").add(Object.assign({}, card))
      .then(function (docRef){
        card.docId = docRef.id;
        context.commit('addCard', card)
      })
      .catch(function (error){
        console.error("Error adding document: ", error);
      });
    },

    updateCard(context, card) {
      db.collection('cards').doc(card.docId).update({
        answer: card.answer,
        prompt: card.prompt,
        tags: card.tags
      })
      .then(function ()
      {
        context.commit('updateCard', card);
        card.updating = false;
        card.editMode = false;
      })
      .catch(function (error)
      {
        console.error("Error adding document: ", error);
        card.updating = false;
      })
    },

    deleteCard(context, card) {
      console.log('card.docId', card.docId);
      db.collection('cards').doc(card.docId).delete()
      .then(function ()
      {
        context.commit('deleteCard', card);
      })
      .catch(function (error)
      {
        console.error("Error deleting document: ", error);
      })
      // async function fauxDelete(card) {
      //   return card.prompt.slice(0,20) + "card has been fake deleted";
      // }

      // fauxDelete(card).then(function(msg){
      //   console.log('msg:', msg);
      // });
    }
  },

  // getters will re-evaluate if the state they depend on changes.  This makes them reactive.
  getters: {

    // examples ⬇
    // doneTodos: state =>
    // {
    //   return state.todos.filter(todo => todo.done)
    // }
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
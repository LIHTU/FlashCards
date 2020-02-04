import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
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
      firestoreCards: cardsCollection
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
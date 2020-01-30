// Robin created this file manually following tutorial at https://savvyapps.com/blog/definitive-guide-building-web-app-vuejs-firebase

import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyBbDjN2mTPhwsjYBsjM8ok6XngNnAIM1QM",
    authDomain: "",
    databaseURL: "",
    projectId: "flashcardslight",
    storageBucket: "",
    messagingSenderId: ""
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
// const usersCollection = db.collection('users')
const cardsCollection = db.collection('cards')


export {
    db,
    auth,
    // currentUser,
    cardsCollection
}
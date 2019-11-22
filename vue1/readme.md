# Flash Cards Vue App (Work in Progress)
Author: Robin Nelson

## The purposes of this app
1. Allow author to experiment with vue.js and learn the basics of this framework.
2. To serve as a basic demo of front-end web development skills to prospective employers.

I'm traditionally a AngularJS devloper, but am trying out vue as it's highly favored by developers per the most recent stack overflow [dev survey](#https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted)

## Instructions to Run
1. visit [flashcardslight.firebaseapp.com](#https://flashcardslight.firebaseapp.com/)

## About
New data not yet persistent! Card data is just stored as json in a front-end js file. The backend of the app is in progress.
I'm currently working on building out storage and a nosql database using google's [firebase](#https://firebase.google.com/).

## Warnings
I'm using v-html to display card text so that I can put styling html in the card data.  This is a secruity 'no-no' espeically since card data can be input by users, making this a textbook case for a Cross-Site Scripting (XXS) attack!  Curiously, however, I haven't been able to exploit the vulnerability by putting a script tag in a new card.  If you know why this doesn't work, I'd love to hear from you!  I'll stop using the v-html directive before I actually allow user input to hit the server and be retrieved, and you should too, just in case someone does figure out how to exploint this supposedly gaping security hole!
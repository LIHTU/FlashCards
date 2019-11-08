# Flash Cards Vue App (Work in Progress)
Author: Robin Nelson

## The purposes of this app
1. Allow author to experiment with vue.js and learn the basics of this framework.
2. To serve as a basic demo of front-end web development skills to prospective employers.

I'm traditionally a AngularJS devloper, but am enjoying the vue's intuitive design.

## Instructions to Run
1. download or clone the repo
2. open index.html or another html file locally.  

## About
New data not persistent! This app has no backend and does not current leverage browser caching to implement any level of persistence.
I'm currently working on the backend in another repo, using django and deploying on the google cloud platform, 
but both of these technologies are new to me, so launch date on the served version of the app is unknown.
Hopefully, I'll have it up by November 20th, 2019

## Warnings
I'm using v-html to display card text so that I can put styling html in the card data.  This is a secruity 'no-no' espeically since card data can be input by users, making this a textbook case for a Cross-Site Scripting (XXS) attack!  Curiously, however, I haven't been able to exploit the vulnerability by putting a script tag in a new card.  If you know why this doesn't work, I'd love to hear from you!  I'll stop using the v-html directive before I serve the site on the web, and you should too, just in case someone does figure out how to exploint this supposedly gaping security hole!
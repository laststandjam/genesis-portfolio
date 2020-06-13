const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyD4J-0Y-TCLYR4DiRx54sImM8XsHc9Fo_0',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: 'genesis-portfolio'
  });
  
  var db = firebase.firestore();
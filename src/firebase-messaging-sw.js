importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyCd-VmMeFcS2Ym0X6Apq-iLgZ9DNifOaW4",
    authDomain: "myeventz-4de49.firebaseapp.com",
    databaseURL: "https://myeventz-4de49.firebaseio.com",
    projectId: "myeventz-4de49",
    storageBucket: "myeventz-4de49.appspot.com",
    messagingSenderId: "577338480756"
  };
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});
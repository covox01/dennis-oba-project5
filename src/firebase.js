import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCk_GvCgnqPnYUhwAv4zbu897ZF6ksyUDk",
    authDomain: "taskmaster-2c8be.firebaseapp.com",
    databaseURL: "https://taskmaster-2c8be.firebaseio.com",
    projectId: "taskmaster-2c8be",
    storageBucket: "taskmaster-2c8be.appspot.com",
    messagingSenderId: "739027409597"
};
firebase.initializeApp(config);

export default firebase;


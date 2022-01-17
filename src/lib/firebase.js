// // import Firebase from 'firebase/app';
// import Firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// here is where i want to call the seed file (only once!)
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAIWxoGrIHF5XapUCYyQmw28Z_8H16iMvA",
    authDomain: "instagram-pp-e3c2b.firebaseapp.com",
    projectId: "instagram-pp-e3c2b",
    storageBucket: "instagram-pp-e3c2b.appspot.com",
    messagingSenderId: "681791270843",
    appId: "1:681791270843:web:0ca53e01122e63f37e5e9e"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file (only once!)
// seedDatabase(firebase);

// console.log('firebase', firebase);

export { firebase, FieldValue };

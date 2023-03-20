import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWpJcEu_8m93I1y46z5cLu-wurtoJjZIc",
    authDomain: "clone-95cb4.firebaseapp.com",
    projectId: "clone-95cb4",
    storageBucket: "clone-95cb4.appspot.com",
    messagingSenderId: "125836286493",
    appId: "1:125836286493:web:976510408c9a024960c4f4",
    measurementId: "G-D821FY1XX8"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = app.firebase.auth();

  export {auth, db};
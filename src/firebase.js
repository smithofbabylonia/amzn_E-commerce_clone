import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = app.firebase.auth();

  export {auth, db};

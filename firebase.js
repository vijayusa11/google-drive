import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdaRq-wo4_Myh44U8CSx6NEi40mG-o0Ps",
    authDomain: "drive-vijay.firebaseapp.com",
    projectId: "drive-vijay",
    storageBucket: "drive-vijay.appspot.com",
    messagingSenderId: "347176482494",
    appId: "1:347176482494:web:60b98bf86436d7401090ef",
    measurementId: "G-T6YC665FT7"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { db, auth, provider, storage }
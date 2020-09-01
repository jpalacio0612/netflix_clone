import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwHhYm54qrfOBViHb3MRjgOztDNmujcKs",
  authDomain: "netflix-clone-54554.firebaseapp.com",
  databaseURL: "https://netflix-clone-54554.firebaseio.com",
  projectId: "netflix-clone-54554",
  storageBucket: "netflix-clone-54554.appspot.com",
  messagingSenderId: "696134179669",
  appId: "1:696134179669:web:4d0b8f5ce1d5e69e702ddc",
  measurementId: "G-77PRNG8V0G",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBI3e28CeTyFYUKifL3p6ws9uHgecWhQqM",
  authDomain: "snapchat-clone-982a1.firebaseapp.com",
  projectId: "snapchat-clone-982a1",
  storageBucket: "snapchat-clone-982a1.appspot.com",
  messagingSenderId: "716692414588",
  appId: "1:716692414588:web:701da107b89cf8797469f9",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider} 
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-ju1QaXCdiNKPbBKG0L3z5B3JyANxbsc",
  authDomain: "projectmanagement-df4c6.firebaseapp.com",
  projectId: "projectmanagement-df4c6",
  storageBucket: "projectmanagement-df4c6.appspot.com",
  messagingSenderId: "948425741970",
  appId: "1:948425741970:web:2fef8539dc0a827cb9b84b",
};

// initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };

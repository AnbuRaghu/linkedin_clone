import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAQr11jDszR0D9H4SjsXwZjTdmcsLyl974",
  authDomain: "linkedin-4a169.firebaseapp.com",
  projectId: "linkedin-4a169",
  storageBucket: "linkedin-4a169.appspot.com",
  messagingSenderId: "315119316082",
  appId: "1:315119316082:web:ddb023116afc84499f66eb",
  measurementId: "G-FXFH9ZQ3RJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

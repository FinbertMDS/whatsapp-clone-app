import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOXWbVgNTUFbf382NG7iOiZ77vIMIkBdA",
  authDomain: "whatsapp-clone-app-8be49.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-app-8be49.firebaseio.com",
  projectId: "whatsapp-clone-app-8be49",
  storageBucket: "whatsapp-clone-app-8be49.appspot.com",
  messagingSenderId: "616162670464",
  appId: "1:616162670464:web:c9574d3164564c0115b365",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;

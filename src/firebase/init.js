import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCTJCDi3ARDk2_ZmCnpE8xytweYt6O3v_8",
  authDomain: "ninja-chat-45513.firebaseapp.com",
  databaseURL: "https://ninja-chat-45513.firebaseio.com",
  projectId: "ninja-chat-45513",
  storageBucket: "ninja-chat-45513.appspot.com",
  messagingSenderId: "1054096995599",
  appId: "1:1054096995599:web:6168dd82c2f8325f383a7a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
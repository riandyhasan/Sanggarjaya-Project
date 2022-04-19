import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkbuGTO2zJ4YiLcH40FQkLnVQfwG13gM8",
  authDomain: "sanggarjaya-dc058.firebaseapp.com",
  projectId: "sanggarjaya-dc058",
  storageBucket: "sanggarjaya-dc058.appspot.com",
  messagingSenderId: "95074988040",
  appId: "1:95074988040:web:fb622c48b0bea9e1f0a1bd",
  measurementId: "G-J6JG8MHNKY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

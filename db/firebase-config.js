import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJJbEA5TCkTBf0S_wBswrX-PIGPu53pFQ",
  authDomain: "emarket-51a72.firebaseapp.com",
  projectId: "emarket-51a72",
  storageBucket: "emarket-51a72.appspot.com",
  messagingSenderId: "944235604775",
  appId: "1:944235604775:web:16b8d241d79776fee79702"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
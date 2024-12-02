import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyfv9Ou_IV7uNHfh8MfpfU106McXf5998",
  authDomain: "cellpoint-pv.firebaseapp.com",
  projectId: "cellpoint-pv",
  storageBucket: "cellpoint-pv.firebasestorage.app",
  messagingSenderId: "201636386547",
  appId: "1:201636386547:web:140ae27649f946d87f4986"
};

var db = firebase.firestore();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


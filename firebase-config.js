  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-databse.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCyfv9Ou_IV7uNHfh8MfpfU106McXf5998",
    authDomain: "cellpoint-pv.firebaseapp.com",
    projectId: "cellpoint-pv",
    storageBucket: "cellpoint-pv.firebasestorage.app",
    messagingSenderId: "201636386547",
    appId: "1:201636386547:web:140ae27649f946d87f4986"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

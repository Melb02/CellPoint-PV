// Importar las funciones necesarias desde el SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"; 

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyfv9Ou_IV7uNHfh8MfpfU106McXf5998",
  authDomain: "cellpoint-pv.firebaseapp.com",
  projectId: "cellpoint-pv",
  storageBucket: "cellpoint-pv.firebasestorage.app",
  messagingSenderId: "201636386547",
  appId: "1:201636386547:web:140ae27649f946d87f4986"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la referencia de la base de datos de Firebase
const db = getDatabase(app);


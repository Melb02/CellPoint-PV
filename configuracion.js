// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyfv9Ou_IV7uNHfh8MfpfU106McXf5998",
  authDomain: "cellpoint-pv.firebaseapp.com",
  projectId: "cellpoint-pv",
  storageBucket: "cellpoint-pv.firebasestorage.app",
  messagingSenderId: "201636386547",
  appId: "1:201636386547:web:140ae27649f946d87f4986"
};

// Inicializar Firebase si no se ha inicializado aún
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Inicializar Firestore
const db = firebase.firestore();

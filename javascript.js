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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Registrar cliente
document.getElementById("register-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (nombre && telefono) {
        try {
            const clienteRef = doc(collection(db, "Cliente"));
            await setDoc(clienteRef, {
                Nombre: nombre,
                Celular: telefono
            });
            alert("Cliente registrado con éxito");
            document.getElementById("register-form").reset();
        } catch (error) {
            alert("Error al registrar el cliente: " + error.message);
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Buscar cliente
document.getElementById("buscar-btn").addEventListener("click", async function () {
    const buscarNombre = document.getElementById("buscar-nombre").value.trim();

    if (buscarNombre) {
        try {
            const clienteSnapshot = await getDoc(doc(db, "Cliente", buscarNombre));
            if (clienteSnapshot.exists()) {
                const data = clienteSnapshot.data();
                document.getElementById("resultado-busqueda").innerText =
                    `Nombre: ${data.Nombre}\nCelular: ${data.Celular}`;
            } else {
                document.getElementById("resultado-busqueda").innerText = "Cliente no encontrado.";
            }
        } catch (error) {
            alert("Error al buscar el cliente: " + error.message);
        }
    } else {
        alert("Por favor, ingresa un nombre para buscar.");
    }
});

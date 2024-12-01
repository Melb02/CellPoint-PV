// Importar la configuración de Firebase
import app from './firebase-config.js';

// Importar las funciones necesarias de Firebase
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Obtener la referencia a la base de datos de Firebase
const db = getDatabase(app);  // Usando la app configurada

// Registrar cliente en Firebase
document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (nombre && telefono) {
        const clienteId = nombre.toLowerCase().replace(/\s+/g, "_"); // ID único basado en el nombre

        // Escribir los datos del cliente en Firebase
        set(ref(db, 'Cliente/' + clienteId), {
            Nombre: nombre,
            Celular: telefono
        })
        .then(() => {
            alert("Cliente registrado exitosamente.");
        })
        .catch((error) => {
            console.error("Error al registrar cliente:", error);
            alert("Hubo un error al registrar al cliente.");
        });
    } else {
        alert("Por favor, ingresa el nombre y teléfono.");
    }
});

// Buscar cliente en Firebase
document.getElementById("buscar-btn").addEventListener("click", () => {
    const buscarNombre = document.getElementById("buscar-nombre").value.trim().toLowerCase();
    const resultadoDiv = document.getElementById("resultado-busqueda");

    if (buscarNombre) {
        const dbRef = ref(db);

        // Buscar el cliente por nombre (mejor con un índice si tienes muchos registros)
        get(query(ref(db, "Cliente"), orderByChild("Nombre"), equalTo(buscarNombre)))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const cliente = snapshot.val();
                    const clienteId = Object.keys(cliente)[0]; // Obtener el primer cliente encontrado
                    const data = cliente[clienteId];
                    resultadoDiv.textContent = `Cliente encontrado: ${data.Nombre}, Teléfono: ${data.Celular}`;
                } else {
                    resultadoDiv.textContent = "Cliente no encontrado.";
                }
            })
            .catch((error) => {
                console.error("Error al buscar el cliente:", error);
                resultadoDiv.textContent = "Hubo un error al buscar el cliente.";
            });
    } else {
        alert("Por favor, ingresa un nombre para buscar.");
    }
});


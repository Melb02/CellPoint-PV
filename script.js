import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const db = getDatabase(); // Inicializa la base de datos

document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (nombre && telefono) {
        // Crea una referencia única para cada cliente
        const clienteId = Date.now().toString(); // ID único basado en el tiempo

        // Guarda los datos del cliente en la base de datos
        set(ref(db, `Cliente/${clienteId}`), {
            Nombre: nombre,
            Celular: telefono
        })
            .then(() => {
                alert("Cliente registrado correctamente.");
                document.getElementById("register-form").reset();
            })
            .catch((error) => {
                console.error("Error al registrar el cliente:", error);
                alert("Hubo un error al registrar al cliente.");
            });
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

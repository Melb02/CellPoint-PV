import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

document.getElementById("buscar-btn").addEventListener("click", () => {
    const buscarNombre = document.getElementById("buscar-nombre").value.trim().toLowerCase();
    const resultadoDiv = document.getElementById("resultado-busqueda");

    if (buscarNombre) {
        const dbRef = ref(getDatabase());

        // Consulta todos los clientes y busca coincidencias por nombre
        get(child(dbRef, "Cliente"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let clienteEncontrado = null;

                    // Recorre todos los clientes y verifica si el nombre coincide
                    snapshot.forEach((childSnapshot) => {
                        const data = childSnapshot.val();
                        if (data.Nombre.toLowerCase() === buscarNombre) {
                            clienteEncontrado = data;
                        }
                    });

                    if (clienteEncontrado) {
                        resultadoDiv.textContent = `Cliente encontrado: ${clienteEncontrado.Nombre}, Teléfono: ${clienteEncontrado.Celular}`;
                    } else {
                        resultadoDiv.textContent = "Cliente no encontrado.";
                    }
                } else {
                    resultadoDiv.textContent = "No hay clientes registrados.";
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

function buscar() {
    // Obtener el valor del campo de búsqueda
    const nombreABuscar = document.getElementById("buscar-nombre").value.trim();

    // Validar que el campo no esté vacío
    if (nombreABuscar === "") {
        alert("Por favor, ingresa un nombre para buscar.");
        return;
    }

    // Consultar Firestore
    db.collection("Cliente")
        .where("nombre", "==", nombreABuscar) // Filtrar por el campo "nombre"
        .get()
        .then((querySnapshot) => {
            // Si no hay resultados
            if (querySnapshot.empty) {
                document.getElementById("resultado-busqueda").innerText = "No se encontró ningún cliente.";
                return;
            }

            // Mostrar resultados
            let resultados = "";
            querySnapshot.forEach((doc) => {
                const cliente = doc.data();
                resultados += `Nombre: ${cliente.nombre}, Teléfono: ${cliente.telefono}<br>`;
            });
            document.getElementById("resultado-busqueda").innerHTML = resultados;
        })
        .catch((error) => {
            console.error("Error al buscar el cliente: ", error);
            alert("Hubo un error al buscar.");
        });
}


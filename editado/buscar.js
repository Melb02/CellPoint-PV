function buscar() {
    const correoABuscar = document.getElementById("buscar-correo").value.trim();

    if (correoABuscar === "") {
        alert("Por favor, ingresa un correo para buscar.");
        return;
    }

    db.collection("Cliente")
        .where("correo", "==", correoABuscar)
        .get()
        .then((querySnapshot) => {
            const resultContainer = document.getElementById("result-container");
            const resultadoBusqueda = document.getElementById("resultado-busqueda");
            resultadoBusqueda.innerHTML = ""; // Limpiar resultados previos

            if (querySnapshot.empty) {
                alert("No se encontró ningún cliente.");
                resultContainer.style.display = "none"; // Ocultar resultado si no hay datos
                return;
            }

            resultContainer.style.display = "block"; // Mostrar contenedor de resultados
            querySnapshot.forEach((doc) => {
                const cliente = doc.data();
                resultadoBusqueda.innerHTML = `
                    <p>Nombre: ${cliente.nombre}, Teléfono: ${cliente.telefono}, Correo: ${cliente.correo}</p>
                    <button class="btn" onclick="iniciarFactura('${doc.id}')">Iniciar Factura</button>
                `;
            });
        })
        .catch((error) => {
            console.error("Error al buscar el cliente:", error);
            alert("Hubo un error al buscar.");
        });
}
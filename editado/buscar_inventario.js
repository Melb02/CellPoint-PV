function buscar_inventario() {
    const marcaABuscar = document.getElementById("marca").value.trim();

    if (marcaABuscar === "") {
        alert("Por favor, ingrese la marca del celular.");
        return;
    }

    db.collection("Inventario")
        .where("marca", "==", marcaABuscar)
        .get()
        .then((querySnapshot) => {
            const resultContainer = document.getElementById("result-container");
            const resultadoBusqueda = document.getElementById("resultado-busqueda");
            resultadoBusqueda.innerHTML = ""; // Limpiar resultados previos

            if (querySnapshot.empty) {
                alert("No se encontró la marca digitada.");
                resultContainer.style.display = "none"; // Ocultar resultado si no hay datos
                return;
            }

            resultContainer.style.display = "block"; // Mostrar contenedor de resultados
            querySnapshot.forEach((doc) => {
                const Inventario = doc.data();
                resultadoBusqueda.innerHTML = `
                    <p> Sku: ${Inventario.sku}, Nombre: ${Inventario.nombre}, Cantidad: ${Inventario.cantidad}, Precio: ${Inventario.precio}</p>
                `;
                //<button class="btn" onclick="iniciarFactura('${doc.id}')">Iniciar Factura</button>*/
            });
        })
        .catch((error) => {
            console.error("Error al buscar el cliente:", error);
            alert("Hubo un error al buscar.");
        });
}
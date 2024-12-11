async function buscar_inventario() {
    const marca = document.getElementById("marca").value.trim();
    const categoria = document.getElementById("categoria").value.trim();

    const resultContainer = document.getElementById("result-container");
    const resultadoBusqueda = document.getElementById("resultado-busqueda");
    resultadoBusqueda.innerHTML = ""; // Limpiar resultados previos

    // Validar que al menos un filtro esté activo
    if (!marca && !categoria) {
        alert("Por favor, ingrese al menos un filtro para buscar.");
        return;
    }

    let query = db.collection("Inventario");

    // Aplicar filtros si están definidos
    if (marca) query = query.where("marca", "==", marca);
    if (categoria) query = query.where("categoria", "==", categoria);

    try {
        const querySnapshot = await query.get();
        
        // Mostrar mensaje si no hay resultados
        if (querySnapshot.empty) {
            resultadoBusqueda.innerHTML = "<p>No se encontraron productos con los filtros aplicados.</p>";
            resultContainer.style.display = "block";
            return;
        }

        // Mostrar resultados
        querySnapshot.forEach((doc) => {
            const producto = doc.data();
            resultadoBusqueda.innerHTML += `
                <div class="producto-item">
                    <p><strong>Nombre:</strong> ${producto.nombre}</p>
                    <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                    <button class="btn" onclick="agregarCarrito('${doc.id}', '${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
                </div>
            `;
        });

        resultContainer.style.display = "block"; // Mostrar contenedor de resultados
    } catch (error) {
        console.error("Error al buscar productos:", error);
        resultadoBusqueda.innerHTML = "<p>Error al realizar la búsqueda. Intente nuevamente.</p>";
        resultContainer.style.display = "block";
    }
}

// Función para agregar al carrito (placeholder)
function agregarCarrito(productoId) {
    alert(`Producto con ID ${productoId} agregado al carrito.`);
    // Aquí puedes implementar la lógica para manejar el carrito
}


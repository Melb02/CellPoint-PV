// Registrar un producto en el inventario
function registrarProducto() {
    const sku = document.getElementById("sku").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const marca = document.getElementById("marca").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const cantidad = parseInt(document.getElementById("cantidad").value.trim());
    const precio = parseFloat(document.getElementById("precio").value.trim());

    if (!sku || !nombre || !marca || !categoria || isNaN(cantidad) || isNaN(precio)) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    db.collection("Inventario").add({
        sku: sku,
        nombre: nombre,
        marca: marca,
        categoria: categoria,
        cantidad: cantidad,
        precio: precio
    })
    .then(() => {
        alert("Producto registrado con éxito.");
        document.getElementById("registro-form").reset();
    })
    .catch((error) => {
        console.error("Error al registrar el producto:", error);
        alert("Hubo un error al registrar el producto.");
    });
}

// Buscar un producto por SKU y mostrar opciones de modificación
function buscarProducto() {
    const sku = document.getElementById("buscar-sku").value.trim();

    if (!sku) {
        alert("Por favor, ingresa un SKU para buscar.");
        return;
    }

    db.collection("Inventario").where("sku", "==", sku).get()
        .then((querySnapshot) => {
            const resultadoBusqueda = document.getElementById("resultado-busqueda");
            resultadoBusqueda.innerHTML = "";

            if (querySnapshot.empty) {
                resultadoBusqueda.innerHTML = "<p>No se encontró ningún producto con ese SKU.</p>";
                return;
            }

            querySnapshot.forEach((doc) => {
                const producto = doc.data();
                resultadoBusqueda.innerHTML = `
                    <p><strong>Nombre:</strong> ${producto.nombre}</p>
                    <p><strong>Marca:</strong> ${producto.marca}</p>
                    <p><strong>Categoría:</strong> ${producto.categoria}</p>
                    <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
                    <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                    <div>
                        <input type="number" id="modificar-cantidad" placeholder="Nueva Cantidad" value="${producto.cantidad}">
                        <input type="number" id="modificar-precio" placeholder="Nuevo Precio" step="0.01" value="${producto.precio}">
                        <button class="btn" onclick="modificarProducto('${doc.id}')">Modificar</button>
                    </div>
                `;
            });
        })
        .catch((error) => {
            console.error("Error al buscar el producto:", error);
            alert("Hubo un error al buscar el producto.");
        });
}

// Modificar cantidad y precio del producto
function modificarProducto(productoId) {
    const nuevaCantidad = parseInt(document.getElementById("modificar-cantidad").value.trim());
    const nuevoPrecio = parseFloat(document.getElementById("modificar-precio").value.trim());

    if (isNaN(nuevaCantidad) || isNaN(nuevoPrecio)) {
        alert("Por favor, ingresa valores válidos para cantidad y precio.");
        return;
    }

    db.collection("Inventario").doc(productoId).update({
        cantidad: nuevaCantidad,
        precio: nuevoPrecio
    })
    .then(() => {
        alert("Producto modificado con éxito.");
        buscarProducto(); // Actualizar los datos mostrados
    })
    .catch((error) => {
        console.error("Error al modificar el producto:", error);
        alert("Hubo un error al modificar el producto.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const cliente = JSON.parse(localStorage.getItem("clienteFactura"));
    const carrito = JSON.parse(localStorage.getItem("factura")) || [];

    const clienteInfo = document.getElementById("cliente-info");
    const facturaDetalle = document.querySelector("#factura-detalle tbody");
    const subtotalElement = document.getElementById("subtotal");
    const impuestoElement = document.getElementById("impuesto");
    const totalElement = document.getElementById("total");

    // Mostrar información del cliente
    if (cliente) {
        clienteInfo.innerHTML = `
            <p><strong>Cliente:</strong> ${cliente.nombre}</p>
            <p><strong>Correo:</strong> ${cliente.correo}</p>
            <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
        `;
    }

    let subtotal = 0;

    // Renderizar productos del carrito
    carrito.forEach((producto) => {
        const totalProducto = producto.cantidad * producto.precio;
        subtotal += totalProducto;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>$${totalProducto.toFixed(2)}</td>
        `;
        facturaDetalle.appendChild(row);
    });

    // Calcular totales
    const impuesto = subtotal * 0.07;
    const total = subtotal + impuesto;

    subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    impuestoElement.textContent = `Impuesto (7%): $${impuesto.toFixed(2)}`;
    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    // Limpiar carrito después de generar la factura
    localStorage.removeItem("carrito");
});

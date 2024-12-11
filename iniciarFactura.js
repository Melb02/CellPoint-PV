function iniciarFactura(clienteId) {
    // Obtener información del cliente desde Firestore
    db.collection("Cliente")
        .doc(clienteId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                const cliente = doc.data();

                // Guardar información del cliente en localStorage
                localStorage.setItem("clienteFactura", JSON.stringify(cliente));

                // Verificar si hay productos en el carrito
                const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                if (carrito.length === 0) {
                    alert("El carrito está vacío. Agregue productos antes de iniciar la factura.");
                    return;
                }

                // Guardar el carrito actual para la factura
                localStorage.setItem("factura", JSON.stringify(carrito));

                // Redirigir a la página de factura
                window.location.href = "factura.html";
            } else {
                alert("No se encontró información del cliente.");
            }
        })
        .catch((error) => {
            console.error("Error al obtener información del cliente:", error);
            alert("Hubo un error al iniciar la factura.");
        });
}

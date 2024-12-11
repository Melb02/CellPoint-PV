function guardar() {
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const cedula = document.getElementById("cedula").value.trim();

    if (!nombre || !correo) {
        alert("Por favor, completa los campos requeridos: Nombre y Correo.");
        return;
    }

    db.collection("Cliente").add({
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        cedula: cedula
    })
    .then((docRef) => {
        alert("Registro exitoso");

        const resultContainer = document.getElementById("result-container");
        const resultadoBusqueda = document.getElementById("resultado-busqueda");

        // Mostrar el resultado
        resultContainer.style.display = "block";
        resultadoBusqueda.innerHTML = `
            <p>Nombre: ${nombre}, Teléfono: ${telefono || 'N/A'}, Correo: ${correo}</p>
            <button class="btn" onclick="iniciarFactura('${docRef.id}')">Iniciar Factura</button>
        `;

        document.getElementById("register-form").reset(); // Limpiar formulario
    })
    .catch((error) => {
        console.error("Error al registrar cliente:", error);
        alert("Hubo un error al registrar el cliente.");
    });
}

function iniciarFactura(clienteId) {
    alert(`Generando factura para el cliente con ID: ${clienteId}`);
}
function guardar_usuario() {
    const apellido = document.getElementById("apellido").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const usuario = document.getElementById("usuario").value.trim();

    if (!nombre || !apellido) {
        alert("Por favor, completa los campos requeridos: Nombre y apellido ");
        return;
    }

    db.collection("usuarios").add({
        nombre: nombre,
        apellido: apellido,
        usuario: usuario,
    })
    .then((docRef) => {
        alert("Registro exitoso");

        /*const resultContainer = document.getElementById("result-container");
        const resultadoBusqueda = document.getElementById("resultado-busqueda");

        // Mostrar el resultado
        /*resultContainer.style.display = "block";
        resultadoBusqueda.innerHTML = `
            <p>Nombre: ${nombre}, Teléfono: ${telefono || 'N/A'}, Correo: ${correo}</p>
            <button class="btn" onclick="iniciarFactura('${docRef.id}')">Iniciar Factura</button>
        `*/

        document.getElementById("login_form").reset(); // Limpiar formulario
    })
    .catch((error) => {
        console.error("Error al registrar usuario:", error);
        alert("Hubo un error al registrar el usuario.");
    });
}

/*function iniciarFactura(clienteId) {
    alert(`Generando factura para el cliente con ID: ${clienteId}`);
}*/
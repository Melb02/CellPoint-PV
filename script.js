const clientes = [];

document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (nombre && telefono) {
        clientes.push({ nombre, telefono });
        alert("Cliente registrado correctamente.");
        document.getElementById("register-form").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

document.getElementById("buscar-btn").addEventListener("click", () => {
    const buscarNombre = document.getElementById("buscar-nombre").value.trim().toLowerCase();
    const resultado = clientes.find(cliente => cliente.nombre.toLowerCase() === buscarNombre);

    const resultadoDiv = document.getElementById("resultado-busqueda");
    if (resultado) {
        resultadoDiv.textContent = `Cliente encontrado: ${resultado.nombre}, Teléfono: ${resultado.telefono}`;
    } else {
        resultadoDiv.textContent = "Cliente no encontrado.";
    }
});

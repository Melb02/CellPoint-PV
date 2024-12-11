// Inicializar el carrito desde localStorage o vacío si no existe
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar un producto al carrito
function agregarCarrito(productoId, nombre, precio) {
    const productoExistente = carrito.find((producto) => producto.id === productoId);

    if (productoExistente) {
        // Si ya existe, incrementa la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si no existe, agrega el producto con cantidad 1
        carrito.push({ id: productoId, nombre, precio, cantidad: 1 });
    }

    guardarCarrito();
    renderizarCarrito();
}

// Función para renderizar el contenido del carrito
function renderizarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    carritoLista.innerHTML = "";

    // Mostrar mensaje si el carrito está vacío
    if (carrito.length === 0) {
        carritoLista.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    // Renderizar cada producto en el carrito
    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${producto.nombre} - $${(producto.precio * producto.cantidad).toFixed(2)} x ${producto.cantidad}
            <div>
                <button class="btn-sumar" onclick="modificarCantidad('${producto.id}', 1)">+</button>
                <button class="btn-restar" onclick="modificarCantidad('${producto.id}', -1)">-</button>
                <button class="btn-eliminar" onclick="eliminarProducto('${producto.id}')">Eliminar</button>
            </div>
        `;
        carritoLista.appendChild(li);
    });
}

// Función para modificar la cantidad de un producto
function modificarCantidad(productoId, cantidad) {
    const producto = carrito.find((producto) => producto.id === productoId);

    if (producto) {
        producto.cantidad += cantidad;

        // Si la cantidad llega a 0, eliminar el producto
        if (producto.cantidad <= 0) {
            eliminarProducto(productoId);
        } else {
            guardarCarrito();
            renderizarCarrito();
        }
    }
}

// Función para eliminar un producto del carrito
function eliminarProducto(productoId) {
    carrito = carrito.filter((producto) => producto.id !== productoId);
    guardarCarrito();
    renderizarCarrito();
}

// Función para vaciar todo el carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    renderizarCarrito();
}

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar el carrito al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});

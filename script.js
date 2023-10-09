document.addEventListener("DOMContentLoaded", function () {
    // Paso 1: Declarar variables y constantes necesarias
    const precioProducto = 50; // Precio unitario del producto
    const cantidadInput = document.getElementById("cantidad");
    const subtotalSpan = document.getElementById("subtotal");
    const agregarButton = document.getElementById("agregar");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total");

    // Paso 2: Agregar eventos para interactuar con la página
    cantidadInput.addEventListener("input", calcularSubtotal);
    agregarButton.addEventListener("click", agregarAlCarrito);

    // Paso 3: Función para calcular el subtotal en tiempo real
    function calcularSubtotal() {
        const cantidad = parseInt(cantidadInput.value);
        const subtotal = precioProducto * cantidad;
        subtotalSpan.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Paso 4: Función para agregar productos al carrito
    let totalCarrito = 0;
    function agregarAlCarrito() {
        const cantidad = parseInt(cantidadInput.value);
        const subtotal = precioProducto * cantidad;

        const listItem = document.createElement("li");
        listItem.textContent = `Producto 1 x${cantidad} - Subtotal: $${subtotal}`;

        listaCarrito.appendChild(listItem);

       
    }

    // Paso 5: Función para calcular el total del carrito
    function calcularTotalCarrito() {
        
        totalCarrito += subtotal;
        totalSpan.textContent = `$${totalCarrito}`;
        cantidadInput.value = "1";

        subtotalSpan.textContent = `$${precioProducto}`;
        
        // Completar esta función para calcular el total del carrito
    }
});

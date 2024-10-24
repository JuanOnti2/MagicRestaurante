function generar(nombrePlatillo, descripcion, precio) {
    const iva = 0.16;
    const subtotal = precio;
    const ivaAmount = subtotal * iva;
    const total = subtotal + ivaAmount;

    // Crear un objeto platillo
    const platillo = {
        nombre: nombrePlatillo,
        descripcion: descripcion,
        subtotal: subtotal.toFixed(2),
        iva: ivaAmount.toFixed(2),
        total: total.toFixed(2)
    };

    // Guardar el objeto como JSON en localStorage
    localStorage.setItem('platillo', JSON.stringify(platillo));

    // Redirigir a ticket.html
    window.location.href = 'ticket.html';
}

window.onload = function() {
    const ticketDetails = document.getElementById('ticketDetails');
    if (ticketDetails) {
        // Obtener el objeto platillo de localStorage
        const platilloJSON = localStorage.getItem('platillo');
        const platillo = JSON.parse(platilloJSON);

        if (platillo) {
            // Mostrar los datos del platillo en la página
            ticketDetails.innerHTML = `
                <h4>${platillo.nombre}</h4>
                <p>${platillo.descripcion}</p>
                <p>Subtotal: $${platillo.subtotal}</p>
                <p>IVA: $${platillo.iva}</p>
                <p>Total: $${platillo.total}</p>
            `;
        }
    }
};

// Función para crear un platillo personalizado
function crearPlatillo() {
    const nombre = document.getElementById('platilloNombre').value;
    const descripcion = document.getElementById('platilloDescripcion').value;
    const precio = parseFloat(document.getElementById('platilloPrecio').value);

    // Validar que los campos estén completos
    if (nombre && descripcion && !isNaN(precio)) {
        generar(nombre, descripcion, precio);
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

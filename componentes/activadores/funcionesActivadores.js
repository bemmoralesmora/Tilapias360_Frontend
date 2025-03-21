async function activar_desactivar(button, progreso) {
    const bombaId = button.parentElement.querySelector('h1').textContent; // Obtener el ID de la bomba
    let estado;

    if (button.textContent === "activar") {
        estado = "activado"; // Estado a enviar al servidor
        button.textContent = "desactivar";
        button.style.backgroundColor = "rgb(255, 120, 120)"; // Rojo claro
        progreso.textContent = "Funcionando"; // Cambiar a "Funcionando"
    } else {
        estado = "desactivado"; // Estado a enviar al servidor
        button.textContent = "activar";
        button.style.backgroundColor = "rgb(157, 194, 101)"; // Verde
        progreso.textContent = "Inactivo"; // Cambiar a "Inactivo"
    }

    try {
        // Enviar la solicitud al servidor
        const response = await fetch('http://localhost:3000/control-bomba', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bombaId, estado }), // Enviar el ID de la bomba y el estado
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message); // Mensaje de confirmación del servidor
        } else {
            console.error('Error al enviar el comando al servidor');
        }
    } catch (error) {
        console.error('Error de conexión:', error);
    }
}

export { activar_desactivar };
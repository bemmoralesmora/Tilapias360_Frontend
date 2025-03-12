function activa_desactivar() {
    // Selecciona todos los botones con la clase 'activar_desactivar'
    const botones = document.querySelectorAll('.activar_desactivar');

    // Itera sobre cada botón
    botones.forEach(boton => {
        // Agrega un evento de clic a cada botón
        boton.addEventListener('click', () => {
            if (boton.textContent === 'activar') {
                // Cambia el texto a 'desactivar' y el color de fondo a rojo
                boton.textContent = 'desactivar';
                boton.style.backgroundColor = 'red';
            } else {
                // Cambia el texto a 'activar' y restablece el color de fondo
                boton.textContent = 'activar';
                boton.style.backgroundColor = '';
            }
        });
    });
}

export { activa_desactivar };   
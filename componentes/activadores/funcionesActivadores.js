function activar_desactivar(button, progreso) {
    if (button.textContent === "activar") {
        button.textContent = "desactivar";
        button.style.backgroundColor = "rgb(255, 120, 120)"; // Rojo claro
        progreso.textContent = "Funcionando"; // Cambiar a "Funcionando"
    } else {
        button.textContent = "activar";
        button.style.backgroundColor = "rgb(157, 194, 101)"; // Verde
        progreso.textContent = "Inactivo"; // Cambiar a "Inactivo"
    }
}

export { activar_desactivar };
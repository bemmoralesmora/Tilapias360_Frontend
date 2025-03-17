function activar_desactivar(button) {
    if (button.textContent === "activar") {
        button.textContent = "desactivar";
        button.style.backgroundColor = "rgb(255, 120, 120)"; // Rojo claro
    } else {
        button.textContent = "activar";
        button.style.backgroundColor = "rgb(157, 194, 101)"; // Verde
    }
}

export { activar_desactivar };

import { activar_desactivar } from "./funcionesActivadores.js";

function activadores() {
    let activadores = document.createElement('section');
    activadores.className = "activators";

    // Crear bomba1
    let bomba1 = document.createElement('div');
    bomba1.className = "bomba1";

    let imgAct1 = document.createElement('div');
    imgAct1.className = "img-act";

    let img1 = document.createElement('img');
    img1.src = "componentes/activadores/images-act/activador1.png"; // Imagen sin ruta
    img1.alt = "";
    imgAct1.appendChild(img1);

    let h1Bomba1 = document.createElement('h1');
    h1Bomba1.textContent = "Bomba#1";

    let progreso1 = document.createElement('div');
    progreso1.className = "progreso";
    progreso1.textContent = "Inactivo"; // Cambiado a "Inactivo"

    let button1 = document.createElement('button');
    button1.className = "act-desc";
    button1.textContent = "activar";

    // Agregar el evento de clic al botón
    button1.addEventListener('click', () => activar_desactivar(button1, progreso1));

    bomba1.appendChild(imgAct1);
    bomba1.appendChild(h1Bomba1);
    bomba1.appendChild(progreso1);
    bomba1.appendChild(button1);

    activadores.appendChild(bomba1);

    // Crear bomba2
    let bomba2 = document.createElement('div');
    bomba2.className = "bomba1";

    let imgAct2 = document.createElement('div');
    imgAct2.className = "img-act";

    let img2 = document.createElement('img');
    img2.src = "componentes/activadores/images-act/activador1.png"; // Imagen sin ruta
    img2.alt = "";
    imgAct2.appendChild(img2);

    let h1Bomba2 = document.createElement('h1');
    h1Bomba2.textContent = "Bomba#2";

    let progreso2 = document.createElement('div');
    progreso2.className = "progreso";
    progreso2.textContent = "Inactivo"; // Cambiado a "Inactivo"

    let button2 = document.createElement('button');
    button2.className = "act-desc";
    button2.textContent = "activar";

    // Agregar el evento de clic al botón
    button2.addEventListener('click', () => activar_desactivar(button2, progreso2));

    bomba2.appendChild(imgAct2);
    bomba2.appendChild(h1Bomba2);
    bomba2.appendChild(progreso2);
    bomba2.appendChild(button2);

    activadores.appendChild(bomba2);

    // Crear oxigenador
    let oxigenador = document.createElement('div');
    oxigenador.className = "bomba1";

    let imgAct3 = document.createElement('div');
    imgAct3.className = "img-act";

    let img3 = document.createElement('img');
    img3.src = "componentes/activadores/images-act/activador1.png"; // Imagen sin ruta
    img3.alt = "";
    imgAct3.appendChild(img3);

    let h1Oxigenador = document.createElement('h1');
    h1Oxigenador.textContent = "Oxigenador";

    let progreso3 = document.createElement('div');
    progreso3.className = "progreso";
    progreso3.textContent = "Inactivo"; // Cambiado a "Inactivo"

    let button3 = document.createElement('button');
    button3.className = "act-desc";
    button3.textContent = "activar";

    // Agregar el evento de clic al botón
    button3.addEventListener('click', () => activar_desactivar(button3, progreso3));

    oxigenador.appendChild(imgAct3);
    oxigenador.appendChild(h1Oxigenador);
    oxigenador.appendChild(progreso3);
    oxigenador.appendChild(button3);

    activadores.appendChild(oxigenador);

    return activadores;
}

export { activadores };
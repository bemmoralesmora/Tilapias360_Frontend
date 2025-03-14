import { sensores } from "../sensores/sensores.js";
import { activadores } from "../activadores/activadores.js";
import { comprar } from "../comprar/comprar.js";
import { about } from "../about/about.js";
import { section } from "../section/section.js";

function header() {
    let header = document.createElement('header');
    header.className = "header";

    let logotipo = document.createElement("div");
    logotipo.className = "logotipo";
    logotipo.innerHTML = `
    <div>
    <img src="https://static.wixstatic.com/media/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png/v1/fit/w_2500,h_1330,al_c/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png" alt="">
    </div>
    <h1>Colegio Santa Catalina Laubouré</h1>
    `;
    header.appendChild(logotipo);

    let menu = document.createElement('div');
    menu.className = "menu";

    // Crear botón HOME
    let homeButton = document.createElement('button');
    homeButton.textContent = "HOME"; // Texto en mayúscula
    homeButton.className = "home";

    // Crear botones en lugar de enlaces
    let sensorsButton = document.createElement('button');
    sensorsButton.textContent = "SENSORS"; // Texto en mayúscula
    sensorsButton.className = "sensores-a";

    let activatorsButton = document.createElement('button');
    activatorsButton.textContent = "ACTIVATORS"; // Texto en mayúscula
    activatorsButton.className = "activadores";

    let buyButton = document.createElement('button');
    buyButton.textContent = "BUY"; // Texto en mayúscula
    buyButton.className = "compra";

    let aboutButton = document.createElement('button');
    aboutButton.textContent = "ABOUT"; // Texto en mayúscula
    aboutButton.className = "about";

    // Agregar eventos de clic a los botones
    homeButton.addEventListener('click', () => {
        loadSection(section()); // Cargar la sección principal
    });

    sensorsButton.addEventListener('click', () => {
        loadSection(sensores());
    });

    activatorsButton.addEventListener('click', () => {
        loadSection(activadores());
    });

    buyButton.addEventListener('click', () => {
        loadSection(comprar());
    });

    aboutButton.addEventListener('click', () => {
        loadSection(about());
    });

    // Agregar los botones al menú
    menu.appendChild(homeButton); // Agregar el botón HOME primero
    menu.appendChild(sensorsButton);
    menu.appendChild(activatorsButton);
    menu.appendChild(buyButton);
    menu.appendChild(aboutButton);

    // Agregar el menú al header
    header.appendChild(menu);

    return header;
}

// Función para cargar dinámicamente una sección
function loadSection(section) {
    let mainContent = document.querySelector('.section'); // Selecciona el contenedor de la sección
    if (mainContent) {
        mainContent.innerHTML = ''; // Limpiar el contenido actual
        mainContent.appendChild(section); // Agregar la nueva sección
    }
}

export { header };
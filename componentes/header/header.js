import { sensores } from "../sensores/sensores.js";
import { activadores } from "../activadores/activadores.js";
import { comprar } from "../comprar/comprar.js";
import { about } from "../about/about.js";
import { section } from "../section/section.js";

function header() {
    let header = document.createElement('header');
    header.className = "header";

    // Crear el logotipo
    let logotipo = document.createElement("div");
    logotipo.className = "logotipo";

    let divImg = document.createElement('div');
    let img = document.createElement('img');
    img.src = "https://github.com/ROCKEMMA/img/blob/main/logoscl.png?raw=true";
    img.alt = "";
    divImg.appendChild(img);

    // Agregar título
    let titulo = document.createElement('h1');
    titulo.textContent = "Colegio Sta. Catalina Laubouré";

    logotipo.appendChild(divImg);
    logotipo.appendChild(titulo); // Agregar el título al logotipo
    header.appendChild(logotipo);

    // Crear el menú
    let menu = document.createElement('div');
    menu.className = "menu";

    // Crear botón HOME
    let homeButton = document.createElement('button');
    homeButton.textContent = "HOME";
    homeButton.className = "home";

    // Crear botón SENSORS
    let sensorsButton = document.createElement('button');
    sensorsButton.textContent = "SENSORS";
    sensorsButton.className = "sensores-a";

    // Crear botón ACTIVATORS
    let activatorsButton = document.createElement('button');
    activatorsButton.textContent = "ACTIVATORS";
    activatorsButton.className = "activadores";

    // Crear botón BUY
    let buyButton = document.createElement('button');
    buyButton.textContent = "BUY";
    buyButton.className = "compra";

    // Crear botón ABOUT
    let aboutButton = document.createElement('button');
    aboutButton.textContent = "ABOUT";
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
    menu.appendChild(homeButton);
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
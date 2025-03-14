// Importar las funciones desde formularios.js
import { form_donation, form_recomend } from "../formularios/formularios.js";

function section() {
    let section = document.createElement('section');
    section.className = "section";

    let bloque1 = document.createElement('div');
    bloque1.className = "bloque1";

    let titulo = document.createElement('h1');
    titulo.textContent = "TILAPIAS360";
    bloque1.appendChild(titulo);

    section.appendChild(bloque1);

    let contenedor_b1 = document.createElement('div');
    contenedor_b1.className = "contenedor-b1";
    bloque1.appendChild(contenedor_b1);

    let form_donation_btn = document.createElement('button');
    form_donation_btn.className = "form-d";
    form_donation_btn.textContent = "Donation to the project";
    contenedor_b1.appendChild(form_donation_btn);

    let form_recomend_btn = document.createElement('button');
    form_recomend_btn.className = "form-r";
    form_recomend_btn.textContent = "What do you think of our project?";
    contenedor_b1.appendChild(form_recomend_btn);

    // Event listeners para los botones
    form_donation_btn.addEventListener('click', () => {
        let donationSection = form_donation(); // Obtener el diseño del formulario de donación
        document.body.innerHTML = ''; // Limpiar el cuerpo
        document.body.appendChild(donationSection); // Mostrar el nuevo diseño
    });

    form_recomend_btn.addEventListener('click', () => {
        let recomendSection = form_recomend(); // Obtener el diseño del formulario de recomendación
        document.body.innerHTML = ''; // Limpiar el cuerpo
        document.body.appendChild(recomendSection); // Mostrar el nuevo diseño
    });

    let image3D = document.createElement('div');
    image3D.className = "image3D";
    bloque1.appendChild(image3D);

    // Crear las flechas de navegación
    let directions = ['up', 'down', 'left', 'right'];
    directions.forEach(dir => {
        let arrow = document.createElement('button');
        arrow.className = `arrow arrow-${dir}`;
        arrow.textContent = dir.toUpperCase();

        switch (dir) {
            case 'up': arrow.style.top = '-30px'; break;
            case 'down': arrow.style.bottom = '-30px'; break;
            case 'left': arrow.style.left = '-50px'; break;
            case 'right': arrow.style.right = '-50px'; break;
        }

        arrow.addEventListener('click', () => navigateCube(dir));
        image3D.appendChild(arrow);
    });

    return section;
}

let currentFace = 0;
const faces = [
    'images/front.png',
    'images/back.png',
    'images/left.png',
    'images/right.png',
    'images/top.png',
    'images/bottom.png'
];

function navigateCube(direction) {
    switch (direction) {
        case 'up': currentFace = (currentFace + 1) % faces.length; break;
        case 'down': currentFace = (currentFace - 1 + faces.length) % faces.length; break;
        case 'left': currentFace = (currentFace + 2) % faces.length; break;
        case 'right': currentFace = (currentFace - 2 + faces.length) % faces.length; break;
    }
    document.querySelector('.image3D').style.backgroundImage = `url('${faces[currentFace]}')`;
}

export { section };
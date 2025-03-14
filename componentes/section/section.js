function section() {
    let section = document.createElement('section');
    section.className = "section";

    let bloque1 = document.createElement('div');
    bloque1.className = "bloque1";
    bloque1.innerHTML = `<h1>TILAPIAS360</h1>`;
    section.appendChild(bloque1);

    let contenedor_b1 = document.createElement('div');
    contenedor_b1.className = "contenedor-b1";
    bloque1.appendChild(contenedor_b1);

    let form_donation = document.createElement('button');
    form_donation.className = "form-d";
    form_donation.textContent = "Donation to the project"
    contenedor_b1.appendChild(form_donation);

    let form_recomend = document.createElement('div');
    form_recomend.className = "form-r";
    form_recomend.textContent = "What do you think of our project?";
    contenedor_b1.appendChild(form_recomend);

    let image3D = document.createElement('div');
    image3D.className = "image3D";
    bloque1.appendChild(image3D);

    

    // Crear las flechas de navegación
    let directions = ['up', 'down', 'left', 'right'];
    directions.forEach(dir => {
        let arrow = document.createElement('button');
        arrow.className = `arrow arrow-${dir}`;
        arrow.innerText = dir.toUpperCase();

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

function section() {
    let section = document.createElement('section');
    section.className = "section";

    let bloque1 = document.createElement('div');
    bloque1.className = "bloque1";

    let titulo = document.createElement('h1');
    titulo.textContent = "TILAPIAS360";
    bloque1.appendChild(titulo);

    section.appendChild(bloque1);

    let image3D = document.createElement('div');
    image3D.className = "image3D";
    bloque1.appendChild(image3D);

    // Establecer la imagen inicial (alfrente) como fondo
    image3D.style.backgroundImage = `url('${faces[0]}')`;

    // Crear las flechas de navegación izquierda y derecha
    let directions = ['left', 'right'];
    directions.forEach(dir => {
        let arrow = document.createElement('button');
        arrow.className = `arrow arrow-${dir}`;
        arrow.textContent = dir.toUpperCase();

        switch (dir) {
            case 'left': arrow.style.left = '-50px'; break;
            case 'right': arrow.style.right = '-50px'; break;
        }

        arrow.addEventListener('click', () => navigateCube(dir));
        image3D.appendChild(arrow);
    });

    // Crear los recuadros pequeños para indicadores
    const indicators = ['Temperatura', 'Oxigeno', 'Turbidez', 'PH', 'Humedad'];
    let indicatorContainer = document.createElement('div');
    indicatorContainer.className = 'indicator-container';

    let indicatorBoxes = {}; // Objeto para guardar los elementos de cada indicador

    indicators.forEach((indicator, index) => {
        let indicatorBox = document.createElement('div');
        indicatorBox.className = 'indicator-box';
        indicatorBox.textContent = `${indicator}: #`;
        indicatorContainer.appendChild(indicatorBox);

        // Guardamos la referencia a cada indicador
        indicatorBoxes[indicator] = indicatorBox;
    });

    image3D.appendChild(indicatorContainer);

    // Función para actualizar los valores de los indicadores
    function actualizarIndicadores() {
        // URLs de las APIs
        const urls = {
            'Temperatura': 'http://45.56.113.215:3000/temperatura',
            'PH': 'http://45.56.113.215:3000/ph',
            'Humedad': 'http://45.56.113.215:3000/humedad',
            'Oxigeno': 'http://45.56.113.215:3000/oxigeno',
            'Turbidez': 'http://45.56.113.215:3000/turbidez'
        };

        // Para cada indicador, hacer un fetch y actualizar el texto
        for (let indicator of indicators) {
            console.log(urls[indicator])
            fetch(urls[indicator])
                .then(response => response.json())
                .then(data => {
                    console.log(`${indicator}:`, data); // Ver la respuesta de la API
                    
                    let value;

                    // Ajuste para el oxígeno
                    if (indicator === 'Oxigeno') {
                        value = data.oxigeno || "No disponible";  // Ajustar acceso al valor correcto
                    } else {
                        value = data[indicator.toLowerCase()] || "No disponible";
                    }

                    // Actualizar el texto del indicador
                    indicatorBoxes[indicator].textContent = `${indicator}: ${value}`;
                })
                .catch(error => {
                    console.error(`Error al obtener el valor de ${indicator}:`, error);
                    indicatorBoxes[indicator].textContent = `${indicator}: Error al cargar`;
                });
        }
    }

    // Llamamos a la función para actualizar los indicadores
    actualizarIndicadores();

    return section;
}

let currentFace = 0;
const faces = [
    'componentes/section/images/izquierda.png',
    'componentes/section/images/alfrente.png',
    'componentes/section/images/atras.png',
    'componentes/section/images/derecha.png',
    'componentes/section/images/derecha.png'
];

function navigateCube(direction) {
    switch (direction) {
        case 'left': currentFace = (currentFace + 1) % faces.length; break;  // Navegar hacia la izquierda
        case 'right': currentFace = (currentFace - 1 + faces.length) % faces.length; break;  // Navegar hacia la derecha
    }
    document.querySelector('.image3D').style.backgroundImage = `url('${faces[currentFace]}')`;
}

export { section };

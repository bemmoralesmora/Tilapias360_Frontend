function sensores() {
    let sensores = document.createElement("section");
    sensores.className = "sensores";

    // Contenedor de datos resumen
    let datos_resumen = document.createElement('div');
    datos_resumen.className = "datos";
    sensores.appendChild(datos_resumen);

    // Función para crear un sensor
    function crearSensor(imagenSrc, idValor, nombre, idRecuento) {
        let sensor = document.createElement('div');
        sensor.className = "sensor";
        sensor.style.position = "relative"; // Necesario para posicionar el ícono de alerta

        // Contenedor de la imagen
        let divImg = document.createElement('div');
        let img = document.createElement('img');
        img.src = imagenSrc; 
        img.alt = "";
        divImg.appendChild(img);

        // Valor del sensor (ahora con ID para actualización dinámica)
        let h1 = document.createElement('h1');
        h1.id = idValor;
        h1.textContent = "Cargando...";

        // Nombre del sensor
        let pNombre = document.createElement('p');
        pNombre.textContent = nombre;

        // Próximo recuento (ahora con ID para actualización dinámica)
        let pRecuento = document.createElement('p');
        pRecuento.id = idRecuento;
        pRecuento.textContent = "Próximo recuento: 10min";

        // Ícono de alerta (inicialmente oculto)
        let iconoAlerta = document.createElement('span');
        iconoAlerta.textContent = "⚠️"; // Emoji de advertencia
        iconoAlerta.style.position = "absolute"; // Posicionamiento absoluto dentro del sensor
        iconoAlerta.style.top = "5px"; // Distancia desde la parte superior
        iconoAlerta.style.right = "5px"; // Distancia desde la derecha
        iconoAlerta.style.display = "none"; // Oculto por defecto
        iconoAlerta.id = `alerta-${idValor}`; // ID único para el ícono de alerta

        // Agregar elementos al sensor
        sensor.appendChild(divImg);
        sensor.appendChild(h1);
        sensor.appendChild(pNombre);
        sensor.appendChild(pRecuento);
        sensor.appendChild(iconoAlerta); // Agregar el ícono de alerta al sensor

        return sensor;
    }

    // Creación de sensores con IDs
    let sensor_turbidez = crearSensor("componentes/sensores/images-s/sensorTur.png", "valorTurbidez", "Sensor de turbidez", "proximoRecuentoTurbidez");
    let sensor_temperatura = crearSensor("componentes/sensores/images-s/sensorTur.png", "valorTemperatura", "Sensor de temperatura", "proximoRecuentoTemperatura");
    let sensor_ph = crearSensor("componentes/sensores/images-s/sensorTur.png", "valorPH", "Sensor de pH", "proximoRecuentoPH");
    let sensor_oxigeno = crearSensor("componentes/sensores/images-s/sensorTur.png", "valorOxigeno", "Sensor de oxígeno", "proximoRecuentoOxigeno");
    let sensor_comida = crearSensor("componentes/sensores/images-s/sensorTur.png", "valorComida", "Sensor de nivel de comida", "proximoRecuentoComida");

    // Agregar sensores al contenedor
    datos_resumen.appendChild(sensor_turbidez);
    datos_resumen.appendChild(sensor_temperatura);
    datos_resumen.appendChild(sensor_ph);
    datos_resumen.appendChild(sensor_oxigeno);
    datos_resumen.appendChild(sensor_comida);

    // Función para mostrar alertas con alert()
    function mostrarAlerta(mensaje, tipo, idElemento) {
        // Mostrar alerta simple con alert()
        alert(`${tipo.toUpperCase()}: ${mensaje}`);

        // Mostrar ícono de alerta en el sensor correspondiente
        const iconoAlerta = document.querySelector(`#alerta-${idElemento}`);
        if (iconoAlerta) {
            iconoAlerta.style.display = "block"; // Mostrar el ícono
        }
    }

    function actualizarSensor(url, idElemento, nombreSensor) {
        fetch(url)
            .then(response => response.json())  // Suponiendo que la respuesta es un JSON
            .then(data => {
                const valorSensor = document.getElementById(idElemento);
                const clave = nombreSensor.toLowerCase(); // Convertimos el nombre del sensor a minúsculas
                const valor = data[clave]; // Accedemos al valor usando la clave correcta
                
                if (valorSensor) {
                    let unidad = ""; // Inicializamos la unidad como una cadena vacía
    
                    // Asignamos la unidad correspondiente según el tipo de sensor
                    if (nombreSensor === "Temperatura") {
                        unidad = "°C";
                    } else if (nombreSensor === "Turbidez") {
                        unidad = "ppm";
                    } else if (nombreSensor === "Oxigeno") {
                        unidad = "mg/L";
                    } else if (nombreSensor === "Humedad") {
                        unidad = "%"; // Asumiendo que la humedad se mide en porcentaje
                    }
    
                    // Actualizamos el contenido del elemento con la unidad correcta
                    valorSensor.textContent = `${nombreSensor}: ${valor} ${unidad}`;
                }
    
                // Verificar condiciones y mostrar alertas
                switch (nombreSensor) {
                    case "Temperatura":
                        if (valor < 10 || valor > 32) {
                            mostrarAlerta(`Temperatura mortal: ${valor}°C`, 'mortal', idElemento);
                        } else if (valor > 30 && valor <= 32) {
                            mostrarAlerta(`Temperatura de estrés: ${valor}°C`, 'estres', idElemento);
                        } else {
                            // Ocultar ícono de alerta si el valor es óptimo
                            const iconoAlerta = document.querySelector(`#alerta-${idElemento}`);
                            if (iconoAlerta) {
                                iconoAlerta.style.display = "none";
                            }
                        }
                        break;
                    case "Turbidez":
                        if (valor > 100) {
                            mostrarAlerta(`Turbidez alta: ${valor} ppm`, 'estres', idElemento);
                        } else {
                            const iconoAlerta = document.querySelector(`#alerta-${idElemento}`);
                            if (iconoAlerta) {
                                iconoAlerta.style.display = "none";
                            }
                        }
                        break;
                    case "pH":
                        if (valor < 5) {
                            mostrarAlerta(`pH mortal: ${valor}`, 'mortal', idElemento);
                        } else if (valor < 6.5 || valor > 9) {
                            mostrarAlerta(`pH fuera de rango óptimo: ${valor}`, 'estres', idElemento);
                        } else {
                            const iconoAlerta = document.querySelector(`#alerta-${idElemento}`);
                            if (iconoAlerta) {
                                iconoAlerta.style.display = "none";
                            }
                        }
                        break;
                    case "Oxigeno":
                        if (valor < 1) {
                            mostrarAlerta(`Oxígeno mortal: ${valor} mg/L`, 'mortal', idElemento);
                        } else if (valor >= 1 && valor < 3) {
                            mostrarAlerta(`Oxígeno de estrés: ${valor} mg/L`, 'estres', idElemento);
                        } else {
                            const iconoAlerta = document.querySelector(`#alerta-${idElemento}`);
                            if (iconoAlerta) {
                                iconoAlerta.style.display = "none";
                            }
                        }
                        break;
                    case "Humedad":
                        // Aquí puedes agregar condiciones para mostrar alertas relacionadas con la humedad
                        if (valor < 20 || valor > 80) {
                            mostrarAlerta(`Humedad fuera de rango: ${valor}%`, 'estres', idElemento);
                        } else {
                            const iconoAlerta = document.querySelector(`#alerta-${idElemento}`);
                            if (iconoAlerta) {
                                iconoAlerta.style.display = "none";
                            }
                        }
                        break;
                }
            })
            .catch(error => {
                console.error(`Error al obtener el valor de ${nombreSensor}:`, error);
                const valorSensor = document.getElementById(idElemento);
                if (valorSensor) {
                    valorSensor.textContent = `Error al cargar ${nombreSensor}`;
                }
            });
    }
    
    // Actualizar valores de cada sensor
    actualizarSensor('https://tilapias360.duckdns.org:3000/temperatura', 'valorTemperatura', 'Temperatura');
    actualizarSensor('https://tilapias360.duckdns.org:3000/ph', 'valorPH', 'pH');
    actualizarSensor('https://tilapias360.duckdns.org:3000/humedad', 'valorComida', 'Humedad');
    actualizarSensor('https://tilapias360.duckdns.org:3000/oxigeno', 'valorOxigeno', 'Oxigeno');
    actualizarSensor('https://tilapias360.duckdns.org:3000/turbidez', 'valorTurbidez', 'Turbidez');

    return sensores;
}

export { sensores };
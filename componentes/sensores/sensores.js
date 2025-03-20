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

        // Agregar elementos al sensor
        sensor.appendChild(divImg);
        sensor.appendChild(h1);
        sensor.appendChild(pNombre);
        sensor.appendChild(pRecuento);

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

    // Función para hacer fetch y actualizar el DOM con los valores de los sensores
    function actualizarSensor(url, idElemento, nombreSensor) {
        fetch(url)
            .then(response => response.json())  // Suponiendo que la respuesta es un JSON
            .then(data => {
                const valorSensor = document.getElementById(idElemento);
                console.log(valorSensor);
                
                if (valorSensor) {
                    valorSensor.textContent = `${nombreSensor}: ${data[nombreSensor.toLowerCase()]} ${nombreSensor === "Temperatura" ? "°C" : ""}`;
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
    actualizarSensor('https://tilapias360.duckdns.org:3000/humedad', 'valorComida', 'Nivel de comida');
    actualizarSensor('https://tilapias360.duckdns.org:3000/oxigeno', 'valorOxigeno', 'Oxigeno');
    actualizarSensor('https://tilapias360.duckdns.org:3000/turbidez', 'valorTurbidez', 'Turbidez');

    return sensores;
}

export { sensores };

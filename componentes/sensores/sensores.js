import { activa_desactivar } from "./funcionesSensores.js";

function sensores() {
    let sensores = document.createElement("section");
    sensores.className = "sensores";

    // Contenedor de datos resumen
    let datos_resumen = document.createElement('div');
    datos_resumen.className = "datos";
    sensores.appendChild(datos_resumen);

    // Función para crear un sensor
    function crearSensor(imagenSrc, valor, nombre, proximoRecuento) {
        let sensor = document.createElement('div');
        sensor.className = "sensor";

        // Contenedor de la imagen
        let divImg = document.createElement('div');
        let img = document.createElement('img');
        img.src = imagenSrc;
        img.alt = "";
        divImg.appendChild(img);

        // Valor del sensor
        let h1 = document.createElement('h1');
        h1.textContent = valor;

        // Nombre del sensor
        let pNombre = document.createElement('p');
        pNombre.textContent = nombre;

        // Próximo recuento
        let pRecuento = document.createElement('p');
        pRecuento.textContent = `Próximo recuento ${proximoRecuento}`;

        // Agregar elementos al sensor
        sensor.appendChild(divImg);
        sensor.appendChild(h1);
        sensor.appendChild(pNombre);
        sensor.appendChild(pRecuento);

        return sensor;
    }

    // Sensor de turbidez
    let sensor_turbidez = crearSensor(
        "https://cdn-icons-png.freepik.com/512/11298/11298713.png",
        "500",
        "Sensor de turbidez",
        "10min"
    );
    datos_resumen.appendChild(sensor_turbidez);

    // Sensor de temperatura
    let sensor_temperatura = crearSensor(
        "https://cdn-icons-png.freepik.com/512/11298/11298713.png",
        "500",
        "Sensor de temperatura",
        "10min"
    );
    datos_resumen.appendChild(sensor_temperatura);

    // Sensor de pH
    let sensor_ph = crearSensor(
        "https://cdn-icons-png.freepik.com/512/11298/11298713.png",
        "500",
        "Sensor de pH",
        "10min"
    );
    datos_resumen.appendChild(sensor_ph);

    // Llamar a la función para activar/desactivar
    activa_desactivar();

    return sensores;
}

export { sensores };
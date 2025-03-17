import { activa_desactivar } from "./funcionesSensores.js";
import { obtenerDatosThingSpeak } from "../../backend/backend.js";

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
    let sensor_turbidez = crearSensor("https://cdn-icons-png.freepik.com/512/11298/11298713.png", "valorTurbidez", "Sensor de turbidez", "proximoRecuentoTurbidez");
    let sensor_temperatura = crearSensor("https://cdn-icons-png.freepik.com/512/11298/11298713.png", "valorTemperatura", "Sensor de temperatura", "proximoRecuentoTemperatura");
    let sensor_ph = crearSensor("https://cdn-icons-png.freepik.com/512/11298/11298713.png", "valorPH", "Sensor de pH", "proximoRecuentoPH");
    let sensor_oxigeno = crearSensor("https://cdn-icons-png.freepik.com/512/11298/11298713.png", "valorOxigeno", "Sensor de oxígeno", "proximoRecuentoOxigeno");
    let sensor_humedad = crearSensor("https://cdn-icons-png.freepik.com/512/11298/11298713.png", "valorHumedad", "Sensor de humedad", "proximoRecuentoHumedad");

    // Agregar sensores al contenedor
    datos_resumen.appendChild(sensor_turbidez);
    datos_resumen.appendChild(sensor_temperatura);
    datos_resumen.appendChild(sensor_ph);
    datos_resumen.appendChild(sensor_oxigeno);
    datos_resumen.appendChild(sensor_humedad);

    // Variables para manejar errores en la actualización de datos
    let intentosFallidos = 0;
    const maxIntentosFallidos = 3;

    // Función para obtener y actualizar los datos de ThingSpeak
    async function actualizarDatos() {
        try {
            const datos = await obtenerDatosThingSpeak();

            if (datos) {
                document.getElementById("valorTurbidez").innerText = `${datos.turbidez} NTU`;
                document.getElementById("valorTemperatura").innerText = `${datos.temperatura}°C`;
                document.getElementById("valorPH").innerText = `pH ${datos.ph}`;
                document.getElementById("valorOxigeno").innerText = `${datos.oxigeno} mg/L`;
                document.getElementById("valorHumedad").innerText = `${datos.humedad}%`;
                intentosFallidos = 0;
            } else {
                manejarError();
            }
        } catch (error) {
            console.error("Error al obtener datos de ThingSpeak:", error);
            manejarError();
        }
    }

    
    function manejarError() {
        intentosFallidos++;
        if (intentosFallidos >= maxIntentosFallidos) {
            document.getElementById("valorTurbidez").innerText = "⚠️ Error: No hay datos";
            document.getElementById("valorTemperatura").innerText = "⚠️ Error: No hay datos";
            document.getElementById("valorPH").innerText = "⚠️ Error: No hay datos";
            document.getElementById("valorOxigeno").innerText = "⚠️ Error: No hay datos";
            document.getElementById("valorHumedad").innerText = "⚠️ Error: No hay datos";
        }
    }

    // Actualizar los datos cada 5 segundos
    setInterval(actualizarDatos, 5000);

    return sensores;
}

export { sensores };

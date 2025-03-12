import { activa_desactivar } from "./funcionesSensores.js";

function sensores() {
    let sensores = document.createElement("section");
    sensores.className = "sensores";

    // Contenedor de datos resumen
    let datos_resumen = document.createElement('div');
    datos_resumen.className = "datos";
    sensores.appendChild(datos_resumen);

    // Sensor de turbidez
    let sensor_turbidez = document.createElement('div');
    sensor_turbidez.className = "sensor";
    sensor_turbidez.innerHTML = `
        <div><img src="https://cdn-icons-png.freepik.com/512/11298/11298713.png" alt=""></div>
        <h1>500</h1>
        <p>Sensor de turbidez</p>
        <p>Próximo recuento 10min</p>
    `;
    datos_resumen.appendChild(sensor_turbidez);

    // Sensor de temperatura
    let sensor_temperatura = document.createElement('div');
    sensor_temperatura.className = "sensor";
    sensor_temperatura.innerHTML = `
        <div><img src="https://cdn-icons-png.freepik.com/512/11298/11298713.png" alt=""></div>
        <h1>500</h1>
        <p>Sensor de temperatura</p>
        <p>Próximo recuento 10min</p>
    `;
    datos_resumen.appendChild(sensor_temperatura);

    // Sensor de pH
    let sensor_ph = document.createElement('div');
    sensor_ph.className = "sensor";
    sensor_ph.innerHTML = `
        <div><img src="https://cdn-icons-png.freepik.com/512/11298/11298713.png" alt=""></div>
        <h1>500</h1>
        <p>Sensor de pH</p>
        <p>Próximo recuento 10min</p>
    `;
    datos_resumen.appendChild(sensor_ph);

    // Contenedor de la barra de progreso
    let datos_barra = document.createElement('div');
    datos_barra.className = "datos-b";
    datos_barra.innerHTML = `
        <h1>Niveles sensores</h1>
        <div class="contenedor-b">
            <div class="sensor-funcion">
                <h5>1</h5>
                <h5>sensor turbidez</h5>
                <div class="estado">En progreso</div>
                <button class="activar_desactivar">activado</button>
            </div>
            <div class="sensor-funcion">
                <h5>2</h5>
                <h5>sensor ph</h5>
                <div class="estado">En progreso</div>
                <button class="activar_desactivar">activado</button>
            </div>
            <div class="sensor-funcion">
                <h5>3</h5>
                <h5>sensor temperatura</h5>
                <div class="estado">En progreso</div>
                <button class="activar_desactivar">activado</button>
            </div>
            <div class="sensor-funcion">
                <h5>4</h5>
                <h5>bombas</h5>
                <div class="estado">Sin empezar</div>
                <button class="activar_desactivar">activado</button>
            </div>
            <div class="sensor-funcion">
                <h5>5</h5>
                <h5>motor oxigeno</h5>
                <div class="estado">En progreso</div>
                <button class="activar_desactivar">activado</button>
            </div>
        </div>
    `;
    sensores.appendChild(datos_barra);

    activa_desactivar();

    return sensores;
}

export { sensores };
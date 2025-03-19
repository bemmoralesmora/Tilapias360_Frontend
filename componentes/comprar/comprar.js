function comprar() {
    let comprar = document.createElement('section');
    comprar.className = "comprar";

    // Lista de productos (sensores y activadores, además de los nuevos productos)
    const productos = [
        {
            nombre: "Sensor de Turbidez",
            precio: "250$",
            descripcion: "Mide la turbidez del agua con precisión, ideal para acuarios y sistemas de filtración.",
            imagen: "",
            enlace: "#"
        },
        {
            nombre: "Sensor de Temperatura",
            precio: "150$",
            descripcion: "Controla la temperatura del agua en tiempo real para mantener un ambiente óptimo.",
            imagen: "https://example.com/temperatura.png",
            enlace: "#"
        },
        {
            nombre: "Sensor de Humedad",
            precio: "120$",
            descripcion: "Perfecto para monitorear la humedad en terrarios o sistemas hidropónicos.",
            imagen: "https://example.com/humedad.png",
            enlace: "#"
        },
        {
            nombre: "Sensor de Oxígeno",
            precio: "200$",
            descripcion: "Mide los niveles de oxígeno disuelto en el agua, esencial para peces y plantas acuáticas.",
            imagen: "https://example.com/oxigeno.png",
            enlace: "#"
        },
        {
            nombre: "Bomba de Agua",
            precio: "180$",
            descripcion: "Bomba eficiente para circulación de agua en acuarios y estanques.",
            imagen: "https://example.com/bomba.png",
            enlace: "#"
        },
        {
            nombre: "Filtro de Agua",
            precio: "220$",
            descripcion: "Filtro de alta capacidad para mantener el agua limpia y libre de impurezas.",
            imagen: "https://example.com/filtro.png",
            enlace: "#"
        },
        {
            nombre: "Oxigenador de Agua",
            precio: "170$",
            descripcion: "Aumenta los niveles de oxígeno en el agua, ideal para acuarios y estanques.",
            imagen: "https://example.com/oxigenador.png",
            enlace: "#"
        },
        // Nuevos productos agregados
        {
            nombre: "Cables Jumper",
            precio: "30$",
            descripcion: "Cables de conexión para proyectos electrónicos y prototipos.",
            imagen: "https://example.com/cables.png",
            enlace: "#"
        },
        {
            nombre: "Resistencias 220 Ω, 4.7 kΩ, 10 kΩ",
            precio: "15$",
            descripcion: "Resistencias de alta calidad para circuitos electrónicos.",
            imagen: "https://example.com/resistencias.png",
            enlace: "#"
        },
        {
            nombre: "LEDs Rojo, Verde y Amarillo",
            precio: "20$",
            descripcion: "LEDs en varios colores, ideales para indicadores luminosos.",
            imagen: "https://example.com/leds.png",
            enlace: "#"
        },
        {
            nombre: "Transistor MOSFET (IRF540N o IRFZ44N)",
            precio: "25$",
            descripcion: "Transistores MOSFET de alta potencia para aplicaciones electrónicas.",
            imagen: "https://example.com/transistor.png",
            enlace: "#"
        },
        {
            nombre: "Relé de 5V",
            precio: "10$",
            descripcion: "Relé para controlar circuitos de alta potencia con una señal de baja potencia.",
            imagen: "https://example.com/rele.png",
            enlace: "#"
        },
        {
            nombre: "Diodo 1N4007",
            precio: "5$",
            descripcion: "Diodo rectificador de alta calidad para protección de circuitos.",
            imagen: "https://example.com/diodo.png",
            enlace: "#"
        },
        {
            nombre: "Condensador de 100 µF",
            precio: "7$",
            descripcion: "Condensador de alta capacidad para filtros y estabilización de voltaje.",
            imagen: "https://example.com/condensador.png",
            enlace: "#"
        },
        {
            nombre: "Regulador de Voltaje LM7805",
            precio: "15$",
            descripcion: "Regulador de voltaje de 5V para proyectos electrónicos.",
            imagen: "https://example.com/regulador.png",
            enlace: "#"
        },
        {
            nombre: "Sensor de pH",
            precio: "50$",
            descripcion: "Sensor para medir el pH en acuarios y sistemas de agua.",
            imagen: "https://example.com/sensorph.png",
            enlace: "#"
        },
        {
            nombre: "Bomba de Agua",
            precio: "180$",
            descripcion: "Bomba eficiente para circulación de agua en acuarios y estanques.",
            imagen: "https://example.com/bomba.png",
            enlace: "#"
        },
        {
            nombre: "Servo Motor SG90",
            precio: "35$",
            descripcion: "Motor servo para control de movimiento en pequeños robots y proyectos.",
            imagen: "https://example.com/servo.png",
            enlace: "#"
        },
        {
            nombre: "Motor de Vibración",
            precio: "10$",
            descripcion: "Motor de vibración para aplicaciones en proyectos interactivos.",
            imagen: "https://example.com/motorvibracion.png",
            enlace: "#"
        },
        {
            nombre: "Fuente de Poder 5V o 12V",
            precio: "40$",
            descripcion: "Fuente de poder regulada para proyectos electrónicos.",
            imagen: "https://example.com/fuentepoder.png",
            enlace: "#"
        },
        {
            nombre: "Protoboard de 830 Puntos",
            precio: "15$",
            descripcion: "Protoboard de tamaño grande para pruebas y proyectos electrónicos.",
            imagen: "https://example.com/protoboard.png",
            enlace: "#"
        }
    ];

    // Crear un contenedor-com para cada producto
    productos.forEach(producto => {
        let contenedorCom = document.createElement('div');
        contenedorCom.className = "contenedor-com";

        // Crear la imagen
        let imgCom = document.createElement('div');
        imgCom.className = "img-com";
        let img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        imgCom.appendChild(img);

        // Crear la información
        let infoCom = document.createElement('div');
        infoCom.className = "info-com";

        let nombreCom = document.createElement('div');
        nombreCom.className = "nombre-com";
        nombreCom.textContent = producto.nombre;

        let precioCom = document.createElement('div');
        precioCom.className = "precio-com";
        precioCom.textContent = producto.precio;

        let textoCom = document.createElement('div');
        textoCom.className = "texto-com";
        textoCom.textContent = producto.descripcion;

        // Añadir elementos de información al contenedor de información
        infoCom.appendChild(nombreCom);
        infoCom.appendChild(precioCom);
        infoCom.appendChild(textoCom);

        // Crear el enlace
        let linkCom = document.createElement('a');
        linkCom.className = "link-com";
        linkCom.href = producto.enlace;
        linkCom.textContent = "Buy here";

        // Añadir todos los elementos al contenedor principal
        contenedorCom.appendChild(imgCom);
        contenedorCom.appendChild(infoCom);
        contenedorCom.appendChild(linkCom);

        // Añadir el contenedor principal al section
        comprar.appendChild(contenedorCom);
    });

    return comprar;
}

export { comprar };

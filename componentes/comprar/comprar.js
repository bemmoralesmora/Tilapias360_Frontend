function comprar() {
    let comprar = document.createElement('section');
    comprar.className = "comprar";

    // Lista de productos (sensores y activadores)
    const productos = [
        {
            nombre: "Sensor de Turbidez",
            precio: "250$",
            descripcion: "Mide la turbidez del agua con precisión, ideal para acuarios y sistemas de filtración.",
            imagen: "https://www.electronicajapon.com/catalog/images/PH0-14.png",
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
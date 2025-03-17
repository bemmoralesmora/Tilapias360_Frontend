function about() {
    let about = document.createElement('section');
    about.className = "about";

    // Crear la introducción
    let introduccion = document.createElement("div");
    introduccion.className = "introduction";

    let h1 = document.createElement("h1");
    h1.textContent = "Monitoreo Inteligente de Peceras para Tilapias";

    let p = document.createElement("p");
    p.textContent = "Este proyecto utiliza una Raspberry Pi junto con sensores de pH, temperatura, humedad, oxígeno y turbidez para monitorear y automatizar el cuidado de una pecera de tilapias. El sistema activa bombas, filtros y oxigenadores según los datos recopilados, y también incluye un dispensador automático de comida.";

    let a = document.createElement("a");
    a.href = "";
    a.textContent = "Ver más detalles";

    introduccion.appendChild(h1);
    introduccion.appendChild(p);
    introduccion.appendChild(a);
    about.appendChild(introduccion);

    // Crear y añadir el bloque 3
    let bloque3 = createBloque3();
    about.appendChild(bloque3);

    // Crear y añadir el bloque 4
    let bloque4 = createBloque4();
    about.appendChild(bloque4);

    // Crear y añadir el bloque 5
    let bloque5 = createBloque5();
    about.appendChild(bloque5);

    // Crear y añadir el bloque 6
    let bloque6 = createBloque6();
    about.appendChild(bloque6);

    return about;
}

// Función para crear el bloque 3
function createBloque3() {
    let bloque3 = document.createElement('section');
    bloque3.className = "bloque3";

    let imgText = document.createElement('div');
    imgText.className = "img-text";

    let img = document.createElement('img');
    img.src = "https://upload.wikimedia.org/wikipedia/commons/e/e8/Oreochromis_mossambicus.jpg"; // Imagen sin ruta
    img.alt = "";

    let lineas = document.createElement('div');
    lineas.className = "lineas";

    let tituloBq3 = document.createElement('div');
    tituloBq3.className = "titulo-bq3";

    let aboutBq3 = document.createElement('div');
    aboutBq3.className = "about-bq3";

    let lineBq3 = document.createElement('div');
    lineBq3.className = "line-bq3";
    aboutBq3.appendChild(lineBq3);
    aboutBq3.appendChild(document.createTextNode("Sobre el Proyecto"));

    let textoGBq3 = document.createElement('div');
    textoGBq3.className = "textoG-bq3";
    textoGBq3.textContent = "Automatización y Monitoreo en Tiempo Real";

    tituloBq3.appendChild(aboutBq3);
    tituloBq3.appendChild(textoGBq3);

    let textoBq3 = document.createElement('div');
    textoBq3.className = "texto-bq3";

    let p = document.createElement('p');
    p.textContent = "Este sistema permite mantener las condiciones óptimas para el crecimiento de tilapias, asegurando un ambiente saludable y reduciendo la necesidad de intervención manual.";

    let cuadroRosa = document.createElement('div');
    cuadroRosa.className = "cuadro-rosa";
    cuadroRosa.textContent = "Aprende más";

    textoBq3.appendChild(p);
    textoBq3.appendChild(cuadroRosa);

    lineas.appendChild(tituloBq3);
    lineas.appendChild(textoBq3);

    imgText.appendChild(img);
    imgText.appendChild(lineas);

    let numeros = document.createElement('div');
    numeros.className = "numeros";

    let numerosData = [
        { src: "", text: "Sensores utilizados" }, // Imagen sin ruta
        { src: "", text: "Motores controlados" }, // Imagen sin ruta
        { src: "", text: "Datos monitoreados" }, // Imagen sin ruta
        { src: "", text: "Tilapias cuidadas" } // Imagen sin ruta
    ];

    numerosData.forEach(data => {
        let numerosK = document.createElement('div');
        numerosK.className = "numerosK";

        let numerosH1 = document.createElement('div');
        numerosH1.className = "numeros-h1";
        let imgNum = document.createElement('img');
        imgNum.src = data.src; // Imagen sin ruta
        imgNum.alt = "";
        numerosH1.appendChild(imgNum);

        let numerosP = document.createElement('div');
        numerosP.className = "numeros-p";
        numerosP.textContent = data.text;

        numerosK.appendChild(numerosH1);
        numerosK.appendChild(numerosP);
        numeros.appendChild(numerosK);
    });

    bloque3.appendChild(imgText);
    bloque3.appendChild(numeros);

    return bloque3;
}

// Función para crear el bloque 4
function createBloque4() {
    let bloque4 = document.createElement('section');
    bloque4.className = "bloque4";

    let tituloBq4 = document.createElement('div');
    tituloBq4.className = "titulo-bq4";

    let miniTituloBq4 = document.createElement('div');
    miniTituloBq4.className = "mini-titulo-bq4";

    let lineBq4 = document.createElement('div');
    lineBq4.className = "line-bq4";
    miniTituloBq4.appendChild(lineBq4);
    miniTituloBq4.appendChild(document.createTextNode("Componentes"));

    let miniTitulo2Bq4 = document.createElement('div');
    miniTitulo2Bq4.className = "mini-titulo2-bq4";
    miniTitulo2Bq4.textContent = "Elementos Clave del Sistema";

    tituloBq4.appendChild(miniTituloBq4);
    tituloBq4.appendChild(miniTitulo2Bq4);

    let textoBq4 = document.createElement('div');
    textoBq4.className = "texto-bq4";

    let mini1TextoBq4 = document.createElement('div');
    mini1TextoBq4.className = "mini1-texto-bq4";
    mini1TextoBq4.textContent = "Sensores de Calidad del Agua";

    let miniTextoBq4_1 = document.createElement('div');
    miniTextoBq4_1.className = "mini-texto-bq4";
    miniTextoBq4_1.textContent = "Control de Motores";

    let miniTextoBq4_2 = document.createElement('div');
    miniTextoBq4_2.className = "mini-texto-bq4";
    miniTextoBq4_2.textContent = "Dispensador de Comida";

    textoBq4.appendChild(mini1TextoBq4);
    textoBq4.appendChild(miniTextoBq4_1);
    textoBq4.appendChild(miniTextoBq4_2);

    let imagenBq4 = document.createElement('div');
    imagenBq4.className = "imagen-bq4";

    let imagesData = [
        { src: "", title: "Sensor de pH", lessons: 16, weeks: 16, price: "$350", rating: "3.9" }, // Imagen sin ruta
        { src: "", title: "Sensor de Temperatura", lessons: 17, weeks: 16, price: "$350", rating: "3.7" }, // Imagen sin ruta
        { src: "", title: "Sensor de Oxígeno", lessons: 15, weeks: 16, price: "$350", rating: "3.8" }, // Imagen sin ruta
        { src: "", title: "Sensor de Turbidez", lessons: 19, weeks: 16, price: "$350", rating: "5.0" } // Imagen sin ruta
    ];

    imagesData.forEach(data => {
        let miniImgBq4 = document.createElement('div');
        miniImgBq4.className = "mini-img-bq4";

        let imgBq4 = document.createElement('div');
        imgBq4.className = "img-bq4";

        let img = document.createElement('img');
        img.src = data.src; // Imagen sin ruta
        img.alt = "";

        let imgTextBq4 = document.createElement('div');
        imgTextBq4.className = "img-text-bq4";

        let figma = document.createElement('div');
        figma.className = "figma";
        figma.textContent = data.title;

        let lesson = document.createElement('div');
        lesson.className = "lesson";

        let docs = document.createElement('div');
        docs.className = "docs";
        docs.textContent = `${data.lessons} Ciclos`;

        let week = document.createElement('div');
        week.className = "week";
        week.textContent = `${data.weeks} semanas`;

        lesson.appendChild(docs);
        lesson.appendChild(week);

        let estrella = document.createElement('div');
        estrella.className = "estrella";

        let dollar = document.createElement('div');
        dollar.className = "dollar";
        dollar.textContent = data.price;

        let star = document.createElement('div');
        star.className = "star";
        star.textContent = `⭐ ${data.rating}`;

        estrella.appendChild(dollar);
        estrella.appendChild(star);

        imgTextBq4.appendChild(figma);
        imgTextBq4.appendChild(lesson);
        imgTextBq4.appendChild(estrella);

        imgBq4.appendChild(img);
        imgBq4.appendChild(imgTextBq4);
        miniImgBq4.appendChild(imgBq4);
        imagenBq4.appendChild(miniImgBq4);
    });

    let rosaBq4 = document.createElement('div');
    rosaBq4.className = "rosa-bq4";
    rosaBq4.textContent = "Ver todos los componentes";

    bloque4.appendChild(tituloBq4);
    bloque4.appendChild(textoBq4);
    bloque4.appendChild(imagenBq4);
    bloque4.appendChild(rosaBq4);

    return bloque4;
}

// Función para crear el bloque 5
function createBloque5() {
    let bloque5 = document.createElement('section');
    bloque5.className = "bloque5";

    let tituloBq5 = document.createElement('div');
    tituloBq5.className = "titulo-bq5";

    let testimonials = document.createElement('div');
    testimonials.className = "testimonials";

    let lineBq5 = document.createElement('div');
    lineBq5.className = "line-bq5";
    testimonials.appendChild(lineBq5);
    testimonials.appendChild(document.createTextNode("Testimonios"));

    let studentBq5 = document.createElement('div');
    studentBq5.className = "student-bq5";
    studentBq5.textContent = "Opiniones de Usuarios";

    tituloBq5.appendChild(testimonials);
    tituloBq5.appendChild(studentBq5);

    let cuadroStudents = document.createElement('div');
    cuadroStudents.className = "cuadro-students";

    let estudiantesData = [
        { src: "", name: "Juan Pérez", role: "Acuicultor", rating: "4.9", text: "Este sistema ha revolucionado la forma en que cuido mis tilapias. ¡Altamente recomendado!" }, // Imagen sin ruta
        { src: "", name: "María Gómez", role: "Bióloga Marina", rating: "4.8", text: "La precisión de los sensores y la automatización son impresionantes." }, // Imagen sin ruta
        { src: "", name: "Carlos Ruiz", role: "Ingeniero Acuícola", rating: "5.0", text: "Un proyecto innovador que facilita el manejo de peceras a gran escala." } // Imagen sin ruta
    ];

    estudiantesData.forEach(data => {
        let estudiantesBq5 = document.createElement('div');
        estudiantesBq5.className = "estudiantes-bq5";

        let imgBq5 = document.createElement('div');
        imgBq5.className = "img-bq5";

        let img = document.createElement('img');
        img.src = data.src; // Imagen sin ruta
        img.alt = "";

        let nombreBq5 = document.createElement('div');
        nombreBq5.className = "nombre-bq5";

        let name1 = document.createElement('div');
        name1.className = "name1";
        name1.textContent = data.name;

        let name2 = document.createElement('div');
        name2.className = "name2";
        name2.textContent = data.role;

        let starBq5 = document.createElement('div');
        starBq5.className = "star-bq5";
        starBq5.textContent = `⭐${data.rating}`;

        nombreBq5.appendChild(name1);
        nombreBq5.appendChild(name2);
        nombreBq5.appendChild(starBq5);

        imgBq5.appendChild(img);
        imgBq5.appendChild(nombreBq5);

        let parrafoBq5 = document.createElement('div');
        parrafoBq5.className = "parrafo-bq5";
        parrafoBq5.textContent = data.text;

        estudiantesBq5.appendChild(imgBq5);
        estudiantesBq5.appendChild(parrafoBq5);
        cuadroStudents.appendChild(estudiantesBq5);
    });

    bloque5.appendChild(tituloBq5);
    bloque5.appendChild(cuadroStudents);

    return bloque5;
}

// Función para crear el bloque 6
function createBloque6() {
    let bloque6 = document.createElement('section');
    bloque6.className = "bloque6";

    let tituloBq6 = document.createElement('div');
    tituloBq6.className = "titulo-bq6";

    let blog = document.createElement('div');
    blog.className = "blog";

    let lineBq6 = document.createElement('div');
    lineBq6.className = "line-bq6";
    blog.appendChild(lineBq6);
    blog.appendChild(document.createTextNode("Blog"));

    let textoBq6 = document.createElement('div');
    textoBq6.className = "texto-bq6";
    textoBq6.textContent = "Artículos Recientes";

    tituloBq6.appendChild(blog);
    tituloBq6.appendChild(textoBq6);

    let cuadroImgBq6 = document.createElement('div');
    cuadroImgBq6.className = "cuadro-img-bq6";

    let blogData = [
        { src: "", user: "Ana López", date: "Feb 23, 2024", title: "Cómo optimizar el crecimiento de tilapias con tecnología" }, // Imagen sin ruta
        { src: "", user: "Pedro Martínez", date: "Feb 23, 2024", title: "Automatización en acuicultura: Beneficios y desafíos" }, // Imagen sin ruta
        { src: "", user: "Luisa Fernández", date: "Feb 23, 2024", title: "Sensores inteligentes para el cuidado de peces" } // Imagen sin ruta
    ];

    blogData.forEach(data => {
        let imgBlogBq6 = document.createElement('div');
        imgBlogBq6.className = "img-blog-bq6";

        let img1Bq6 = document.createElement('div');
        img1Bq6.className = "img1-bq6";

        let img = document.createElement('img');
        img.src = data.src; // Imagen sin ruta
        img.alt = "";

        img1Bq6.appendChild(img);

        let usuarioBq6 = document.createElement('div');
        usuarioBq6.className = "usuario-bq6";

        let user = document.createElement('div');
        user.className = "user";
        user.textContent = data.user;

        let fecha = document.createElement('div');
        fecha.className = "fecha";
        fecha.textContent = data.date;

        usuarioBq6.appendChild(user);
        usuarioBq6.appendChild(fecha);

        let lorem = document.createElement('div');
        lorem.className = "lorem";
        lorem.textContent = data.title;

        let readMore = document.createElement('div');
        readMore.className = "read-more";
        readMore.textContent = "Leer más";

        imgBlogBq6.appendChild(img1Bq6);
        imgBlogBq6.appendChild(usuarioBq6);
        imgBlogBq6.appendChild(lorem);
        imgBlogBq6.appendChild(readMore);
        cuadroImgBq6.appendChild(imgBlogBq6);
    });

    let cuadroRosaBq6 = document.createElement('div');
    cuadroRosaBq6.className = "cuadro-rosa-bq6";
    cuadroRosaBq6.textContent = "Ver todos";

    bloque6.appendChild(tituloBq6);
    bloque6.appendChild(cuadroImgBq6);
    bloque6.appendChild(cuadroRosaBq6);

    return bloque6;
}

// Exporta solo la función about
export { about };
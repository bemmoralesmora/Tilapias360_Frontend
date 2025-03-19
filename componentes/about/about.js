import { comprar } from "../comprar/comprar.js";
import { loadSection } from "../header/header.js";
import { section } from "../section/section.js";

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

function createBloque3() {
    let bloque3 = document.createElement('section');
    bloque3.className = "bloque3";

    let imgText = document.createElement('div');
    imgText.className = "img-text";

    let img = document.createElement('img');
    img.src = "https://upload.wikimedia.org/wikipedia/commons/e/e8/Oreochromis_mossambicus.jpg"; // Imagen de tilapia
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

    // Convertir el div en un botón
    let cuadroRosa = document.createElement('button');
    cuadroRosa.className = "cuadro-rosa";
    cuadroRosa.textContent = "Aprende más";

    // Agregar evento de clic para redirigir a la sección de inicio (home)
    cuadroRosa.addEventListener('click', () => {
        loadSection(section()); // Cargar la sección de inicio
    });

    textoBq3.appendChild(p);
    textoBq3.appendChild(cuadroRosa);

    lineas.appendChild(tituloBq3);
    lineas.appendChild(textoBq3);

    imgText.appendChild(img);
    imgText.appendChild(lineas);

    let numeros = document.createElement('div');
    numeros.className = "numeros";

    let numerosData = [
        { src: "https://empresasalacarta.cl/wp-content/uploads/2023/08/Sensores.webp", text: "Sensores utilizados" },
        { src: "https://novatronicec.com/wp-content/uploads/2024/06/MB102-Fuente-para-protoboard-5V-y-3.3V-MB102.png", text: "Motores controlados" },
        { src: "https://www.mouser.com.gt/images/marketingid/2022/img/127818871.png?v=032924.0127", text: "Datos monitoreados" },
        { src: "https://shopcdnpro.grainajz.com/category/81972/250/b34b05e6a7bf34562dd8c69e0322a44a/image.png", text: "Tilapias cuidadas" }
    ];

    numerosData.forEach(data => {
        let numerosK = document.createElement('div');
        numerosK.className = "numerosK";

        let numerosH1 = document.createElement('div');
        numerosH1.className = "numeros-h1";
        let imgNum = document.createElement('img');
        imgNum.src = data.src;
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

export { createBloque3 }; 

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
        { src: "https://www.mouser.com.gt/images/marketingid/2018/img/153364623.png?v=070223.0303", title: "Sensor de pH", price: "$350", rating: "3.9" },
        { src: "https://i0.wp.com/j-rpm.com/wp-content/uploads/2018/05/DHT11-300x289.png?resize=660%2C636", title: "Sensor de Temperatura", price: "$350", rating: "3.7" },
        { src: "https://www.walchem.com/wp-content/uploads/pyxisdissolvedoxygen-1-300x300.png", title: "Sensor de Oxígeno", price: "$350", rating: "3.8" },
    ];

    imagesData.forEach(data => {
        let miniImgBq4 = document.createElement('div');
        miniImgBq4.className = "mini-img-bq4";

        let imgBq4 = document.createElement('div');
        imgBq4.className = "img-bq4";

        let img = document.createElement('img');
        img.src = data.src;
        img.alt = "";

        let imgTextBq4 = document.createElement('div');
        imgTextBq4.className = "img-text-bq4";

        let figma = document.createElement('div');
        figma.className = "figma";
        figma.textContent = data.title;

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
        imgTextBq4.appendChild(estrella);

        imgBq4.appendChild(img);
        imgBq4.appendChild(imgTextBq4);
        miniImgBq4.appendChild(imgBq4);
        imagenBq4.appendChild(miniImgBq4);
    });

    // Convertir el div en un botón
    let rosaBq4 = document.createElement('button');
    rosaBq4.className = "rosa-bq4";
    rosaBq4.textContent = "Ver todos los componentes";

    // Agregar evento de clic para redirigir a la sección de compra
    rosaBq4.addEventListener('click', () => {
        loadSection(comprar()); // Cargar la sección de compra
    });

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
    studentBq5.textContent = "Experiencia estudiantes";

    tituloBq5.appendChild(testimonials);
    tituloBq5.appendChild(studentBq5);

    let cuadroStudents = document.createElement('div');
    cuadroStudents.className = "cuadro-students";

    let estudiantesData = [
        { 
            src: "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png", 
            name: "Gabriel López", 
            role: "Estudiante de Computación", 
            rating: "4.7", 
            text: "Me encargué de trabajar en el material designado al prototipo, asegurándome de que cada componente fuera intuitivo y fácil de usar, lo que permitió un diseño efectivo para el proyecto." 
        }, 
        { 
            src: "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png", 
            name: "José María", 
            role: "Estudiante de Computación", 
            rating: "4.9", 
            text: "Mi responsabilidad fue desarrollar el circuito y el backend del proyecto. Gracias a la implementación de una arquitectura robusta, logramos una plataforma eficiente y funcional." 
        }, 
        { 
            src: "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png", 
            name: "Brian Morales", 
            role: "Estudiante de Computación", 
            rating: "5.0", 
            text: "Me encargué de la programación del frontend. Trabajé en la creación de una interfaz amigable y atractiva, asegurando que la experiencia de usuario fuera lo más fluida posible." 
        }
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
        { 
            src: "https://pharmaq-cdn-e9g8bdeng6hhcsee.z01.azurefd.net/media/2zdbo42d/niletilapia.jpg?width=1200&height=800&v=1d6f61f34f1f6e0", 
            user: "Portal Amelica", 
            date: "Feb 23, 2024", 
            title: "Cómo optimizar el crecimiento de tilapias con tecnología", 
            link: "https://portal.amelica.org/ameli/journal/129/1292407004/html/?utm_source=chatgpt.com"
        },
        { 
            src: "https://media.istockphoto.com/id/1341577178/es/vector/ilustración-de-granja-flotante.jpg?s=612x612&w=0&k=20&c=evCUWMNgHkdgXFZxwK0i8ttKD0RQ2qrCCludp9TBXr0=", 
            user: "ResearchGate", 
            date: "Feb 23, 2024", 
            title: "Automatización en acuicultura: Beneficios y desafíos", 
            link: "https://www.researchgate.net/publication/384303292_Sistema_de_Monitoreo_Automatizado_de_Variables_Ambientales_en_un_Cultivo_Acuaponico_de_Tilapia_y_Lechuga?utm_source=chatgpt.com"
        },
        { 
            src: "https://fnb.tech/wp-content/uploads/2025/02/Fish-Monitoring-System.jpg", 
            user: "Digepesca SAG Honduras", 
            date: "Feb 23, 2024", 
            title: "Sensores inteligentes para el cuidado de peces", 
            link: "https://www.digepesca.sag.gob.hn/wp-content/uploads/2022/12/Manual-de-Principales-Enfermedades-en-el-Cultivo-de-Tilapia.pdf?utm_source=chatgpt.com"
        },
        { 
            src: "https://www.gob.mx/cms/uploads/article/main_image/8394/Drones_acuacultura.jpg", 
            user: "Universidad de Colima", 
            date: "Feb 23, 2024", 
            title: "Monitoreo avanzado con drones en piscicultura", 
            link: "https://www.ucol.mx/noticias/nota_13759.htm?utm_source=chatgpt.com"
        },
        { 
            src: "https://www.globalseafood.org/wp-content/uploads/2018/04/DAVIS-Pic-1-960x566.jpg", 
            user: "Scribd", 
            date: "Feb 23, 2024", 
            title: "Sistemas automatizados para la alimentación de tilapias", 
            link: "https://www.scribd.com/document/475891481/propuesta-final-docx?utm_source=chatgpt.com"
        }
    ];

    // Mostrar solo los primeros 4 artículos inicialmente
    let initialArticles = blogData.slice(0, 4);

    initialArticles.forEach(data => {
        let imgBlogBq6 = createArticle(data);
        cuadroImgBq6.appendChild(imgBlogBq6);
    });

    let cuadroRosaBq6 = document.createElement('div');
    cuadroRosaBq6.className = "cuadro-rosa-bq6";
    cuadroRosaBq6.textContent = "Ver todos";

    // Evento para mostrar todos los artículos al hacer clic en "Ver todos"
    cuadroRosaBq6.addEventListener('click', () => {
        cuadroImgBq6.innerHTML = ""; // Limpiar los artículos actuales
        blogData.forEach(data => {
            let imgBlogBq6 = createArticle(data);
            cuadroImgBq6.appendChild(imgBlogBq6);
        });
        cuadroRosaBq6.style.display = "none"; // Ocultar el botón "Ver todos"
    });

    bloque6.appendChild(tituloBq6);
    bloque6.appendChild(cuadroImgBq6);
    bloque6.appendChild(cuadroRosaBq6);

    return bloque6;
}

// Función para crear un artículo
function createArticle(data) {
    let imgBlogBq6 = document.createElement('div');
    imgBlogBq6.className = "img-blog-bq6";

    let img1Bq6 = document.createElement('div');
    img1Bq6.className = "img1-bq6";

    let img = document.createElement('img');
    img.src = data.src;
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

    let readMore = document.createElement('a');
    readMore.className = "read-more";
    readMore.textContent = "Leer más";
    readMore.href = data.link;
    readMore.target = "_blank";

    imgBlogBq6.appendChild(img1Bq6);
    imgBlogBq6.appendChild(usuarioBq6);
    imgBlogBq6.appendChild(lorem);
    imgBlogBq6.appendChild(readMore);

    return imgBlogBq6;
}

// Exporta solo la función about
export { about };
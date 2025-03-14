function footer() {
    let footer = document.createElement('footer');
    footer.className = "footer";

    // Crear el contenedor de datos del usuario
    let datos_user = document.createElement('div');
    datos_user.className = "datos_user";

    // Crear el logotipo principal
    let logotipo_f1 = document.createElement('div');
    logotipo_f1.className = "logotipo-f";

    let div_l1 = document.createElement('div');
    div_l1.className = "div-l";

    let img1 = document.createElement('img');
    img1.src = "https://png.pngtree.com/png-clipart/20230429/original/pngtree-fish-vector-illustration-design-png-image_9123513.png";
    img1.alt = "Logo";
    div_l1.appendChild(img1);

    let titulo = document.createElement('h1');
    titulo.textContent = "TILAPIAS360";
    logotipo_f1.appendChild(div_l1);
    logotipo_f1.appendChild(titulo);

    datos_user.appendChild(logotipo_f1);

    // Crear el segundo logotipo
    let logotipo_f2 = document.createElement('div');
    logotipo_f2.className = "logotipo-f";

    let div_l2 = document.createElement('div');
    div_l2.className = "div-l";

    let img2 = document.createElement('img');
    img2.src = "https://4h.unl.edu/sites/unl.edu.ianr.extension.4h/files/styles/4_3_720x540/public/media/image/logo-FLL-Challenge.png?itok=uYAXxX2j";
    img2.alt = "Logo";
    div_l2.appendChild(img2);

    let div_l3 = document.createElement('div');
    div_l3.className = "div-l";

    let img3 = document.createElement('img');
    img3.src = "https://static.wixstatic.com/media/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png/v1/fit/w_2500,h_1330,al_c/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png";
    img3.alt = "";
    div_l3.appendChild(img3);

    logotipo_f2.appendChild(div_l2);
    logotipo_f2.appendChild(div_l3);

    datos_user.appendChild(logotipo_f2);
    footer.appendChild(datos_user);

    // Crear el contenedor del footer
    let contenedor_footer = document.createElement('div');
    contenedor_footer.className = "contenedor-f";
    footer.appendChild(contenedor_footer);

    // Crear la sección de repositorios
    let repos = document.createElement('div');
    repos.className = "repos";

    let repos_titulo = document.createElement('h2');
    repos_titulo.textContent = "Repocitorios";
    repos.appendChild(repos_titulo);

    let caja1 = document.createElement('div');
    caja1.className = "caja";

    let enlace1 = document.createElement('a');
    enlace1.href = "";

    let img4 = document.createElement('img');
    img4.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
    img4.alt = "";
    enlace1.appendChild(img4);

    let texto1 = document.createElement('p');
    texto1.textContent = "Frontend";
    caja1.appendChild(enlace1);
    caja1.appendChild(texto1);

    repos.appendChild(caja1);

    let caja2 = document.createElement('div');
    caja2.className = "caja";

    let enlace2 = document.createElement('a');
    enlace2.href = "";

    let img5 = document.createElement('img');
    img5.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
    img5.alt = "";
    enlace2.appendChild(img5);

    let texto2 = document.createElement('p');
    texto2.textContent = "Backend";
    caja2.appendChild(enlace2);
    caja2.appendChild(texto2);

    repos.appendChild(caja2);
    contenedor_footer.appendChild(repos);

    // Crear la sección de redes sociales
    let producto = document.createElement('div');
    producto.className = "producto";

    let producto_titulo = document.createElement('h2');
    producto_titulo.textContent = "Redes sociales";
    producto.appendChild(producto_titulo);

    let caja3 = document.createElement('div');
    caja3.className = "caja";

    let enlace3 = document.createElement('a');
    enlace3.href = "";

    let img6 = document.createElement('img');
    img6.src = "https://1000marcas.net/wp-content/uploads/2019/11/Instagram-Logo.png";
    img6.alt = "";
    enlace3.appendChild(img6);

    let texto3 = document.createElement('p');
    texto3.textContent = "Instagram";
    caja3.appendChild(enlace3);
    caja3.appendChild(texto3);

    producto.appendChild(caja3);

    let caja4 = document.createElement('div');
    caja4.className = "caja";

    let enlace4 = document.createElement('a');
    enlace4.href = "";

    let img7 = document.createElement('img');
    img7.src = "https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png";
    img7.alt = "";
    enlace4.appendChild(img7);

    let texto4 = document.createElement('p');
    texto4.textContent = "Facebook";
    caja4.appendChild(enlace4);
    caja4.appendChild(texto4);

    producto.appendChild(caja4);
    contenedor_footer.appendChild(producto);

    // Crear la sección de información
    let informacion = document.createElement('div');
    informacion.className = "informacion";

    let informacion_titulo = document.createElement('h2');
    informacion_titulo.textContent = "Acerca de nosotros";
    informacion.appendChild(informacion_titulo);

    let enlace5 = document.createElement('a');
    enlace5.href = "";
    enlace5.textContent = "Ubicacion";
    informacion.appendChild(enlace5);

    let enlace6 = document.createElement('a');
    enlace6.href = "";
    enlace6.textContent = "Colegio";
    informacion.appendChild(enlace6);

    let enlace7 = document.createElement('a');
    enlace7.href = "";
    enlace7.textContent = "Sitio web";
    informacion.appendChild(enlace7);

    let enlace8 = document.createElement('a');
    enlace8.href = "";
    enlace8.textContent = "Contactanos";
    informacion.appendChild(enlace8);

    contenedor_footer.appendChild(informacion);

    // Crear la línea blanca al final del footer
    let lineaBlanca = document.createElement('div');
    lineaBlanca.className = "linea-blanca";
    footer.appendChild(lineaBlanca);

    return footer;
}

export { footer };
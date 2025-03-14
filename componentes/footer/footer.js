function footer() {
    let footer = document.createElement('footer');
    footer.className = "footer";

    let datos_user = document.createElement('div');
    datos_user.className = "datos_user";
    datos_user.innerHTML = `
        <div class="logotipo-f">
            <div class="div-l">
                <img src="https://png.pngtree.com/png-clipart/20230429/original/pngtree-fish-vector-illustration-design-png-image_9123513.png" alt="Logo">
            </div>
            <h1>TILAPIAS360</h1>
        </div>
        <div class="logotipo-f">
            <div class="div-l">
                <img src="https://4h.unl.edu/sites/unl.edu.ianr.extension.4h/files/styles/4_3_720x540/public/media/image/logo-FLL-Challenge.png?itok=uYAXxX2j" alt="Logo">
            </div>
            <div class="div-l">
                <img src="https://static.wixstatic.com/media/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png/v1/fit/w_2500,h_1330,al_c/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png" alt="">
            </div>
        </div>
                
    `;
    footer.appendChild(datos_user);

    let contenedor_footer = document.createElement('div')
    contenedor_footer.className = "contenedor-f";
    footer.appendChild(contenedor_footer);

    let repos = document.createElement('div');
    repos.className = "repos";
    repos.innerHTML = `
        <h2>Repocitorios</h2>
        <div class="caja">
            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""></a>
            <p>Frontend</p>
        </div>
        <div class="caja">
            <a href=""><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""></a>
            <p>Backend</p>
        </div>
    `;
    contenedor_footer.appendChild(repos);

    let producto = document.createElement('div');
    producto.className = "producto";
    producto.innerHTML =  `
        <h2>Redes sociales</h2>
        <div class="caja">
            <a href=""><img src="https://1000marcas.net/wp-content/uploads/2019/11/Instagram-Logo.png" alt=""></a>
            <p>Instagram</p>
        </div>
        <div class="caja">
            <a href=""><img src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt=""></a>
            <p>Facebook</p>
        </div>
    
    `; // Aquí puedes agregar contenido si es necesario
    contenedor_footer.appendChild(producto);

    let informacion = document.createElement('div');
    informacion.className = "informacion";
    informacion.innerHTML = `
        <h2>Acerca de nosotros</h2>
        <a href="">Instalaciones</a>    
        <a href="">Ubicacion</a>
        <a href="">Colegio</a>
        <a href="">Sitio web</a>
        <a href="">Contactanos</a>


    `; // Aquí puedes agregar contenido si es necesario
    contenedor_footer.appendChild(informacion);

    // Agregar la línea blanca al final del footer
    let lineaBlanca = document.createElement('div');
    lineaBlanca.className = "linea-blanca";
    footer.appendChild(lineaBlanca);

    return footer;
}

export { footer };
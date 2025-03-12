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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <div class="redes">
            <a href="https://github.com/bemmoralesmora/Tilapias360_Frontend"><img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" alt=""></a>
            <a href=""><img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" alt=""></a>
            <a href=""><img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" alt=""></a>
            <a href=""><img src="https://gaiadivers.mx/wp-content/uploads/2019/04/instagram-gris.png" alt=""></a>
        </div>
    `;
    footer.appendChild(datos_user);

    let contenedor_footer = document.createElement('div')
    contenedor_footer.className = "contenedor-f";
    footer.appendChild(contenedor_footer);

    let producto = document.createElement('div');
    producto.className = "producto";
    producto.innerHTML =  `
        <h2>Proyecto</h2>
        <a href="">Descargalo</a>
        <a href="">Circuitos</a>
        <a href="">Sensores</a>
    `; // Aquí puedes agregar contenido si es necesario
    contenedor_footer.appendChild(producto);

    let informacion = document.createElement('div');
    informacion.className = "informacion";
    informacion.innerHTML = `
        <h2>Acerca</h2>
        <a href="">Sobre nosotros</a>
        <a href="">Ubicacion</a>
        <a href="">Colegio</a>
    `; // Aquí puedes agregar contenido si es necesario
    contenedor_footer.appendChild(informacion);

    return footer;
}

export { footer };
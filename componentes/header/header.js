function header(){
    let header = document.createElement('header');
    header.className = "header";

    let logotipo = document.createElement("div");
    logotipo.className = "logotipo";
    logotipo.innerHTML = `
    <div><img src="https://static.wixstatic.com/media/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png/v1/fit/w_2500,h_1330,al_c/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png" alt=""></div>
    <h1>Colegio Santa Catalina Laubour</h1>
    `;
    header.appendChild(logotipo);

    let nombreProyecto = document.createElement("h1");
    nombreProyecto.className = "nombre";
    nombreProyecto.innerHTML = `
    <h2>proyecto</h2>
    <h1>TILAPIAS360</h1>
    `;
    header.appendChild(nombreProyecto);

    let logo = document.createElement('div');
    logo.className = "about";
    logo.innerHTML = `
    <img src="https://png.pngtree.com/png-clipart/20230429/original/pngtree-fish-vector-illustration-design-png-image_9123513.png" alt="">
    `;
    header.appendChild(logo);

    return header;
}

export {header};
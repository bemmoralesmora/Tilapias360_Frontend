function form_donation() {
    let form_donation = document.createElement('section');
    form_donation.className = "donaciones";

    // Crear el logotipo y el título
    let logoDiv = document.createElement('div');
    logoDiv.className = "logo-donation";

    let divImg = document.createElement('div');
    let img = document.createElement('img');
    img.src = "https://static.wixstatic.com/media/d1b317_9cd309d010cf405ca0a70e15aed80dff~mv2.png/v1/crop/x_293,y_282,w_2144,h_825/fill/w_520,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LogoSCL-13.png";
    img.alt = "Logotipo Colegio Sta. Catalina Laubouré";
    divImg.appendChild(img);

    logoDiv.appendChild(divImg);

    // Resto del código
    let contenedorDiv = document.createElement('div');
    contenedorDiv.className = "contenedor-donation";

    let contactHeading = document.createElement('h2');
    contactHeading.textContent = "Contact Form";

    let infoAdicionalDiv = document.createElement('div');
    infoAdicionalDiv.className = "info-adicional";

    let ubicacionHeading = document.createElement('h3');
    ubicacionHeading.textContent = "Ubicacion";

    let ubicacionPara = document.createElement('p');
    ubicacionPara.textContent = "Cdad. de Guatemala 4-78 zona 1 Mixco, km 16.5 carretera Interamericana";

    let correoHeading = document.createElement('h3');
    correoHeading.textContent = "correo";

    let correoPara = document.createElement('p');
    correoPara.textContent = "PBX: 2314-0909 Whatsapp: 3215-0777";

    infoAdicionalDiv.appendChild(ubicacionHeading);
    infoAdicionalDiv.appendChild(ubicacionPara);
    infoAdicionalDiv.appendChild(correoHeading);
    infoAdicionalDiv.appendChild(correoPara);

    let redesSocialesDiv = document.createElement('div');
    redesSocialesDiv.className = "redes_sociales-f";

    let socialLink1 = document.createElement('a');
    socialLink1.href = "";
    let socialImg1 = document.createElement('img');
    socialImg1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png";
    socialImg1.alt = "";
    socialLink1.appendChild(socialImg1);

    let socialLink2 = document.createElement('a');
    socialLink2.href = "";
    let socialImg2 = document.createElement('img');
    socialImg2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png";
    socialImg2.alt = "";
    socialLink2.appendChild(socialImg2);

    let socialLink3 = document.createElement('a');
    socialLink3.href = "";
    let socialImg3 = document.createElement('img');
    socialImg3.src = "https://images.icon-icons.com/3261/PNG/512/github_logo_icon_206752.png";
    socialImg3.alt = "";
    socialLink3.appendChild(socialImg3);

    redesSocialesDiv.appendChild(socialLink1);
    redesSocialesDiv.appendChild(socialLink2);
    redesSocialesDiv.appendChild(socialLink3);

    contenedorDiv.appendChild(contactHeading);
    contenedorDiv.appendChild(infoAdicionalDiv);
    contenedorDiv.appendChild(redesSocialesDiv);

    let contactContainerDiv = document.createElement('div');
    contactContainerDiv.className = "contact-container";

    let contactForm = document.createElement('form');
    contactForm.id = "contactForm";

    let nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.placeholder = "Name";
    nameInput.required = true;

    let emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;

    let messageTextarea = document.createElement('textarea');
    messageTextarea.id = "message";
    messageTextarea.name = "message";
    messageTextarea.placeholder = "Message";
    messageTextarea.required = true;

    let submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";

    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageTextarea);
    contactForm.appendChild(submitButton);

    contactContainerDiv.appendChild(contactForm);

    form_donation.appendChild(logoDiv);
    form_donation.appendChild(contenedorDiv);
    form_donation.appendChild(contactContainerDiv);

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        // Obtener los valores del formulario
        let name = formData.get('name');
        let email = formData.get('email');
        let message = formData.get('message');

        // Correo fijo (tu dirección de Gmail)
        let recipient = "bemorales@scl.edu.gt";

        // Crear el enlace mailto
        let subject = `Contact from ${name}`;
        let body = `Message: ${message}\n\nFrom: ${name} (${email})`;
        let mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Abrir el cliente de correo
        window.location.href = mailtoLink;

        // Limpiar el formulario
        contactForm.reset();

        // Mostrar alerta de envío exitoso
        alert("Envío exitoso. Serás redirigido a tu cliente de correo.");
    });

    return form_donation;
}

export { form_donation };

function form_recomend() {
    let form_recomend = document.createElement('section');
    form_recomend.className = "recomendaciones";

    // Crear el logotipo y el título
    let logoDiv = document.createElement('div');
    logoDiv.className = "logo-recomend"; // Cambiado a logo-recomend

    let divImg = document.createElement('div');
    let img = document.createElement('img');
    img.src = "https://static.wixstatic.com/media/d1b317_9cd309d010cf405ca0a70e15aed80dff~mv2.png/v1/crop/x_293,y_282,w_2144,h_825/fill/w_520,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LogoSCL-13.png";
    img.alt = "Logotipo Colegio Sta. Catalina Laubouré";
    divImg.appendChild(img);

    logoDiv.appendChild(divImg);

    // Agregar el logotipo al section
    form_recomend.appendChild(logoDiv);

    // Crear el contenedor del formulario
    let contactContainerDiv = document.createElement('div');
    contactContainerDiv.className = "contact-container-recomend"; // Cambiado a contact-container-recomend

    // Crear el formulario
    let contactForm = document.createElement('form');
    contactForm.id = "contactFormRecomend"; // Cambiado a contactFormRecomend

    // Campo para el nombre
    let nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.id = "nameRecomend"; // Cambiado a nameRecomend
    nameInput.name = "name";
    nameInput.placeholder = "Name";
    nameInput.required = true;

    // Campo para el correo electrónico
    let emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.id = "emailRecomend"; // Cambiado a emailRecomend
    emailInput.name = "email";
    emailInput.placeholder = "Your  Email";
    emailInput.required = true;

    // Campo para el mensaje
    let messageTextarea = document.createElement('textarea');
    messageTextarea.id = "messageRecomend"; // Cambiado a messageRecomend
    messageTextarea.name = "message";
    messageTextarea.placeholder = "Escribe tu opinion";
    messageTextarea.required = true;

    // Botón de enviar
    let submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";

    // Agregar campos al formulario
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageTextarea);
    contactForm.appendChild(submitButton);

    // Agregar el formulario al contenedor
    contactContainerDiv.appendChild(contactForm);

    // Agregar el contenedor al section
    form_recomend.appendChild(contactContainerDiv);

    // Manejar el evento de envío del formulario
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        // Obtener los valores del formulario
        let name = formData.get('name');
        let email = formData.get('email');
        let message = formData.get('message');

        // Correo fijo (tu dirección de Gmail)
        let recipient = "bemorales@scl.edu.gt";

        // Crear el enlace mailto
        let subject = `Recommendation from ${name}`;
        let body = `Message: ${message}\n\nFrom: ${name} (${email})`;
        let mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Abrir el cliente de correo
        window.location.href = mailtoLink;

        // Limpiar el formulario
        contactForm.reset();

        // Mostrar alerta de envío exitoso
        alert("Envío exitoso. Serás redirigido a tu cliente de correo.");
    });

    return form_recomend;
}

export { form_recomend };
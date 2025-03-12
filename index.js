import { header } from "./componentes/header/header.js";
import { sensores } from "./componentes/sensores/sensores.js";
import { footer } from "./componentes/footer/footer.js";
import { activa_desactivar } from "./componentes/sensores/funcionesSensores.js";

function cargarDom (){
    let dom = document.querySelector("#root");
    dom.className = "dom";

    dom.appendChild(header());
    dom.appendChild(sensores());
    dom.appendChild(footer())

    activa_desactivar()
}

cargarDom();

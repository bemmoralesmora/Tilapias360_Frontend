import { header } from "./componentes/header/header.js";
import { section } from "./componentes/section/section.js";
import { footer } from "./componentes/footer/footer.js";

import { sensores } from "./componentes/sensores/sensores.js";

function cargarDom (){
    let dom = document.querySelector("#root");
    dom.className = "dom";

    dom.appendChild(header());
    dom.appendChild(section())
    dom.appendChild(footer())

}   

cargarDom();

async function obtenerDatosThingSpeak() {
    const CANALES = {
        turbidez: { id: "2875748 ", key: "0QOPQV2OY7DOWV4Z" },
        temperatura: { id: "2867183", key: "5XA1LZK32NVUYFJ2" },
        ph: { id: "2875743/", key: "VNCPGPEVBNPNPP8Z" }
    };

    try {
        
        let respuestas = await Promise.all([
            fetch(`https://api.thingspeak.com/channels/${CANALES.turbidez.id}/feeds.json?api_key=${CANALES.turbidez.key}&results=1`),
            fetch(`https://api.thingspeak.com/channels/${CANALES.temperatura.id}/feeds.json?api_key=${CANALES.temperatura.key}&results=1`),
            fetch(`https://api.thingspeak.com/channels/${CANALES.ph.id}/feeds.json?api_key=${CANALES.ph.key}&results=1`)
        ]);

        let datos = await Promise.all(respuestas.map(res => res.json()));

        
        return {
            turbidez: datos[0].feeds.length > 0 ? datos[0].feeds[0].field1 : "N/A",
            temperatura: datos[1].feeds.length > 0 ? datos[1].feeds[0].field1 : "N/A",
            ph: datos[2].feeds.length > 0 ? datos[2].feeds[0].field1 : "N/A"
        };

    } catch (error) {
        console.error("Error al obtener datos de ThingSpeak:", error);
        return { turbidez: "Error", temperatura: "Error", ph: "Error" };
    }
}


export { obtenerDatosThingSpeak };

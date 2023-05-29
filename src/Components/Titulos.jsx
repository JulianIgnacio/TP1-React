import { useState } from "react";
const Mensaje = () => {
    
    const [nuevoMensaje,setMessaje] = useState (0);

    return(
        <section>
            <h1>{nuevoMensaje}</h1>
            <button onClick={() => {setMessaje(nuevoMensaje+"from changed state")}}>click me!</button>
        </section>
    );
};

export default Mensaje;
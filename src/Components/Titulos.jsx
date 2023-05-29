import { useState } from "react";
const Mensaje = () => {
    
    let [nuevoMensaje,setMessaje] = useState ('Hello my friend');
    
    return(
        <section>
            <h1>{nuevoMensaje}</h1>
            <button onClick={() => {setMessaje(nuevoMensaje+"(from changed state)!")}}>click me!</button>
        </section>
    );
};

export default Mensaje;
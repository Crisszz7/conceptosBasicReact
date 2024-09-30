// 1. Crear un componente funcional de saludo

import React from "react";


const Saludar = (props) => {
    return(
        <h1>Hola amig@ {props.nombre}</h1> 
    );
};

const App = () => {
    return (
        <div>
            <Saludar nombre ="Tian" />
        </div>
    );
};

export default App;

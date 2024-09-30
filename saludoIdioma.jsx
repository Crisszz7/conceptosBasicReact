import React from "react";


const Saludar = (props) => {
    const {nombre, idioma} = props;
    let mensaje ;
    switch (idioma) {
        case 'Es':
            mensaje = `hola ${nombre}`;
            break;
        case 'En':
            mensaje = `Hello ${nombre}`;
            break;
        case 'Fr':
            mensaje = `Bonjour ${nombre}`;
            break;
        default:
            mensaje =  `???${nombre}` ;
            break;
    }
    return(
        <h1> {mensaje}</h1>
    );
};

const App = () => {
    return (
        <div>
            <Saludar nombre ="Tian" idioma = "Es"/>
            <Saludar nombre = "Sara" idioma = "En"/>
            <Saludar nombre = "Pedro" idioma = "Fr"/>
        </div>
    );
};

export default App;







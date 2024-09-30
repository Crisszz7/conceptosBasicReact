import React from "react";
import "./index.css"

const Contenedor = (props) =>{
    return(
        <div >
            <p> {props.title}</p>
            <div>{props.children}</div>
        </div>
    );
}


function App() {
    return(
        <div className="container">
            <Contenedor >
                <p title = "Titulo del contendor"></p>
                <p> Uno </p>
                <p> Dos </p>
                <p> Informacion del contendor</p>
            </Contenedor>
        </div>
    )
}

export default App;
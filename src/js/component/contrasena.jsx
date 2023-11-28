import React, { useState } from "react";

const Contraseña = () => {
    const [contraseñaGenerada, setContraseñaGenerada] = useState("");
    const [longitud, setLongitud] = useState(9);

    const letras = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "!", "@", "#", "$", "%", "&", "*", "+", "-"
    ];

    function generarContraseña() {

        let nuevaContraseña = "";

        for (let i = 0; i < longitud; i++) {
            const mezclaLetras = letras[Math.floor(Math.random() * letras.length)];
            nuevaContraseña += mezclaLetras;
        }

        setContraseñaGenerada(nuevaContraseña);
    }

    function longitudContraseña(e) {
        const valor = parseInt(e.target.value);
        setLongitud(valor);
    }

    return (
        <>

<div className="container text-center">
  <div className="row m-5">
    
    <div className="h- p-5 text-bg-dark col-7  rounded-5">
                <h2 className="display-6">Generador de contraseña</h2>
                <p className="m-3">Selecciona la longitud de tu contraseña y pulsa el botón de Generar</p>
                <input
                    type="number"
                    onChange={(e) => longitudContraseña(e)}
                    min={2}
                    max={50}
                    placeholder="9"/>
                <label htmlFor=""><p className="mx-2 fw-lighter m-5">(Longitud de tu contraseña)</p></label>
                <hr />
                <button onClick={generarContraseña} className="btn btn-outline-light" type="button">Generar</button>
            </div>
   
    
    <div className="col-5 order-4">
                <div className="h-100 p-5 bg-body-tertiary mt-5">
                    <h2>Tu contraseña es:</h2>
                    <h4>{contraseñaGenerada}</h4>

                </div>
            </div>
   
    
  </div>
</div>








           



           
        </>
    );
};

export default Contraseña;

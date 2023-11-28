import React, { useState } from "react";

const Contraseña = () => {
    const [contraseñaGenerada, setContraseñaGenerada] = useState("");
    const [longitud , setLongitud] = useState(9);

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
            <h1>Generador de contraseña</h1>
            <hr />
            <br />
            <input 
            type="number"
            onChange={(e)=> longitudContraseña(e)}
             /> 
            <label htmlFor="">Longitud de tu contraseña</label>
            <br />
            <button onClick={generarContraseña}>Generar</button>
            <br />
            <h3>Tu contraseña es: <p>{contraseñaGenerada}</p></h3>
        </>
    );
};

export default Contraseña;

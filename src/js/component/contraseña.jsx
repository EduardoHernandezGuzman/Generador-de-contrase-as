import React, { useState } from "react";

const Contraseña = () => {
    const [contraseñaGenerada, setContraseñaGenerada] = useState("");

    const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function generarContraseña() {
        let nuevaContraseña = "";

        for (let i = 0; i < 9; i++) {
            const mezclaLetras = letras[Math.floor(Math.random() * letras.length)];
            nuevaContraseña += mezclaLetras;
        }

        setContraseñaGenerada(nuevaContraseña);
    }

    return (
        <>
            <h1>Generador de contraseña</h1>
            <hr />
            <br />
            <button onClick={generarContraseña}>Generar</button>
            <br />
            <h3>Tu contraseña es: <p>{contraseñaGenerada}</p></h3>
        </>
    );
};

export default Contraseña;

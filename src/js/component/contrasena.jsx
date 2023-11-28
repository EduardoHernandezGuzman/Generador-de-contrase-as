import React, { useState } from "react";

const Contraseña = () => {
    const [contraseñaGenerada, setContraseñaGenerada] = useState("");
    const [valor, setValor] = useState(9);

    const caracteres = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "!", "@", "#", "$", "%", "&", "*", "+", "-"
    ];


    function generarContraseña() {

        let nuevaContraseña = "";

        for (let i = 0; i < valor; i++) {
            const mezclaLetras = caracteres[Math.floor(Math.random() * caracteres.length)];
            nuevaContraseña += mezclaLetras;
        }

        setContraseñaGenerada(nuevaContraseña);
    }

    function aumentarValor() {
        if (valor < 25) {
            setValor(valor + 1);
        }
    }

    function disminuirValor() {
        if (valor > 5) {
            setValor(valor - 1);
        }
    }


    return (
        <>
            <div className="container text-center ">
                <div className="row m-5">
                    <div className="p-5 text-bg-dark col-7  rounded-5">
                        <h2 className="display-6 titulo">Generador de contraseña</h2>
                        <p className="m-3 subTitulo">Selecciona la longitud de tu contraseña y pulsa Generar</p>
                        <div className="valor">
                            <svg onClick={disminuirValor} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-dash-circle espacio" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                            </svg>
                            <p className="numero">{valor}</p>
                            <svg onClick={aumentarValor} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle espacio" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                        </div>
                        <hr className="linea" />
                        <button onClick={generarContraseña} className="btn btn-outline-light boton" type="button">Generar</button>
                    </div>
                    <div className="col-5 order-4">
                        <div className="h-100 p-5 bg-body-tertiary mt-5">
                            <h2>Tu contraseña es:</h2>
                            <h4 className="pass">{contraseñaGenerada}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contraseña;

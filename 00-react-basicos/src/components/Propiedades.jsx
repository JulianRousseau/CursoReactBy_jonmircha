import React from "react";

/* ---------------------- A las props le podemos pasar ---------------------- */
// Strings
// Numbers
// Booleans
// Arrays
// Objects
// Functions
// React Elements
// React Components

export default function Propiedades(props) {
  return (
    <>
      Trabajando con props
      <p>{props.textoEj}</p>
      <p>{props.texto}</p>
      <p>{props.numero}</p>
      <p>{props.boleano ? "True" : "False"} </p>
      <p>{props.arreglo.join(" ")}</p>
      <p>{props.objeto.nombre + " => " + props.objeto.mail}</p>
      <p>{props.elementoReact}</p>
      {/* en este caso estoy usando una funcion que pase como prop en un call back (del map) */}
      <p>{props.arreglo.map(props.funcion)}</p>
      <p>{props.componente}</p>
    </>
  );
}

/* ----- Asi podemos dar props por defecto NombreComponente.defaultProps ---- */
Propiedades.defaultProps = {
  textoEj: "una prop por defecto",
};

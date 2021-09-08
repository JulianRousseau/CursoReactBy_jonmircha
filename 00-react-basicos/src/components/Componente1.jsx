import React from "react";

let nombre = "julian";
let aprendiendo = true;
let necesarios = ["js", "css", "html"];

export default function Componente1() {
  return (
    <>
      <h1>{nombre} </h1>
      <h2>{aprendiendo ? "Esta aprendiendo React" : "No esta aprendiendo"}</h2>
      <ul>
        Ya sabe
        {necesarios.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </>
  );
}

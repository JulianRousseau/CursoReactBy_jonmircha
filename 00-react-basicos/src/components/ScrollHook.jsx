import React, { useState, useEffect } from "react";

export default function ScrollHook() {
  /*
  useEffect(() => {
    faseDeActualizacions 
    return () => {
      faseDeDesmontaje en este ejemplo no hay desmontaje
    }
  }, [loQueSeCompruebaSiCambio])
  */

  const [scrollY, setScrollY] = useState(0);
  const [nombre, setNombre] = useState("vacio");

  useEffect(
    () => {
      setNombre("julian");
    },
    [
      /*en este parametro ponemos el atributo que se va a controlar para saber si actualizamos o no*/
      /*si dejamos este parametro vacio estamos trabajando la fase de montaje*/
    ]
  );

  useEffect(() => {
    const detectarScrollY = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener("scroll", detectarScrollY);
  }, [scrollY]);

  return (
    <>
      <h2>Hooks - useEffect - Scroll</h2>
      <h3>Nombre = {nombre}</h3>
      <h3>Scroll Y = {scrollY}px</h3>
    </>
  );
}

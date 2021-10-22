import React, { useState, useEffect } from "react";

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      console.log("Fase de desmontado");
    };
  }, [visible]);

  return (
    <>
      <h2>Hooks - useEffect - Reloj</h2>

      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>

      {visible && <Reloj hora={hora} />}
    </>
  );
}

function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}

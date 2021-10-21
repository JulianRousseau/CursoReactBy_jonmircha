import React, { useState } from "react";

export default function ContadorHooks() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  const restart = () => {
    setContador(0);
  };
  return (
    <>
      <h2>Hooks - useState</h2>
      <p>{contador}</p>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
      <button onClick={restart}>restart</button>
    </>
  );
}

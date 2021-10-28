import React from "react";

import "../index.css";
import "./Estilos.css";
import style from "./Estilos.module.css";

export default function Estilos() {
  let objetoCSS = {
    color: "#8cff40",
    background: "grey",
  };

  return (
    <>
      <section className="estilos">
        <h2>Estilos CSS en react</h2>
        <p className="texto_gold">Estilos en hoja CSS esterna</p>
        <p style={{ color: "var(--principal)" }}>Estilos en linea</p>
        <p style={objetoCSS}>Estilos en linea con objetos</p>
        <div>
          <b className={style.celeste}>Estilos con </b>
          <b className={style.naranja}>module.css</b>
        </div>
      </section>
    </>
  );
}

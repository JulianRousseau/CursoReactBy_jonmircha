import React, { useRef } from "react";

/* ---------------------------------------------------------------------------------------------- */
/*                     useRef resulta interesante cuando queremos jugar con la                    */
/*                    visibilidad de un elemento que ya esta montado en el dom                    */
/* ---------------------------------------------------------------------------------------------- */

export default function Referencias() {
  let refMenuBtn = useRef();
  let refMenu = useRef();

  const handleToggleMenu = (e) => {
    /* ----------------------------- esta seria la forma con JS vanilla ----------------------------- */
    // const $menu = document.getElementById("menu");
    // if (e.target.textContent === "Menu") {
    //   e.target.textContent = "Cerrar";
    //   $menu.style.display = "block";
    // } else {
    //   e.target.textContent = "Menu";
    //   $menu.style.display = "none";
    // }

    /* --------------------------------- esta es la forma con useRef -------------------------------- */
    /* la propiedad current es la que iguala al elemento en el DOM al que le asignamos la referencia */

    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menu
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="https://www.google.com.ar/">Seccion 1</a>
        <br />
        <a href="https://www.google.com.ar/">Seccion 2</a>
        <br />
        <a href="https://www.google.com.ar/">Seccion 3</a>
        <br />
        <a href="https://www.google.com.ar/">Seccion 4</a>
        <br />
        <a href="https://www.google.com.ar/">Seccion 5</a>
      </nav>
    </>
  );
}

import React, { useState } from "react";
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/*                               forma sencilla y para pocos inputs                               */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [colorFav, setColorFav] = useState("ninguno");
  const [lenguaje, setLenguaje] = useState("ninguno");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Se envio:
    Nombre: ${nombre}
    Color favorito: ${colorFav}
    Lenguaje: ${lenguaje}
    Terminos: ${terminos}`);
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        {/* -------------------------------------------- TEXT -------------------------------------------- */}
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="colorFavorito"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {/* -------------------------------------------- RADIO -------------------------------------------- */}
        <p>Elegi tu color favorito = {colorFav}</p>
        <input
          type="radio"
          id="ninguno"
          name="colorFavorito"
          value="ninguno"
          defaultChecked
          onChange={(e) => setColorFav(e.target.value)}
        />
        <label htmlFor="ninguno">Ninguno</label>
        <input
          type="radio"
          id="rojo"
          name="colorFavorito"
          value="rojo"
          onChange={(e) => setColorFav(e.target.value)}
        />
        <label htmlFor="rojo">rojo</label>
        <input
          type="radio"
          id="azul"
          name="colorFavorito"
          value="azul"
          onChange={(e) => setColorFav(e.target.value)}
        />
        <label htmlFor="azul">azul</label>
        <input
          type="radio"
          id="verde"
          name="colorFavorito"
          value="verde"
          onChange={(e) => setColorFav(e.target.value)}
        />
        <label htmlFor="verde">verde</label>
        {/* -------------------------------------------- SELECTS -------------------------------------------- */}
        <p>Elige tu lenguaje de programacion favorito - {lenguaje}</p>
        <select
          name="lenguaje"
          id="lenguajes"
          onChange={(e) => {
            setLenguaje(e.target.value);
          }}
          defaultValue="ninguno"
        >
          <option value="">Lenguajes</option>
          <option value="js" default>
            JavaScript
          </option>
          <option value="java">Java</option>
          <option value="py">Python</option>
        </select>
        {/* -------------------------------------------- CHECKBOX -------------------------------------------- */}
        <br />
        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/*                               forma avanzada y para muchos inputs                              */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */

function FormulariosV2() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form, // lo que ya tenga el formulario
      [e.target.name]: e.target.value, // + lo que tenga el e.target.name (y si ya detecta que esta propiedad ya existia en el form, la actualiza)
    });
  };

  //   hacemos otro handle porque aca evaluamos el checked en ves del value
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h2>Formularios V2</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.name}
          onChange={handleChange}
        />
        <p>Elige tu Sabor JS Favorito:</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export { Formularios, FormulariosV2 };

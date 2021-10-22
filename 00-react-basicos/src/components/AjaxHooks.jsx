import React, { useState, useEffect } from "react";

export default function AjaxHooks() {
  const [pokemones, setPokemones] = useState([]);

  /* ---------------------------------------------------------------------------------------------- */
  /*                                     Version sin async await                                    */
  /* ---------------------------------------------------------------------------------------------- */
  /*como quiero llamar a esta funcion de efecto una sola ves, dejo el arreglo de actulizacion vacio*/
  //   useEffect(() => {
  //     let url = "https://pokeapi.co/api/v2/pokemon/";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         // console.log(json);
  //         json.results.forEach((elemento) => {
  //           fetch(elemento.url)
  //             .then((res) => res.json())
  //             .then((json) => {
  //               let pokemon = {
  //                 id: json.id,
  //                 name: json.name,
  //                 avatar: json.sprites.front_default,
  //               };
  //               setPokemones((pokemones) => [...pokemones, pokemon]);
  //             });
  //         });
  //       });
  //   }, []);

  /* ---------------------------------------------------------------------------------------------- */
  /*                                     Version con async await                                    */
  /* ---------------------------------------------------------------------------------------------- */

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      //console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        //console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemones((pokemones) => [...pokemones, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Ajax con Hooks</h2>
      <div>
        {pokemones.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          pokemones.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </div>
    </>
  );
}

function Pokemon(props) {
  return (
    <figure style={{ display: "inline-block", width: "70px" }}>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

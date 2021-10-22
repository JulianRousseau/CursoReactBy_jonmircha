import React from "react";

import { useFetch } from "../hooks/useFetch";

export default function HooksPesonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //url = "https://jsonplaceholder.typicode.com/users";
  //console.log(useFetch());

  let { data, isPending, error } = useFetch(url);
  return (
    <>
      <>
        <h2>Hooks Personalizados</h2>
        <h3>{JSON.stringify(isPending)}</h3>
        <h3>
          <mark>{JSON.stringify(error)}</mark>
        </h3>
        <p>Solo muestro texto para no renderizar todo de nuevo</p>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code style={{ wordBreak: "break-word", fontSize: ".8rem" }}>
            {JSON.stringify(data)}
          </code>
        </pre>
      </>
    </>
  );
}

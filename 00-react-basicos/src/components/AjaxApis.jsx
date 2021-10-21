import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure style={{ display: "inline-block", width: "70px" }}>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        json.results.forEach((elemento) => {
          fetch(elemento.url)
            .then((res) => res.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              let pokemons = [...this.state.pokemons, pokemon];

              this.setState({
                pokemons: pokemons,
              });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones asincronas en Componentes de clases</h2>
        <div>
          {this.state.pokemons === 0 ? (
            <h3>Cargando</h3>
          ) : (
            this.state.pokemons.map((elemento) => {
              return (
                <Pokemon
                  key={elemento.id}
                  name={elemento.name}
                  avatar={elemento.avatar}
                />
              );
            })
          )}
        </div>
      </>
    );
  }
}

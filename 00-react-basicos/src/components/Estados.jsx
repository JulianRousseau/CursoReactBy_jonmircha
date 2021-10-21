import React, { Component } from "react";

export default class Estados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "texto por defecto",
      contador: 0,
    };

    /* ------------------------- Intervalo comentado para evitar un warning ------------------------- */
    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1,
    //   });
    // }, 1000);
  }

  render() {
    return (
      <>
        <h2>Estados</h2>
        <p>{this.state.texto}</p>
        <p>{this.state.contador}</p>
        <ComponenteHijo estadoDelPadre={this.state.contador} />
      </>
    );
  }
}

/* --- El estado de un componente Padre se le puede pasar como propiedad a un componente hijo --- */
function ComponenteHijo(props) {
  return <p style={{ fontSize: "1rem" }}>{props.estadoDelPadre}</p>;
}

import React, { Component } from "react";

/* ------------------------------ Comunicacion de Comp padre a hijo ----------------------------- */
/* ------------ se hace a través del paso de props de un componente padre a uno hijo ------------ */

/* ------------------------------ Comunicacion de Comp hijo a padre ----------------------------- */
/* -------- se hace a traves de eventos, pasamos una funcion como prop del padre al hijo -------- */

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  sumarContador = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restarContador = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  restaurarContador = () => {
    this.setState({
      contador: 0,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicacion entre Componentes</h2>
        <h4>Contador del padre {this.state.contador}</h4>
        <Hijo
          mensaje="Componente hijo 1 (con un evento suma 1 al padre)"
          myOnClick={this.sumarContador}
        />
        <Hijo
          mensaje="Componente hijo 2 (con un evento resta 1 al padre)"
          myOnClick={this.restarContador}
        />
        <Hijo
          mensaje="Componente hijo 3 (con un evento restaura al padre)"
          myOnClick={this.restaurarContador}
        />
      </>
    );
  }
}

/* - en este caso los hijos van a mandar info al padre mediante un evento y le cambia el estado - */
const Hijo = ({ myOnClick, mensaje }) => {
  return (
    <p onClick={myOnClick} style={{ cursor: "pointer" }}>
      {mensaje}
    </p>
  );
};

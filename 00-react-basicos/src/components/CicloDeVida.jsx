import React, { Component } from "react";

/* ---------------------------------------------------------------------------------------------- */
/*   Son métodos que se ejecutan automáticamente en un Componente de Clase, ocurren en 3 fases:   */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Montaje. ------------------------------------------ */
/* --------------------------------------- Actualización. --------------------------------------- */
/* ----------------------------------------- Desmontaje ----------------------------------------- */

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);

    console.log(0, "El componente se inicializa, aun no esta en el dom");
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }
  /* --------------------- Se ejecuta cuando el componente se monta en el DOM --------------------- */
  componentDidMount() {
    console.log(1, "El componente se monto en el DOM");
  }

  /* ---- componentDidUpdate puede recibir dos parametros: las props previs y el estado previo ---- */
  componentDidUpdate(prveProps, prevState) {
    console.log(2, "El estado o las props de componente cambiaron");
    console.log(prveProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      4,
      "El componente se dibuja o redibuja por un cambio en el dom o estado"
    );
    return (
      <>
        <h2>Ciclo de vida - Componentes de Clase</h2>
        {this.state.visible ? (
          <Reloj hora={this.state.hora} />
        ) : (
          <p>terminado</p>
        )}
        <div>
          <button onClick={this.iniciar} style={{ fontSize: "1.5rem" }}>
            Iniciar
          </button>
          <button onClick={this.detener} style={{ fontSize: "1.5rem" }}>
            Detener
          </button>
        </div>
      </>
    );
  }
}

class Reloj extends Component {
  /* --------------------- se ejecuta cuando el componente se desmonta del DOM -------------------- */
  componentWillUnmount() {
    console.log(3, "El componente se desmonto del DOM");
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

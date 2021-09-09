import React, { Component } from "react";

class EventosEnClases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };

    /* -------------------------------------------- bind -------------------------------------------- */
    /* ------- lo que hacemos es declarar en el constructor una propiedad sumar y lo igualamos ------ */
    /* ----------- con el metodo sumar y a ese metodo le bindea o enlasa el elemento this ----------- */
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar() {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <>
        {/* las flechas son emojis de https://es.piliapp.com/emoji/list/ */}
        <h2>Eventos en Componentes de clases</h2>
        <p>Contador ➡ {this.state.contador}</p>
        <div>
          <button onClick={this.sumar} style={{ fontSize: "1.5rem" }}>
            ⬆
          </button>
          <button onClick={this.restar} style={{ fontSize: "1.5rem" }}>
            ⬇
          </button>
        </div>
      </>
    );
  }
}

/* --------------- despues de ecmascript 7 se pueden hacer algunas cosas mas facil -------------- */
class EventosEnClasesES7 extends Component {
  /* ------ Ya no es necesario definir el constructor, y podemos definir state como una prop de la clase---- */
  state = {
    contador: 0,
  };

  /* ----------------------- Si uso arrow function no es necesario el bindeo ---------------------- */
  sumar = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  multiplicarPor2 = () => {
    this.setState({
      contador: this.state.contador * 2,
    });
  };

  dividirPor2 = () => {
    this.setState({
      contador: this.state.contador / 2,
    });
  };

  restaurar = () => {
    this.setState({
      contador: 0,
    });
  };
  render() {
    return (
      <>
        {/* las flechas son emojis de https://es.piliapp.com/emoji/list/ */}
        <h2>Eventos en Componentes de clases ES7</h2>
        <p>Contador ➡ {this.state.contador}</p>
        <div>
          <button onClick={this.sumar} style={{ fontSize: "1.5rem" }}>
            ⬆
          </button>
          <button onClick={this.restar} style={{ fontSize: "1.5rem" }}>
            ⬇
          </button>
          <button onClick={this.multiplicarPor2} style={{ fontSize: "1.5rem" }}>
            *2
          </button>
          <button onClick={this.dividirPor2} style={{ fontSize: "1.5rem" }}>
            /2
          </button>
        </div>
        <button onClick={this.restaurar} style={{ fontSize: "1.5rem" }}>
          Restaurar
        </button>
      </>
    );
  }
}

export { EventosEnClases, EventosEnClasesES7 };

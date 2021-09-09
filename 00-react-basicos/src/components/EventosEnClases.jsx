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

/* ---------------------------------------------------------------------------------------------- */
/*                 despues de ecmascript 7 se pueden hacer algunas cosas mas facil                */
/* ---------------------------------------------------------------------------------------------- */
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

class MasSobreEventos extends Component {
  // nuestra funcion puede recibir por parametro el evento
  handleClick = (evento, otroParametro, otroParametro2) => {
    // React "envuelve" el evento nativo de js y le da soporte a los diferentes navegadores
    // esto para tener un mejor control desde react del evento
    // no todos los eventos estas soportados pero si los mas usados
    console.log(evento);
    // si necesitamos trabajar con el evento original de javascript usamos .nativeEvent
    console.log(evento.nativeEvent);
    // target es el elemento que origina el evento (en este caso un button)
    console.log(evento.target);
    // para acceder al target del evento original de js
    console.log(evento.nativeEvent.target);
    console.log(otroParametro);
    console.log(otroParametro2);
  };

  render() {
    return (
      <>
        <h2>Mas sobre Eventos</h2>
        <button
          // en los manejadores de eventos "handlers" solo recivimos el evento como parametro
          // si necesitamos pasar mas parametros al evento, ejecuto el evento como si
          // fuera una arrow function y ahi paso los otros parametros que necesito ademas del evento
          onClick={(e) => {
            // ahora ya no es el hanlder quien maneja el evento sino la arrow function
            this.handleClick(e, "Pasando parametro desde un evento", 12345);
          }}
          style={{ fontSize: "1.5rem" }}
        >
          Boton
        </button>
      </>
    );
  }
}

class EventosPersonalisado extends Component {
  handleClick2 = (e, msg1) => {
    console.log(e);
    console.log(msg1);
  };

  render() {
    return (
      <>
        <h2>Eventos Personalizados</h2>
        {/* Si yo quiero darle un evento (por ej onClick) a un componente que cree
        debe ser un evento personalizado, porque el evento onClick (como todos los otros eventos)
        son atributos de las etiquetas JSX, no de nuestros componentes */}
        {/* el siguiente codigo no funcionaria ya que a un componente le estoy dando un atributo de etiquetas jsx (onClick)*/}
        {/*<ComponenteBoton onClick={(evento) => {
            this.handleClick2(evento, "Mensaje enviado como parametro");
          }} 
        />*/}

        {/* si quiero darle un evento a mi componente se lo tengo que pasar como una prop */}
        <ComponenteBoton
          MyOnClick={(evento) => {
            this.handleClick2(
              evento,
              "Mensaje enviado como parametro a mi evento personalizado"
            );
          }}
        />
      </>
    );
  }
}

// para no usar props.MyOnClick desestructuro mis props con {} asi no tengo que poner porps antes de cada uno
function ComponenteBoton({ MyOnClick }) {
  // aca si puedo usar onClick ya que es una etiqueta JSX y le paso mi evento personalizado
  return <button onClick={MyOnClick}>Componente Boton</button>;
}

export {
  EventosEnClases,
  EventosEnClasesES7,
  MasSobreEventos,
  EventosPersonalisado,
};

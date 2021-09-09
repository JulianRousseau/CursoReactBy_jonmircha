import React, { Component } from "react";

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logueado: true,
    };
  }
  render() {
    return (
      <>
        <h2>Renderizado condicional</h2>
        {this.state.logueado ? <Login /> : <Logout />}
      </>
    );
  }
}

function Login() {
  return <p>Estoy logueado</p>;
}

function Logout() {
  return <p>No estoy logueado</p>;
}

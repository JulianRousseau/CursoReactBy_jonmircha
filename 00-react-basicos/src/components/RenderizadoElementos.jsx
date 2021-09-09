import React, { Component } from "react";
import data from "../helpers/data.json";

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      estaciones: ["Primavera", "Verano", "Otonio", "Invierno"],
    };
  }
  render() {
    return (
      <>
        <h2>Renderizado Elementos</h2>
        <span>Estaciones</span>
        <ul>
          {this.state.estaciones.map((estacion, index) => (
            <Estacion key={index} nombreEstacion={estacion} />
          ))}
        </ul>

        <span>Frameworks</span>
        <ul type="none">
          {data.frameworks.map((framework) => {
            return (
              <Framework
                key={framework.id}
                nombre={framework.name}
                web={framework.web}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

function Estacion(props) {
  return <li>{props.nombreEstacion}</li>;
}

function Framework(props) {
  return (
    <li>
      {props.nombre}
      {" => "}
      <a href={props.web} style={{ color: "lightsalmon" }}>
        {props.nombre} doc
      </a>
    </li>
  );
}

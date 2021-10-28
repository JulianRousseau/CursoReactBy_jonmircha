import React from "react";

import styled, { css } from "styled-components";

/* ---------------------------------------------------------------------------------------------- */
/*                                             Estilos                                            */
/* ---------------------------------------------------------------------------------------------- */

// podemos asignar el valor a una variable "local" para que sea mas sencillo
const colorPrincipal = "var(--principal)";

const tiempoTransicion = (time) => `all ${time} ease-in-out`;

/* ----------------------------------- componentes estilizados ---------------------------------- */
const MiP = styled.p`
  color: #acff4e;
`;

const PvarColor = styled.p`
  /* podemos interpolar valores de esta forma */
  color: ${colorPrincipal};
  margin: 0;
  transition: ${tiempoTransicion("1s")};
  /* tambien funciona esta caracteristica AND (&) */
  &:hover {
    font-size: 2em;
    background-color: black;
  }
`;

const Boton = styled.button`
  /* le puedo pasar props, tambien puedo desestructurarlas */
  background: ${(props) => props.fondo};
  /* si no le paso cierta prop utilizo || valorPorDefecto */
  color: ${(props) => props.color || "white"};
  margin: 10px;
  font-size: ${({ emSize }) => emSize};
`;

const Boton2 = styled.button`
  ${({ isDesktop }) =>
    isDesktop &&
    css`
      width: 200px;
      height: 30px;
    `}

  ${({ isTablet }) =>
    isTablet &&
    css`
      width: 100px;
      height: 30px;
    `}
    
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 50px;
      height: 30px;
    `}
`;

/* ---------------------------------------------------------------------------------------------- */
/*                                               JSX                                              */
/* ---------------------------------------------------------------------------------------------- */
export default function ComponentesEstilizados() {
  return (
    <>
      <h2>Styled-Componentes</h2>
      <MiP>Soy un styled component</MiP>

      <PvarColor> styled component con var</PvarColor>

      <Boton fondo="black" color="#4287f5" emSize="2em">
        Boton
      </Boton>

      <Boton2 isDesktop>desk</Boton2>
      <Boton2 isTablet>tablet</Boton2>
      <Boton2 isMobile>mobile</Boton2>
    </>
  );
}

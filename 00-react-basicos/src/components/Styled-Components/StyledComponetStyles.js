import styled, { css } from "styled-components";

let principal = "var(--principal)";
let secundario = "var(--secundario)";
const setTransitionTime = (time) => `all ${time} ease-in-out`;

/* ----------------------------- con ${} podemos interpolar valores ----------------------------- */
/* ----- con &: podemos referirnos al elemento donde lo ponemos en otro estado, ej: &:hover ----- */

const StyledDiv = styled.div`
  background: ${principal};
  border-radius: 20px;
  transition: ${setTransitionTime("1s")};

  h2 {
    color: ${secundario};
    padding: 0 5px;
    line-height: 0;
    transition: ${setTransitionTime("1s")};
  }
  &:hover {
    background: ${secundario};
    h2 {
      color: ${principal};
    }
  }

`;

// Esta es la forma de pasar valores como props, en este caso desestructuradas
const Button = styled.button`
  background-color: ${({ fondo }) => fondo};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;

// de la siguiente forma, dependiendo de una prop boleana le damos diferente estilo
// debemos importar { css } from "styled-components"
const Button2 = styled.button`
  display: block;
  margin: auto;
  background-color: #fff;

  ${(props) =>
    props.isDesktop &&
    css`
      font-size: 2em;
    `}

  ${(props) =>
    props.isTablet &&
    css`
      font-size: 1em;
    `}

    ${(props) =>
    props.isMobile &&
    css`
      font-size: 0.5em;
    `}
`;

export { StyledDiv, Button, Button2 };

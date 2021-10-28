import React from "react";
import { StyledDiv, Button, Button2 } from "./StyledComponetStyles";

export default function StyledComponent() {
  return (
    <StyledDiv>
      <h2>Styled-Component</h2>
      <Button fondo="black" color="white" fontSize="1em">
        BOTON
      </Button>
      <Button2 isDesktop>BOTON-2</Button2>
      <Button2 isTablet>BOTON-2</Button2>
      <Button2 isMobile>BOTON-2</Button2>
    </StyledDiv>
  );
}

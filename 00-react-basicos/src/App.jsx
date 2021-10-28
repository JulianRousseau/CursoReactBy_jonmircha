import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente1 from "./components/Componente1";
import ComponenteDeClase from "./components/ComponenteDeClase";
import ComponenteFuncional from "./components/ComponenteFuncional";
import ComponenteFuncionalArrow from "./components/ComponenteFuncionalArrow";
import Propiedades from "./components/Propiedades";
import Estados from "./components/Estados";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {
  EventosEnClases,
  EventosEnClasesES7,
  EventosPersonalisado,
  MasSobreEventos,
} from "./components/EventosEnClases";
import Padre from "./components/ComunicacionComponentes";
import CicloDeVida from "./components/CicloDeVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHook from "./components/ScrollHook";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPesonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios, { FormulariosV2 } from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";
import StyledComponent from "./components/Styled-Components/StyledComponent";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Componente1 />
          <hr />
          <ComponenteDeClase texto={"soy un componente de clase"} />
          <hr />
          <ComponenteFuncional texto={"soy un componente funcional"} />
          <hr />
          <ComponenteFuncionalArrow
            texto={"soy un componente funcional echo con arrow"}
          />
          <hr />
          <Propiedades
            texto="String"
            numero={23}
            boleano={true}
            arreglo={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            objeto={{ nombre: "julian", mail: "julianrousseau31@gmial.com" }}
            elementoReact={
              // i es italic
              <i>
                Esto es un elemento <strong>React</strong>
              </i>
            }
            //puedo pasar una funcion y por ej utilizarla como callback
            funcion={(num) => num - 1}
            componente={
              <ComponenteFuncional texto="soy un componente pasado como prop" />
            }
          />
          <hr />
          <Estados />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosEnClases />
          <EventosEnClasesES7 />
          <MasSobreEventos />
          <EventosPersonalisado />
          <hr />
          <Padre />
          <hr />
          {false ? (
            <CicloDeVida />
          ) : (
            <p>Ciclo de vida (comentado,para no ensuciar consola)</p>
          )}
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks />
          <hr />
          <ScrollHook />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPesonalizados />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <hr />
          <FormulariosV2 />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
          <hr />
          <StyledComponent />
        </header>
      </div>
    </>
  );
}

export default App;

import React from "react";
import Map from "./Map";
import {
  SucImg,
  SucSection,
  SucursalesH2,
  SucursalesSectionContainer,
} from "./Sucursales.styled";
import fondoImg from "../integrar/fondoIntegrar.jpg";
// import { IntegrarImg } from "../integrar/Integrar.styled";

const Sucursales = () => {
  return (
    <>
      <SucSection id="offices">
        <SucImg src={fondoImg} />
        <SucursalesH2>¿Dónde estamos?</SucursalesH2>
        <SucursalesSectionContainer>
          <Map />
        </SucursalesSectionContainer>
      </SucSection>
    </>
  );
};

export default Sucursales;

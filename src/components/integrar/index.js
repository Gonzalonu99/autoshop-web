import React from "react";
import {
  BackgroundIntegrar,
  BlackText,
  BoldSpan,
  InclineDiv,
  IntegrarImg,
  LineTitle,
  TextContainer,
  TextSpan,
} from "./Integrar.styled";
import fondoImg from "./fondoIntegrar.jpg";

const Integrar = () => {
  return (
    <>
      <InclineDiv />
      <BackgroundIntegrar>
        <IntegrarImg src={fondoImg} />
        <TextContainer>
          <TextSpan>
            Integramos
            <LineTitle />
          </TextSpan>
          <br />
          <BoldSpan>
            Inteligencia Artificial <br />
            Vision Computarizada <br />
            Machine Learning
          </BoldSpan>{" "}
          <br />
          <BlackText>
            Para que puedas comprar las 24 hs <br /> de manera autónoma sin
            perder tiempo <br /> al momento de pagar.
          </BlackText>
        </TextContainer>
      </BackgroundIntegrar>
    </>
  );
};

export default Integrar;

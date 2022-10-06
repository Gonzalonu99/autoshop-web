import styled from "styled-components";

export const InclineDiv = styled.div`
  width: 100%;
  height: 8px;
  border: 1px solid #fff;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  position: relative;
  bottom: 5px;
  background-color: #d3e5f1;
`;
export const BackgroundIntegrar = styled.div`
  width: 100%;
  height: 70vh;
  position:relative;
  bottom:6px;
`;
export const IntegrarImg = styled.img`
  width: 100%;
  height: 105%;
  object-fit: cover;
`;
export const TextContainer = styled.div`
  position: relative;
  bottom: 80%;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  color: #279be9;
  /* left:17%; */
  @media(min-width: 667px){
    left:33.2%;
  };
  @media(min-width: 768px){
    left: 33%;
  };
  @media (min-width: 1024px) {
    left: 39%;
  }
`;
export const TextSpan = styled.span`
  font-size: 25px;
  @media (min-width: 667px) {
    font-size: 30px;
  }
`;
export const LineTitle = styled.div`
  width: 60%;
  height: 3px;
  background-color: #279be9;
  position: relative;
  left: 105%;
  bottom: 13px;
`;
export const BoldSpan = styled.span`
  font-weight: bold;
  font-size: 25px;
  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;
export const BlackText = styled.span`
  color: #000;
`;

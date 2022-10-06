import styled from "styled-components";

export const SucSection = styled.div`
  width: 100%;
  height: 90vh;
`;
export const SucImg = styled.img`
  width:100%;
  height:125%;
  object-fit:cover;
  @media(min-width: 657px){
    height:100%;
  }
`;
export const SucursalesSectionContainer = styled.div`
  position: relative;
  bottom: 125%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media(min-width: 657px){
    bottom:90%;
  };
  @media (min-width: 768px) {
    justify-content: center;
  }
`;
export const SucursalesH2 = styled.h2`
  position: relative;
  bottom: 123%;
  font-size: 35px;
  padding-top: 40px;
  color: #279be9;
  text-align: center;
  @media(min-width: 657px){
    bottom:95%;
  };
`;
export const ListContainer = styled.div`
  overflow-y: auto;
  max-height: 300px;
  max-width: 350px;
  margin-top: 60px;
  margin-left: -30px;
  @media (min-width: 687px) and (max-width: 767px) {
    max-width: 300px;
    margin-left: 40px;
    overflow-x: hidden;
  }
  @media (min-width: 767px) {
    margin-left: 40px;
  }
`;
export const ListLine = styled.div`
  width: 310px;
  height: 2px;
  background-color: #279be9;
  position: relative;
  margin-bottom: 15px;
`;
export const ItemName = styled.h4`
  font-size: 18px;
  font-weight: bold;
`;
export const ItemLocation = styled.h6`
  font-size: 13px;
`;

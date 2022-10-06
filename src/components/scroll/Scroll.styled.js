import styled from "styled-components";

export const ScrollUpButton = styled.div`
  position: fixed;
  width: 100%;
  height: 20px;
  z-index: 10000;
  cursor: pointer;
  color: #5A238B;
  font-size: 2.7rem;
  bottom: 45px;
  left: 83%;
  @media (min-width: 992px) {
    left: 95.5%;
  }
`;

import styled from "styled-components";
export const FooterSection = styled.div`
  width: 100%;
  background-color: #fff;
  position: relative;
  top: 150px;
  display: flex;
  flex-flow: row wrap;
  padding: 30px;
  > * {
    flex: 1 100%;
  }
  @media (min-width: 657px) {
    top: -10px;
  }
`;
export const FooterLeft = styled.div`
  margin-right: 1.25em;
  margin-bottom: 2em;
  margin-top: 30px;
  @media (min-width: 600px) {
    flex: 1 0px;
  }
`;
export const FooterRight = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }
  @media (min-width: 600px) {
    flex: 2 0px;
    > * {
      flex: 1;
    }
  }
`;
export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 45px;
  color: #188edd;
`;
export const FooterImg = styled.img`
  width: 100px;
`;
export const FooterH2 = styled.h2`
  font-weight: 600;
  font-size: 22px;
`;
export const FooterUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export const FooterLi = styled.li`
  list-style: none;
  padding: 8px;
  padding-left: 0;
`;
export const FooterLink = styled.a`
  text-decoration: none;
  color: #222;
  :hover {
    text-decoration: 3px underline #279be9;
    color:#000;
  }
`;
export const FooterText = styled.p`
  padding-right: 20%;
  padding-top: 4%;
`;
export const RedesSociales = styled.a`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-right: 10px;
  padding: 10px 12px;
  font-size: 30px;
  color: #5a238b;
  :hover {
    color: #000;
  }
`;

import React from "react";
import Logo from "../navbar/newlogo365.png";
import {
  FooterBottom,
  FooterH2,
  FooterImg,
  FooterLeft,
  FooterLi,
  FooterLink,
  FooterRight,
  FooterSection,
  FooterText,
  FooterUl,
  RedesSociales,
} from "./Footer.styled";
import HomeIcon from "./HomeIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";
import FacebookIcon from "./FacebookIcon";
import MailIcon from "./MailIcon";
import PhoneIcon from "./PhoneIcon";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterSection>
      <FooterLeft>
        <FooterImg src={Logo} alt="autoshop" />
        <FooterText>
          No salgas de tu comunidad para conseguir lo que necesitás. Con
          Autoshop, estás a solo un touch de tu carrito.
        </FooterText>
        <div className="socials">
          <RedesSociales href="">
            <LinkedInIcon />
          </RedesSociales>
          <RedesSociales href="">
            <InstagramIcon />
          </RedesSociales>
          <RedesSociales href="">
            <FacebookIcon />
          </RedesSociales>
        </div>
      </FooterLeft>

      <FooterRight>
        <FooterLi>
          <FooterH2>Links</FooterH2>
          <FooterUl>
            <FooterLi>
              <FooterLink href="#descarga">Descargar App</FooterLink>
            </FooterLi>
            <FooterLi>
              <FooterLink href="#offices">Sucursales</FooterLink>
            </FooterLi>
            <FooterLi>
              <FooterLink href="#contact">Contactanos</FooterLink>
            </FooterLi>
          </FooterUl>
        </FooterLi>
        <FooterLi>
          <FooterH2>Contacto</FooterH2>
          <FooterUl>
            <FooterLi>
              <HomeIcon /> La Reja, Buenos Aires, Argentina.
            </FooterLi>
            <FooterLi>
              <MailIcon /> mail@example.com
            </FooterLi>
            <FooterLi>
              <PhoneIcon /> +54 11-0000-0000
            </FooterLi>
          </FooterUl>
        </FooterLi>
      </FooterRight>
      <FooterBottom>
        <p> &copy; AutoShop-365, {year}. All rights reserved. </p>
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer;

import React from "react";
import "./home.css";
import Video from "./atardecer.mp4";
import { DownloadButton, StyledLink } from "./HomeButton.styled";
import ArrowIcon from "./ArrowIcon";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <video src={Video} autoPlay loop muted />
      <DownloadButton>
        <StyledLink href="#descarga">
          Descargar APP
          <ArrowIcon />
        </StyledLink>
      </DownloadButton>
      <div className="home-text-container">
        <p className="home-text">
          1° Minimarket
          <br />
          <b className="b-home-text">Autónomo</b>
          <br />
          de Latinoamérica
        </p>
      </div>
    </div>
  );
};

export default Home;

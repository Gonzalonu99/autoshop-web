import React from "react";
import {
  DescargarContainer,
  DescargarH2,
  DownloadImg,
  DownloadLink,
} from "./Descargar.styled";

const StoreButtons = () => {
  const iOSUrl = "";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.as24.autoshop24";
  return (
    <DescargarContainer>
      <DescargarH2>
        Descargar <b>APP</b>
      </DescargarH2>
      <DownloadLink href={androidUrl} target="_blank">
        <DownloadImg
          src="https://static.wixstatic.com/media/e9351f_7d01ad24273b4062b35f91e26d816683~mv2.png/v1/fill/w_484,h_207,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20google%20play.png"
          alt="Store"
        />
      </DownloadLink>
      <DownloadLink href={iOSUrl} target="_blank">
        <DownloadImg
          src="https://static.wixstatic.com/media/e9351f_3bd82e01375d4170a046202ede6a665e~mv2.png/v1/fill/w_496,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/appstore.png"
          alt="Store"
        />
      </DownloadLink>
    </DescargarContainer>
  );
};

export default StoreButtons;

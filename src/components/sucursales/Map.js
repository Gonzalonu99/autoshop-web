import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  ItemLocation,
  ItemName,
  ListContainer,
  ListLine,
} from "./Sucursales.styled";
const Map = () => {
  const sucursal = [
    {
      id: 1,
      nombre: " Barrio Cerrado Haras María Victoria",
      ubicacion: "Atahualpa 5, B1738 La Reja, Provincia de Buenos Aires.",
      latitud: -34.61746104164639,
      longitud: -58.81759381534073,
    },
    {
      id: 2,
      nombre: "Barrio Cerrado Haras María Elena",
      ubicacion:
        "Estados Unidos 2502, B1739IYZ La Reja, Provincia de Buenos Aires.",
      latitud: -34.61851912343799,
      longitud: -58.81688274497927,
    },
    {
      id: 3,
      nombre: "Barrio Cerrado Haras María Eugenia",
      ubicacion: "Int.Corvalán, Moreno, Provincia de Buenos Aires.",
      latitud: -34.638123551812456,
      longitud: -58.76170238507477,
    },
    {
      id: 4,
      nombre: "Club de Campo Los Puentes",
      ubicacion: "Av. Gaona, N1C 4DR Luján, Provincia de Buenos Aires.",
      latitud: -34.570066237111845,
      longitud: -59.023169610623576,
    },
  ];
  return (
    <>
      <MapContainer
        center={[-34.63791, -58.8228]}
        zoom={9}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sucursal.map((suc) => (
          <Marker key={suc.id} position={[suc.latitud, suc.longitud]}>
            <Popup>{suc.nombre}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <ListContainer>
        {sucursal.map((item) => (
          <ul key={item.id}>
            <ListLine />
            <li style={{ listStyle: "none" }}>
              <ItemName>{item.nombre}</ItemName>
              <ItemLocation>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#279be9", marginRight: "5px" }}
                />
                {item.ubicacion}
              </ItemLocation>
            </li>
          </ul>
        ))}
      </ListContainer>
    </>
  );
};

export default Map;

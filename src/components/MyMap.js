import React from "react";
import { Map, Marker } from "pigeon-maps";

//https://pigeon-maps.js.org/docs/installation
const MyMap = ({ height, lat, lon }) => {
  return (
    <Map height={height} defaultCenter={[lat, lon]} defaultZoom={12}>
      <Marker width={50} anchor={[lat, lon]} />
    </Map>
  );
};

export default MyMap;

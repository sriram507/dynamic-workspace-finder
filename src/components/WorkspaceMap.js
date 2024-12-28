import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const WorkspaceMap = ({ location }) => (
    <MapContainer center={location} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={location}></Marker>
    </MapContainer>
);

export default WorkspaceMap;

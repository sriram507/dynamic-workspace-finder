// src/components/MapComponent.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Optional custom icon
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MapComponent({ workspaces }) {
  return (
    <MapContainer
      center={[12.9716, 77.5946]} // Default center (Bangalore, change if needed)
      zoom={12}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {workspaces.map((workspace) => (
        <Marker
          key={workspace.id}
          position={[workspace.latitude, workspace.longitude]}
          icon={markerIcon}
        >
          <Popup>
            <strong>{workspace.name}</strong><br />
            {workspace.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;

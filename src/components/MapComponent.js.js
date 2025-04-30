import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function MapComponent({ workspaces }) {
  return (
    <div className="h-[400px] w-full z-0">
      <MapContainer 
        center={[39.8283, -98.5795]} // Center of US
        zoom={4} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {workspaces.map(ws => (
          <Marker key={ws.id} position={[ws.latitude, ws.longitude]}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold">{ws.name}</h3>
                <p>{ws.location}</p>
                <p>${ws.pricePerHour}/hour</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
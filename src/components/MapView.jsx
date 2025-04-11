import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useContext, useEffect } from 'react';
import { WorkspaceContext } from '../context/WorkspaceContext';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

function FitBounds() {
  const { workspaces } = useContext(WorkspaceContext);
  const map = useMap();

  useEffect(() => {
    if (workspaces.length > 0) {
      const bounds = L.latLngBounds(workspaces.map(ws => [ws.latitude, ws.longitude]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [workspaces, map]);

  return null;
}

export default function MapView({ searchQuery }) {
  const { workspaces } = useContext(WorkspaceContext);

  if (workspaces.length === 0) {
    return (
      <div className="map-empty-state">
        <i className="fas fa-map-marked-alt"></i>
        <h3>No workspaces to display on map</h3>
      </div>
    );
  }

  return (
    <div className="map-view-container">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {workspaces.map(workspace => (
          <Marker 
            key={workspace.id} 
            position={[workspace.latitude, workspace.longitude]}
            icon={L.icon({
              iconUrl: workspace.type === 'private office' ? 
                '/images/office-marker.png' : 
                '/images/coworking-marker.png',
              iconSize: [32, 32],
            })}
          >
            <Popup>
              <div className="map-popup">
                <h4>{workspace.name}</h4>
                <p>
                  <i className="fas fa-map-marker-alt"></i> {workspace.location}
                </p>
                <p>
                  <i className="fas fa-dollar-sign"></i> {workspace.price}/day
                </p>
                <div className="popup-actions">
                  <a 
                    href={`/spaces/${workspace.id}`} 
                    className="popup-button"
                  >
                    Details
                  </a>
                  <a 
                    href={`/book/${workspace.id}`} 
                    className="popup-button primary"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <FitBounds />
      </MapContainer>
    </div>
  );
}
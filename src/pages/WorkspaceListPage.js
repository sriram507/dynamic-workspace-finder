import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkspaceCard from '../components/WorkspaceCard';
import MapComponent from '../components/MapComponent.js';

export default function WorkspaceListPage({ workspaces, setWorkspaces }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const navigate = useNavigate();

  const filteredWorkspaces = workspaces.filter(ws => {
    const matchesSearch = ws.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         ws.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = ws.pricePerHour >= priceRange[0] && 
                        ws.pricePerHour <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Your Workspace</h1>
        
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        {/* Price Filter */}
        <div className="mb-6">
          <label className="block mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
        </div>
      </div>

      {/* Workspace Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredWorkspaces.map(ws => (
          <WorkspaceCard 
            key={ws.id} 
            workspace={ws} 
            onClick={() => navigate(`/workspace/${ws.id}`)}
          />
        ))}
      </div>

      {/* Interactive Map */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Workspace Locations</h2>
        <MapComponent workspaces={filteredWorkspaces} />
      </div>
    </div>
  );
}
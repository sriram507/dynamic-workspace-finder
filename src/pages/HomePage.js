import { useState } from 'react';
import workspaces from '../data/workspaces';
import SearchBar from '../components/SearchBar';
import WorkspaceCard from '../components/WorkspaceCard';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100); // Default max price to a reasonable number

  const filteredWorkspaces = workspaces.filter((workspace) => {
    return (
      (workspace.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workspace.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      workspace.pricePerHour >= minPrice &&
      workspace.pricePerHour <= maxPrice
    );
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Workspace</h1>
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkspaces.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
      {filteredWorkspaces.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No workspaces found.</p>
      )}
    </div>
  );
}

export default HomePage;

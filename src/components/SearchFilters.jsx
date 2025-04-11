import { useContext, useState } from 'react';
import { WorkspaceContext } from '../context/WorkspaceContext';

const amenitiesList = [
  'WiFi', 'Projector', 'Whiteboard', 'Coffee', 'Parking', 
  'Printer', 'Air Conditioning', 'Kitchen', 'Phone Booth'
];

const workspaceTypes = [
  'all', 'coworking', 'private office', 'meeting room', 'hot desk'
];

export default function SearchFilters() {
  const { filters, setFilters, applyFilters } = useContext(WorkspaceContext);
  const [showFilters, setShowFilters] = useState(false);

  const handleAmenityChange = (amenity) => {
    const updatedAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    
    setFilters({ ...filters, amenities: updatedAmenities });
  };

  const handlePriceChange = (min, max) => {
    setFilters({ ...filters, priceRange: [min, max] });
  };

  const resetFilters = () => {
    setFilters({
      location: '',
      capacity: 1,
      priceRange: [0, 500],
      amenities: [],
      type: 'all'
    });
  };

  return (
    <div className="search-filters">
      <button 
        className="toggle-filters"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? (
          <><i className="fas fa-filter"></i> Hide Filters</>
        ) : (
          <><i className="fas fa-filter"></i> Show Filters</>
        )}
      </button>

      {showFilters && (
        <div className="filters-panel">
          <div className="filter-section">
            <h3>Location</h3>
            <input
              type="text"
              placeholder="Filter by location..."
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>

          <div className="filter-section">
            <h3>Workspace Type</h3>
            <div className="type-filters">
              {workspaceTypes.map(type => (
                <label key={type} className="type-filter">
                  <input
                    type="radio"
                    name="workspaceType"
                    checked={filters.type === type}
                    onChange={() => setFilters({ ...filters, type })}
                  />
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Capacity</h3>
            <div className="capacity-filter">
              <span>Min: {filters.capacity}</span>
              <input
                type="range"
                min="1"
                max="20"
                value={filters.capacity}
                onChange={(e) => setFilters({ ...filters, capacity: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <span>${filters.priceRange[0]}</span>
              <input
                type="range"
                min="0"
                max="500"
                step="10"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(filters.priceRange[0], parseInt(e.target.value))}
              />
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>

          <div className="filter-section">
            <h3>Amenities</h3>
            <div className="amenities-grid">
              {amenitiesList.map(amenity => (
                <label key={amenity} className="amenity-item">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-actions">
            <button 
              className="apply-filters"
              onClick={applyFilters}
            >
              Apply Filters
            </button>
            <button 
              className="reset-filters"
              onClick={resetFilters}
            >
              Reset All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
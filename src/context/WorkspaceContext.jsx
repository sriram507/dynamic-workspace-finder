import { createContext, useState, useEffect, useCallback } from 'react';

// Create context with proper default structure
export const WorkspaceContext = createContext({
  workspaces: [],
  filteredWorkspaces: [],
  loading: true,
  error: null,
  filters: {
    location: '',
    capacity: 1,
    priceRange: [0, 500],
    amenities: [],
    type: 'all'
  },
  setFilters: () => {},
  searchWorkspaces: () => {},
  applyFilters: () => {},
  refetch: () => {}
});

export const WorkspaceProvider = ({ children }) => {
  const [workspaces, setWorkspaces] = useState([]);
  const [filteredWorkspaces, setFilteredWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
    capacity: 1,
    priceRange: [0, 500],
    amenities: [],
    type: 'all'
  });

  // Mock API fetch
  const fetchWorkspaces = useCallback(async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { 
            id: 1, 
            name: "Cozy Space", 
            location: "New York",
            capacity: 4,
            price: 200,
            amenities: ["wifi", "monitor"],
            type: "shared"
          },
          { 
            id: 2, 
            name: "Private Office", 
            location: "London",
            capacity: 2,
            price: 350,
            amenities: ["wifi", "printer"],
            type: "private"
          }
        ]);
      }, 1000);
    });
  }, []);

  // Load data
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWorkspaces();
      setWorkspaces(data);
      setFilteredWorkspaces(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [fetchWorkspaces]);

  // Initial load
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Apply filters
  const applyFilters = useCallback(() => {
    const filtered = workspaces.filter(ws => {
      return (
        (!filters.location || ws.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        ws.capacity >= filters.capacity &&
        ws.price >= filters.priceRange[0] &&
        ws.price <= filters.priceRange[1] &&
        (filters.amenities.length === 0 || 
          filters.amenities.every(a => ws.amenities.includes(a))) &&
        (filters.type === 'all' || ws.type === filters.type)
      );
    });
    setFilteredWorkspaces(filtered);
  }, [filters, workspaces]);

  // Re-apply filters when they change
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Search function
  const searchWorkspaces = useCallback(query => {
    if (!query.trim()) {
      applyFilters();
      return;
    }
    const results = workspaces.filter(ws => 
      ws.name.toLowerCase().includes(query.toLowerCase()) ||
      ws.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredWorkspaces(results);
  }, [workspaces, applyFilters]);

  // Context value
  const value = {
    workspaces: filteredWorkspaces,
    loading,
    error,
    filters,
    setFilters,
    searchWorkspaces,
    applyFilters,
    refetch: loadData
  };

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
};
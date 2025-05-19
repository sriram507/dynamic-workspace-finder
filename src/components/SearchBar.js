function SearchBar({ searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search workspaces by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />
  
        <div className="flex gap-4 mb-4">
          <div>
            <label htmlFor="min-price" className="block text-sm font-semibold">Min Price</label>
            <input
              type="number"
              id="min-price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              min="0"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="block text-sm font-semibold">Max Price</label>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              min="0"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default SearchBar;
  
import { useContext, useState } from 'react';
import { WorkspaceContext } from '../context/WorkspaceContext';

function Header() {
  const { searchWorkspaces } = useContext(WorkspaceContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchWorkspaces(query);
  };

  return (
    <header className="header">
      <h1>Workspace Finder</h1>
      <input
        type="text"
        placeholder="Search workspaces..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
    </header>
  );
}

export default Header;
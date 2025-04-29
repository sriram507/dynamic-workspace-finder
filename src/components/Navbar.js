import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 p-4 text-white">
      <Link to="/" className="text-xl font-bold">
        WorkspaceFinder
      </Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/workspaces" className="hover:underline">Workspaces</Link>
      </div>
    </nav>
  );
}

export default Navbar;

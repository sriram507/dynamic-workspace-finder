import { Link } from 'react-router-dom';

function WorkspaceCard({ workspace }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={workspace.imageUrl}
        alt={workspace.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{workspace.name}</h2>
        <p className="text-gray-600">{workspace.location}</p>
        <p className="mt-2 font-semibold">${workspace.pricePerHour}/hour</p>
        <Link
          to={`/workspace/${workspace.id}`}
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default WorkspaceCard;

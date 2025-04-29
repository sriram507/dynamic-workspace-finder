import { useParams } from 'react-router-dom';
import workspaces from '../data/workspaces';

function WorkspaceDetailPage() {
  const { id } = useParams();
  
  // Find the workspace by ID
  const workspace = workspaces.find((ws) => ws.id === parseInt(id));

  if (!workspace) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl">Workspace not found.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{workspace.name}</h1>
      <img
        src={workspace.imageUrl}
        alt={workspace.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-4">{workspace.location}</p>
      <p className="text-lg mb-4 font-semibold">
        ${workspace.pricePerHour} / hour
      </p>
      <div>
        <h2 className="text-xl font-semibold">Workspace Details:</h2>
        <p className="mt-2">This is a great place for professionals looking to work in a creative, collaborative, or business-focused environment. Book your space today!</p>
      </div>
    </div>
  );
}

export default WorkspaceDetailPage;

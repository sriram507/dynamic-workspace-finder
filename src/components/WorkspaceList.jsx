import { useContext } from 'react';
import { WorkspaceContext } from '../context/WorkspaceContext';

function WorkspaceList() {
  const { workspaces, loading, error } = useContext(WorkspaceContext);

  if (loading) return <div className="loading">Loading workspaces...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!workspaces.length) return <div>No workspaces found</div>;

  return (
    <div className="workspace-list">
      {workspaces.map(workspace => (
        <div key={workspace.id} className="workspace-card">
          <h3>{workspace.name}</h3>
          <p>Location: {workspace.location}</p>
          <p>Capacity: {workspace.capacity} people</p>
          <p>Price: ${workspace.price}/day</p>
        </div>
      ))}
    </div>
  );
}

export default WorkspaceList;
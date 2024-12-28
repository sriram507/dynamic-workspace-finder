import React from "react";
const WorkspaceList = ({ workspaces }) => {
  if (workspaces.length === 0) {
    return <p>No workspaces found!</p>;
  }

  return (
    <div>
      {workspaces.map((workspace) => (
        <div key={workspace.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{workspace.name}</h5>
            <p className="card-text">Location: {workspace.location}</p>
            <p className="card-text">Rating: {workspace.rating} ★</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkspaceList;

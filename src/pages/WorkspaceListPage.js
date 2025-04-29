import MapComponent from '../components/MapComponent.js';

const sampleWorkspaces = [
  {
    id: 1,
    name: 'IndiQube Alpha',
    location: 'Koramangala',
    latitude: 12.9352,
    longitude: 77.6250,
  },
  {
    id: 2,
    name: 'WeWork Galaxy',
    location: 'MG Road',
    latitude: 12.9719,
    longitude: 77.6412,
  },
];

function WorkspaceListPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Workspace List Page</h1>

      <ul className="mb-6">
        {sampleWorkspaces.map((workspace) => (
          <li key={workspace.id}>
            {workspace.name} - {workspace.location}
          </li>
        ))}
      </ul>

      <MapComponent workspaces={sampleWorkspaces} />
    </div>
  );
}

export default WorkspaceListPage;

import { useState } from 'react';

function AdminPage() {
  const [newWorkspace, setNewWorkspace] = useState({
    name: '',
    location: '',
    pricePerHour: '',
    imageUrl: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add workspace to state or call API to save workspace (for now just log)
    console.log('New Workspace:', newWorkspace);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Workspace</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Workspace Name"
            value={newWorkspace.name}
            onChange={(e) => setNewWorkspace({ ...newWorkspace, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Location"
            value={newWorkspace.location}
            onChange={(e) => setNewWorkspace({ ...newWorkspace, location: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Price per Hour"
            value={newWorkspace.pricePerHour}
            onChange={(e) => setNewWorkspace({ ...newWorkspace, pricePerHour: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Image URL"
            value={newWorkspace.imageUrl}
            onChange={(e) => setNewWorkspace({ ...newWorkspace, imageUrl: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg">
          Add Workspace
        </button>
      </form>
    </div>
  );
}

export default AdminPage;

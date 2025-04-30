import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPage({ workspaces, setWorkspaces }) {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    location: '',
    pricePerHour: '',
    imageUrl: '',
    latitude: 0,
    longitude: 0,
    amenities: []
  });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing
      setWorkspaces(workspaces.map(ws => 
        ws.id === editingId ? formData : ws
      ));
    } else {
      // Add new
      setWorkspaces([...workspaces, formData]);
    }
    
    resetForm();
    navigate('/workspaces');
  };

  const handleEdit = (workspace) => {
    setFormData(workspace);
    setEditingId(workspace.id);
  };

  const handleDelete = (id) => {
    setWorkspaces(workspaces.filter(ws => ws.id !== id));
  };

  const resetForm = () => {
    setFormData({
      id: Date.now(),
      name: '',
      location: '',
      pricePerHour: '',
      imageUrl: '',
      latitude: 0,
      longitude: 0,
      amenities: []
    });
    setEditingId(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        {editingId ? 'Edit Workspace' : 'Add New Workspace'}
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields same as before */}
        <div className="grid grid-cols-2 gap-4">
          <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg">
            {editingId ? 'Update' : 'Add'} Workspace
          </button>
          {editingId && (
            <button 
              type="button" 
              onClick={resetForm}
              className="bg-gray-500 text-white p-3 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Manage Workspaces</h2>
        <div className="space-y-2">
          {workspaces.map(ws => (
            <div key={ws.id} className="flex justify-between items-center p-3 border rounded-lg">
              <span>{ws.name} - {ws.location}</span>
              <div className="space-x-2">
                <button 
                  onClick={() => handleEdit(ws)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(ws.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
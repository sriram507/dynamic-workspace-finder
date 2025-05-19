import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import workspacesData from './data/workspaces';
import HomePage from './pages/HomePage';
import WorkspaceListPage from './pages/WorkspaceListPage';
import WorkspaceDetailPage from './pages/WorkspaceDetailPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [workspaces, setWorkspaces] = useState(workspacesData);

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen p-4 bg-gray-50">
        <Routes>
          {/* Home Page - Shows featured workspaces */}
          <Route 
            path="/" 
            element={<HomePage workspaces={workspaces.slice(0, 3)} />} 
          />
          
          {/* Workspace List Page - Full searchable list */}
          <Route 
            path="/workspaces" 
            element={
              <WorkspaceListPage 
                workspaces={workspaces} 
                setWorkspaces={setWorkspaces} 
              />
            } 
          />
          
          {/* Workspace Detail Page */}
          <Route 
            path="/workspace/:id" 
            element={
              <WorkspaceDetailPage workspaces={workspaces} />
            } 
          />
          
          {/* Admin Panel (Optional) */}
          <Route 
            path="/admin" 
            element={
              <AdminPage 
                workspaces={workspaces} 
                setWorkspaces={setWorkspaces} 
              />
            } 
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
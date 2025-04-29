import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkspaceDetailPage from './pages/WorkspaceDetailPage';
import AdminPage from './pages/AdminPage'; // Optional Admin page
import WorkspaceListPage from './pages/WorkspaceListPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workspaces" element={<HomePage />} />
          <Route path="/workspace/:id" element={<WorkspaceDetailPage />} />
          <Route path="/admin" element={<AdminPage />} /> {/* Admin page route */}
          <Route path="/workspaces" element={<WorkspaceListPage />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

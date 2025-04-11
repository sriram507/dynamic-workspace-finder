import { WorkspaceProvider } from './context/WorkspaceContext';
import Header from './components/Header';
import WorkspaceList from './components/WorkspaceList';
import SearchFilters from './components/SearchFilters';
import './styles/main.css';

function App() {
  return (
    <WorkspaceProvider>
      <div className="app">
        <Header />
        <main>
          <SearchFilters />
          <WorkspaceList />
        </main>
      </div>
    </WorkspaceProvider>
  );
}

export default App;

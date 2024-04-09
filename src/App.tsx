import './App.css';
import CharacterList from './components/characterList';
import Layout from './components/layout';
import Sidebar from './components/sideBar';


function App() {
  return (
    <Layout>
      <div className="app-container">
        <div className="character-list">
          <CharacterList />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
}

export default App;

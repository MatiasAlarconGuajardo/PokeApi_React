
import './App.css';
import CharacterList from './components/characterList';
import Layout from './components/layout';


function App() {
  return (
    <Layout>
      <div className="app-container">
        <div className="character-list">
          <CharacterList />
        </div>
      </div>
    </Layout>
  );
}

export default App;

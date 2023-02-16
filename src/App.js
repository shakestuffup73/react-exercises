import './App.css';
import PokeGame from './components/PokeGame/PokeGame';
import pokemon from './helpers/pokemon.js'

function App() {
  return (
    <div>
      <PokeGame
      pokemon={pokemon}
      />
    </div>
  );
}

export default App;

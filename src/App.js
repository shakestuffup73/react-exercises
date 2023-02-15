import './App.css';
// import Fruit from './components/Fruit/Fruit.jsx'
import PokeCard from './components/PokeCard/PokeCard';

function App() {
  return (
    <div className="App">
      <PokeCard 
        id={4}
        name='Charmander'
        type='fire'
      />
    </div>
  );
}

export default App;

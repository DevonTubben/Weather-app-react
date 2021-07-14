import './App.css';
import SearchBar from './Components/SearchBar'

//this is a functional component 
// returns a template
function App() {
  return (
    <div className="App">
      <h1> 
        Weather App
      </h1>
      <SearchBar />
    </div>
  );
}

export default App;

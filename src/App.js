import './App.css';
import SearchBar from './Components/SearchBar'
import CurrentWeather from './Components/Current-Weather'

//this is a functional component 
// returns a template
function App() {
  return (
    <div className="App">
      <h1> 
        Weather App
      </h1>
      <SearchBar />
      <CurrentWeather />
    </div>
  );
}

export default App;

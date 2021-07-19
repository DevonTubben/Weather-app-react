import './App.css';
import SearchBar from './Components/SearchBar';
import CurrentWeather from './Components/Current-Weather';
import React from 'react';
import { getCurrentWeather } from './API/openweatherAPI';
import Forecast from './Components/Weather-forecast'
 

//this is a functional component 
// returns a template
class App extends React.Component {
  constructor(props){ 
    super(props)
    this.state = { 
        location: '',
        temperature: '',
        feelsLike: '',
        description: '', 
        icon: ''
    }
//     getCurrentWeather("Detroit").then((res) => {
//     console.log("res", res)
// }) 
}

onInputChange(e){ 
    this.setState({ 
        location: e.target.value
    })
    console.log('called on input change', e.target.value);
        }
      
onFormSubmit(){ 
    getCurrentWeather(this.state.location)
    .then((res) => {
    this.setState({ 
        temperature: res.data.main.temp,
        feelsLike: res.data.main.feels_like, 
        description: res.data.weather[0].main, 
        icon: res.data.weather[0].icon
    })
})
}


  render(){ 
  return (
    <div className="App">
      <h1> 
        Weather App
      </h1>
      <SearchBar 
      location={this.state.location} 
      inputChange={e => this.onInputChange(e)}
      formSubmitted={() => this.onFormSubmit()}
      />
      <CurrentWeather 
      currentTemperature={this.state.temperature}
      feelsLike={this.state.feelsLike}
      description={this.state.description}
      icon={this.state.icon}
      />
      <Forecast />
    </div>
  );
}
}


export default App;

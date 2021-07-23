import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import SearchBar from './Components/SearchBar';
import CurrentWeather from './Components/Current-Weather';
import React from 'react';
import { getCurrentWeather, getForecast } from './API/openweatherAPI';
import Forecast from './Components/Weather-forecast';
import Home from './Components/Home'

import Discussion from './Containers/Discussion'
import NavBar from './Components/NavBar'
import DiscussionForm from './Components/DiscussionForm'

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
        icon: '', 
        hourlyForecast: []
    }

}

componentDidMount(){ 
  fetch('http://localhost:3002/Discussion')
  .then(res => res.json())
  .then(discussion => this.setState({ discussion}))
}

addPost = (post) => { 
  this.setState({
    discussion: [...this.state.discussion, post]
  })
}

onInputChange(e){ 
    this.setState({ 
        location: e.target.value
    })
    console.log('called on input change', e.target.value);
        }
      
async onFormSubmit(){ 
  const weatherRes = await getCurrentWeather(this.state.location)
    const lat = weatherRes.data.coord.lat 
    const lon = weatherRes.data.coord.lon 
    const forecastRes = await getForecast(lat, lon)
   
  this.setState({ 
        temperature: weatherRes.data.main.temp,
        feelsLike: weatherRes.data.main.feels_like, 
        description: weatherRes.data.weather[0].main, 
        icon: weatherRes.data.weather[0].icon, 
        hourlyForecast: forecastRes.data.hourly
    })
  }


  render(){ 
  return (
    <Router> 
    <div className="App">
      <NavBar />
      <Switch> 
        <Route exact path='/' component={Home}/>
        <Route exact path='/Discussion' render={() => <Discussion discussion={this.state.dicussion}/>}/>
        <Route exact path='/Discussion/new' render={() => <DiscussionForm addPost={this.addPost}/>}/>
      </Switch>
      {/* <Home /> */}
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
      <Forecast hourlyForecast={this.state.hourlyForecast} />
    </div>
    </Router>
  );
}
}


export default App;

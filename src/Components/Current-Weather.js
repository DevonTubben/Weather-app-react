import React from 'react' 

class CurrentWeather extends React.Component { 
    render(){ 
        const url= `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`
        return( 
            <div className='current-weather'> 
            <div className='current-weather_content'> 
            <div className='current-weather_text'></div>
            <p className="current-weather_temp"> {this.props.currentTemperature}°F </p>
            <p className="current-weather_description"> {this.props.description} </p>
            <p className='current-weather_speed'>Wind: {this.props.wind} MPH</p> 
            <img className="current-weather_icon" src={url} alt={this.props.description} />
            </div>
            <div>
            <p className="current-weather_feels-like">{this.props.feelsLike}°F </p>
            </div>
            </div>
        )
    }
}

export default CurrentWeather; 
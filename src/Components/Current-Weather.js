import React from 'react' 

class CurrentWeather extends React.Component { 
    render(){ 
        return( 
            <div className='current-weather'> 
            <div className='current-weather_content'> 
            <p className="current-weather_temp">{this.props.currentTemperature} </p>
            <p className="current-weather_description"> Sunny </p>
            <img className="current-weather_icon" url="" />
            </div>
            <div>
            <p className="current-weather_feels-like"> 55 </p>
            </div>
            </div>
        )
    }
}

export default CurrentWeather; 
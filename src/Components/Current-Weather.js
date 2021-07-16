import React from 'react' 

class CurrentWeather extends React.Component { 
    render(){ 
        return( 
            <div className='current-weather'> 
            <div className='current-weather_content'> 
            <p className="current-weather_temp"> 60 </p>
            <p className="current-weather_description"> Sunny </p>
            </div>
            <div>
            <p className="current-weather_feels-like"> 55 </p>
            </div>
            </div>
        )
    }
}

export default CurrentWeather; 
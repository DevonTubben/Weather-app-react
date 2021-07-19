import React from 'react';  

class Forecast extends React.Component { 
    render(){ 
        const forecastItems = this.props.hourlyForecast.map((f) => {
        // this.props.hourlyForecast.map((f) => {
            const url= `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`
            let ampm = "AM"
            let hour = new Date(f.dt * 1000).getHours();
            

            if (hour > 12) { 
            hour = hour - 12
            ampm = 'PM'
            }
            return(
            <div className="forecast-item"> 
                <p className="forecast-item_hour">{hour}:00 {ampm}</p>
                <p className="forecast-item_temperature"> {f.temperature} </p>
                <img src={url} alt={f.weather[0].main} />
                <p className="forecast-item_description">{f.weather[0].main} </p>
            </div>
            )
        })

        return(
        <div className="forecast">
           {forecastItems} 
        </div>)
        
    }
}

export default Forecast; 
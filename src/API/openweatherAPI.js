import axios from 'axios'

const API_KEY = 'a27990017f4b3f7b97b607bb6354f99b'

function getCurrentWeather(location){ 
return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
)
}
function getForecast(lat, lon){ 
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
}



export { getCurrentWeather }

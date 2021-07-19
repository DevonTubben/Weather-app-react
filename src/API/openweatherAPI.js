import axios from 'axios'

const API_KEY = 'a27990017f4b3f7b97b607bb6354f99b'
const Base_Url = 'http://api.openweathermap.org/data/2.5/'


function getCurrentWeather(location){ 
return axios.get(
    `${Base_Url}weather?q=${location}&units=imperial&appid=${API_KEY}`
)
}
function getForecast(lat, lon){ 
    return axios.get(`${Base_Url}onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
}



export { getCurrentWeather, getForecast }

import axios from 'axios'

const Api_Key = 'a27990017f4b3f7b97b607bb6354f99b'

function getCurrentweather(location){ 
axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Api_Key}`
)
}
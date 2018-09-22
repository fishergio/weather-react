
import { urlBaseWeather, apiKey} from './../constants/apiUrl';
const location = "Guadalajara, Jalisco";

const getUrlWeatherByCity = city => {

  return `${urlBaseWeather}?q=${location}&appid=${apiKey}`;
}

export default getUrlWeatherByCity;
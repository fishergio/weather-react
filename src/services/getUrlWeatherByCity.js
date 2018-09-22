
import { urlBaseWeather, apiKey} from './../constants/apiUrl';

const getUrlWeatherByCity = city => {

  return `${urlBaseWeather}?q=${city}&appid=${apiKey}`;
}

export default getUrlWeatherByCity;
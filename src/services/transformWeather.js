import convert from 'convert-units';
import {
  SUN,
} from '../constants/weathers';

const getTemp = kelvin => {
  return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weatherData => {
  return SUN;
}

const transformWeather = weatherData => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState(weatherData);
  const temperature = getTemp(temp);

  const newData = {
    temperature,
    weatherState,
    humidity,
    wind: `${speed} m/s`
  }

  return newData;
}

export default transformWeather;
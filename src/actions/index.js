import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = value => ({ type: SET_CITY, value });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

const apiKey = "cc4733757cb8fb8f7ab23f2931a7ef89";
const urlBaseWeather = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = payload => {

  return dispatch => {
    const urlForecast = `${urlBaseWeather}?q=${payload}&appid=${apiKey}`;

    // Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));

    return fetch(urlForecast).then(
      res => (res.json())
    ).then(weatherData => {
      const forecastData = transformForecast(weatherData);
      //console.log(forecastData)

      // modificar el estado con el resultado de la promise (fetch)
      dispatch(setForecastData({city: payload, forecastData}))
    });
  }
}

export const setWeather = payload => {

  return dispatch => {

    payload.forEach( city => {
      
      dispatch(getWeatherCity(city));

      fetch(url_weather).then((data) => {
        return data.json();
      }).then(weather_data => {
        const weather = transformWeather(weather_data);
        //console.log(newWeather);
        dispatch(setWeatherCity({ city, weather}))
      });
    });
  }
}

import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = value => ({ type: SET_CITY, value });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload })

const apiKey = "cc4733757cb8fb8f7ab23f2931a7ef89";
const urlBaseWeather = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {

  return dispatch => {
    const urlForecast = `${urlBaseWeather}?q=${payload}&appid=${apiKey}`;

    // Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));

    fetch(urlForecast).then(
      res => (res.json())
    ).then(weatherData => {
      const forecastData = transformForecast(weatherData);
      //console.log(forecastData)

      // modificar el estado con el resultado de la promise (fetch)
      dispatch(setForecastData({city: payload, forecastData}))
    });
    return;
  }
}
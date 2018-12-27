import React from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';


const renderForecastItemDay = (forecastData) => (
  //<h1>Render DaysItems</h1>
  forecastData.map(forecast =>
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour} data={forecast.data}>
    </ForecastItem>)
)

const renderProgress = () => {
  return <h3>Cargando Forecast Extendido...</h3>
}

const ForecastExtended = ({ city, forecastData}) => (
    <div>
      <h2 className="forecast-title">Pronóstico Extendido para: {city}</h2>
      {
        (forecastData)
          ? renderForecastItemDay(forecastData)
          : renderProgress()
      }
    </div>
)

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,

}

export default ForecastExtended;
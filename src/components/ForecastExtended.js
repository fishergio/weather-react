import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes"
]

class ForecastExtended extends Component{
  
  renderForecastItemDay = () => (
    days.map(day => <ForecastItem key={day} weekDay={day}></ForecastItem>)
  )

  render(){
    const city = this.props.city;
    return(
      <div>
        <h2 className="forecast-title">Pronóstico Extendido para: {city}</h2>
        {
          this.renderForecastItemDay()
        }
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;
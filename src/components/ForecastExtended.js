import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';

/*const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes"
]

const data = {
  temperature: 18,
  weatherState: 'Normal',
  humidity: 57,
  wind: '30m/s', 
}*/
const apiKey = "cc4733757cb8fb8f7ab23f2931a7ef89";
const urlBaseWeather = "http://api.openweathermap.org/data/2.5/forecast";




class ForecastExtended extends Component{

  constructor(){
    super();

    this.state = { forecastData: null }
  }

  componentDidMount() {
    const urlForecast = `${urlBaseWeather}?q=${this.props.city}&appid=${apiKey}`;

    fetch(urlForecast).then( 
      res => (res.json())
      ).then( weatherData => {
      console.log(weatherData)
    })
  }
  
  renderForecastItemDay = () => (
    'Render DaysItems'
    //days.map(day => <ForecastItem key={day} weekDay={day} hour={10} data={data}></ForecastItem>)
  )
    
  renderProgress = () => {
    return <h3>Cargando Forecast Extendido...</h3>
  }
  render(){
    const city = this.props.city;
    const { forecastData } = this.state;
    return(
      <div>
        <h2 className="forecast-title">Pronóstico Extendido para: {city}</h2>
        {
          (forecastData)
          ? this.renderForecastItemDay()
          : this.renderProgress()
        }
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;
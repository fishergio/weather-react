import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
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
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.city != this.props.city){
      this.setState({forecastData: null});
      this.updateCity(nextProps.city)
    }
  }

  updateCity = city => {
    const urlForecast = `${urlBaseWeather}?q=${city}&appid=${apiKey}`;

    fetch(urlForecast).then(
      res => (res.json())
    ).then(weatherData => {
      //console.log(weatherData)
      const forecastData = transformForecast(weatherData);
      //console.log(forecastData)
      this.setState({ forecastData })
    })
  }
  
  renderForecastItemDay = (forecastData) => (
    //<h1>Render DaysItems</h1>
    forecastData.map(forecast => 
    <ForecastItem 
        key={`${forecast.weekDay}${forecast.hour}`} 
      weekDay={forecast.weekDay} 
      hour={forecast.hour} data={forecast.data}>
    </ForecastItem>)
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
            ? this.renderForecastItemDay(forecastData)
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
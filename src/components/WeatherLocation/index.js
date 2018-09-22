import React, { Component } from 'react';
import transformWeather from '../../services/transformWeather';
import { apiWeather } from '../../constants/apiUrl'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
  SUN,
} from '../../constants/weathers';

const data = {
  temperature: 22,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',

}

class WeatherLocation extends Component{

  constructor(){
    super();
    this.state = {
      city: 'Guadalajara Jal',
      data: data,
    }
  }

  handleUpdateClick = () => {
    fetch(apiWeather).then((response) => {
      return response.json();
    }).then( data => {
      const newWeather = transformWeather(data);
      //console.log(newWeather);
      this.setState({
        data: newWeather,
      })
    });

  }
  render(){
    const { city, data } = this.state;

    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
} 

export default WeatherLocation

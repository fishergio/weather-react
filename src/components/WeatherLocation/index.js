import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component{

  constructor(props){
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null,
    }
  }

  componentDidMount(){
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {

    const apiWeather = getUrlWeatherByCity(this.state.city); 

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
        {
          (data) 
            ? <WeatherData data={data} />
            : <CircularProgress size={50} />
        }
      </div>
    )
  }
} 

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
}

export default WeatherLocation

import React, { Component } from 'react';
import LocationList from "./components/LocationList";
//import Location from "./components/WeatherLocation/Location";
import './App.css';

const cities = [
  "Ciudad de México,mx",
  "Buenos Aires,ar",
  "Moscow,ru",
  "Guadalajara,mx",
  "Madrid,es"
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Wheater App - Aplicación del clima</h1>
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;

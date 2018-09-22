import React, { Component } from 'react';
import WeatherLocation from "./components/WeatherLocation";
//import Location from "./components/WeatherLocation/Location";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Wheater App - Aplicación del clima</h1>
        <WeatherLocation city="Zapopan, Jal" />
        <WeatherLocation city="Guadalajara, Jal" />
        <WeatherLocation city="Zamora, MIch"/>
      </div>
    );
  }
}

export default App;

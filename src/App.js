import React, { Component } from 'react';
import WeatherLocation from "./components/WeatherLocation";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Wheater App - Aplicación del clima</h1>
        <WeatherLocation />
      </div>
    );
  }
}

export default App;

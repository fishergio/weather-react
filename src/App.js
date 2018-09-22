import React, { Component } from 'react';
import LocationList from "./components/LocationList";
//import Location from "./components/WeatherLocation/Location";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Wheater App - Aplicación del clima</h1>
        <LocationList />
      </div>
    );
  }
}

export default App;

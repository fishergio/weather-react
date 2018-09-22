import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = (props) => {
  const { humidity, wind } = props;
  return(
    <div className="weatherExtraInfoCont">
      <span className="extraInfoText">{`Humedad: ${humidity}%`}</span>
      <span className="extraInfoText">{`Vientos: ${wind}`}</span>
    </div>
  )
}

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo
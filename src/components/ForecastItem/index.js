import React from 'react';
import PropTypes from 'prop-types';

const ForecastItem = ({weekDay}) => (
  <div>
    <h2>{weekDay}</h2>
  </div>
)

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
}

export default ForecastItem;
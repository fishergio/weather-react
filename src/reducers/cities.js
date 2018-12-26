import { SET_FORECAST_DATA }  from './../actions';

export const city = (state = {}, action) => {

  const { city, forecastData } = action.payload;
  
  switch (action.type) {
    case SET_FORECAST_DATA:
      return { ...state, [city]: { forecastData } }
    default:
      return state;
  }
}
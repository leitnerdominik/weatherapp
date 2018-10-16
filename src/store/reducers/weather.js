import * as actionTypes from '../actions/actionTypes';

const initalState = {
  city: '',
  country: '',
  dailyAvarageWeather: [],
  fiveDayForeCast: [],
  loading: false,
  errorMessage: null,
  errorCode: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_START:
      return {
        ...state,
        errorMessage: null,
        loading: true,
      };
    case actionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        errorCode: null,
        city: action.city,
        country: action.country,
        fiveDayForeCast: action.fiveDayForecast,
        loading: false,
      };
    case actionTypes.FETCH_WEATHER_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
        errorCode: action.errorCode,
      };
    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from '../actions/actionTypes';

const initalState = {
  city: '',
  country: '',
  loading: false,
  startedSearch: false,
  errorCode: null,
  errorMessage: null,
  weatherDataObj: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODAYDAYFORECAST_START:
      return {
        ...state,
        loading: true,
        startedSearch: true,
        errorCode: null,
        errorMessage: null,
      };
    case actionTypes.FETCH_TODAYDAYFORECAST_SUCCESS: {
      const dataObj = { ...action.tempDataObj, ...action.weatherDataObj, ...action.windDataObj };
      return {
        ...state,
        loading: false,
        errorCode: null,
        errorMessage: null,
        weatherDataObj: dataObj,
        city: action.city,
      };
    }
    case actionTypes.FETCH_TODAYDAYFORECAST_FAILED:
      return {
        ...state,
        loading: false,
        errorCode: action.errorCode,
        errorMessage: action.errorMessage,
      };
    case actionTypes.RESET_TODAYDAYFORECAST_ERRORS:
      return {
        ...state,
        loading: false,
        errorCode: null,
        errorMessage: null,
        startedSearch: false,
      };
    default:
      return state;
  }
};

export default reducer;

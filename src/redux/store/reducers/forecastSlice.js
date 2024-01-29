import { createSlice } from '@reduxjs/toolkit';
import { CELSIUS } from '../../../constants/constants';

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    lat: null,
    lon: null,
    metricSystem: CELSIUS.toLowerCase(),
    isDataConfirmed: false,
    forecast: {},
  },
  reducers: {
    setLat: (state, action) => {
      state.lat = action.payload;
    },
    setLon: (state, action) => {
      state.lon = action.payload;
    },
    setMetricSystem: (state, action) => {
      state.metricSystem = action.payload;
    },
    setDataConfirmed: (state) => {
      state.isDataConfirmed = true;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    resetCity: (state) => {
      state.lat = null;
      state.lon = null;
      state.metricSystem = CELSIUS;
      state.forecast = {};
      state.isDataConfirmed = false;
    }
  },
});

export const {
  setLat,
  setLon,
  setMetricSystem,
  setDataConfirmed,
  setForecast,
  resetCity
} = forecastSlice.actions;

export default forecastSlice.reducer;

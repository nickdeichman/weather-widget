import { createSlice } from '@reduxjs/toolkit';
import { CELSIUS } from '../../../constants/constants';
import thunks from './thunks';

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    lat: null,
    lon: null,
    metricSystem: CELSIUS.toLowerCase(),
    forecast: null,
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
    resetCity: (state) => {
      state.lat = null;
      state.lon = null;
      state.metricSystem = CELSIUS.toLowerCase();
      state.forecast = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.getForecast.fulfilled, (state, { payload }) => {
      state.forecast = {
        id: payload.id,
        name: payload.name,
        temperature: payload.main['temp'],
        feels_like: payload.main['feels_like'],
        weather: payload.weather[0].main,
        icon: payload.weather[0].icon,
      };
    });
  },
});

export const {
  setLat,
  setLon,
  setMetricSystem,
  setForecast,
  resetCity,
} = forecastSlice.actions;

export default forecastSlice.reducer;

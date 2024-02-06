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
    loading: false,
    dataSubmitted: false,
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
      state.dataSubmitted = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.getForecast.pending, (state) => {
      state.loading = true;
      state.dataSubmitted = true;
    });
    builder.addCase(thunks.getForecast.fulfilled, (state, { payload }) => {
      state.forecast = {
        id: payload.id,
        name: payload.name,
        temperature: payload.main['temp'],
        feels_like: payload.main['feels_like'],
        weather: payload.weather[0].main,
        icon: payload.weather[0].icon,
      };
      state.loading = false;
    }),
      builder.addCase(thunks.getForecastById.pending, (state) => {
        state.loading = true;
        state.dataSubmitted = true;
      }),
      builder.addCase(
        thunks.getForecastById.fulfilled,
        (state, { payload }) => {
          state.lat = payload.coord.lat;
          state.lon = payload.coord.lon;
          state.forecast = {
            id: payload.id,
            name: payload.name,
            temperature: payload.main['temp'],
            feels_like: payload.main['feels_like'],
            weather: payload.weather[0].main,
            icon: payload.weather[0].icon,
          };
          state.loading = false;
        }
      );
  },
});

export const { setLat, setLon, setMetricSystem, setForecast, resetCity } =
  forecastSlice.actions;

export default forecastSlice.reducer;

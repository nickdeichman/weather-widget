import { createSlice } from '@reduxjs/toolkit';
import { CELSIUS } from '../../../constants/constants';

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    lat: 0,
    lon: 0,
    metricSystem: CELSIUS,
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
  },
});

export const { setLat, setLon, setMetricSystem } = forecastSlice.actions;

export default forecastSlice.reducer;

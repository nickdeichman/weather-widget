import { createAsyncThunk } from '@reduxjs/toolkit';
import service from './../../../service/forecastService';

const thunks = {
  getForecast: createAsyncThunk(
    'forecast/getForecast',
    async ({ lat, lon, metricSystem }) => {
      const response = await service.get(lat, lon, metricSystem);
      return response;
    }
  ),
};

export default thunks;

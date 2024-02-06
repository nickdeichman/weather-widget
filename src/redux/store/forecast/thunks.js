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
  getForecastById: createAsyncThunk(
    'forecast/getForecastById',
    async ({ id, units }) => {
      const response = await service.getById(id, units);
      return response;
    }
  ),
};

export default thunks;

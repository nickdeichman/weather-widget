import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForecast } from '../redux/store/reducers/forecastSlice';
import service from '../service/forecastService.js';

const useForecast = () => {
  const { lat, lon, metricSystem, isDataConfirmed } = useSelector(
    (state) => state.forecast
  );
  const dispatch = useDispatch();

  useEffect(() => {
    isDataConfirmed
      ? (async () => {
          try {
            const response = await service.get(lat, lon, metricSystem);
            const forecast = {
              id: response.id,
              name: response.name,
              temperature: response.main['temp'],
              feels_like: response.main['feels_like'],
              weather: response.weather[0].main,
            };
            dispatch(setForecast(forecast));
          } catch (err) {
            console.error(err);
          }
        })()
      : null;
  }, [isDataConfirmed]);

  return { isDataConfirmed };
};

export default useForecast;

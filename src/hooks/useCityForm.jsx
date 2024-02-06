import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLat, setLon, setMetricSystem } from '../redux/store/forecast/slice';
import { usePlacesWidget } from 'react-google-autocomplete';
import thunks from '../redux/store/forecast/thunks';

const useCityForm = () => {
  const { lat, lon, metricSystem } = useSelector((state) => state.forecast);
  const dispatch = useDispatch();
  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_API_KEY,
    onPlaceSelected: (place) => {
      const lat = Number.parseFloat(place.geometry.location.lat()).toFixed(2);
      const lon = Number.parseFloat(place.geometry.location.lng()).toFixed(2);
      dispatch(setLat(lat));
      dispatch(setLon(lon));
    },
  });

  const submitData = () => {
    dispatch(thunks.getForecast({lat, lon, metricSystem}));
  };
  const changeMetricSystem = (metricSystem) => {
    dispatch(setMetricSystem(metricSystem));
  };

  return { lat, lon, materialRef, changeMetricSystem, submitData };
};

export default useCityForm;

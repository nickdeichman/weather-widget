import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLat, setLon, setMetricSystem } from '../redux/store/forecast/slice';
import { usePlacesWidget } from 'react-google-autocomplete';
import thunks from '../redux/store/forecast/thunks';
import { useNavigate } from 'react-router';

const useCityForm = () => {
  const forecast = useSelector((state) => state.forecast);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_API_KEY,
    onPlaceSelected: (place) => {
      const lat = Number.parseFloat(place.geometry.location.lat()).toFixed(2);
      const lon = Number.parseFloat(place.geometry.location.lng()).toFixed(2);
      dispatch(setLat(lat));
      dispatch(setLon(lon));
    },
  });

  useEffect(() => {
    if (!forecast.loading && forecast.dataSubmitted) {
      navigate(
        `/forecast/${forecast.forecast.id}?units=${forecast.metricSystem}`
      );
    } else if (forecast.loading && forecast.dataSubmitted) {
      navigate(`/loading`);
    } else {
      navigate('/');
    }
  }, [forecast.dataSubmitted, forecast.loading]);
  const submitData = async () => {
    await dispatch(
      thunks.getForecast({
        lat: forecast.lat,
        lon: forecast.lon,
        metricSystem: forecast.metricSystem,
      })
    );
  };
  const changeMetricSystem = (metricSystem) => {
    dispatch(setMetricSystem(metricSystem));
  };

  return {
    ...forecast,
    submitData,
    changeMetricSystem,
    materialRef,
  };
};

export default useCityForm;

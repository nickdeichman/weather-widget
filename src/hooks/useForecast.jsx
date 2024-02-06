import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForecast } from '../redux/store/forecast/slice';
import service from './../service/forecastService';
import { useNavigate } from 'react-router';

const useForecast = () => {
  const forecast = useSelector((state) => state.forecast);
  const navigate = useNavigate();

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

  return { forecast };
};

export default useForecast;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForecast } from '../redux/store/forecast/slice';
import service from './../service/forecastService';

const useForecast = () => {
  const { forecast } = useSelector(
    (state) => state.forecast
  );

  return { forecast };
};

export default useForecast;

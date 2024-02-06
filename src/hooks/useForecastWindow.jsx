import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import {
  CELSIUS,
  CELSIUS_SYMBOL,
  FAHRENHEIT_SYMBOL,
} from '../constants/constants';
import service from './../service/forecastService';
import { resetCity } from '../redux/store/forecast/slice';
import { useSearchParams } from 'react-router-dom';
import thunks from '../redux/store/forecast/thunks';

const useForecastWindow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { forecast, metricSystem } = useSelector((state) => state.forecast);
  const [icon, setIcon] = useState();
  const [bigIcon, setBigIcon] = useState();
  const [searchParams] = useSearchParams();
  const units = searchParams.get('units');
  const { id } = useParams();
  const metricSymbol =
    metricSystem.toLowerCase() === CELSIUS.toLowerCase()
      ? CELSIUS_SYMBOL
      : FAHRENHEIT_SYMBOL;

  useEffect(() => {
    (async () => {
      !forecast
        ? dispatch(
            thunks.getForecastById({
              id,
              units: units ? units : CELSIUS.toLowerCase(),
            })
          )
        : null;
    })();
  }, []);

  useEffect(() => {
    forecast && forecast.icon
      ? (async () => {
          const iconResponse = await service.getWeatherIcon(forecast.icon);
          const bigIconResponse = await service.getBigWeatherIcon(
            forecast.icon
          );
          setIcon(iconResponse);
          setBigIcon(bigIconResponse);
        })()
      : null;
  }, [forecast]);
  const backToCityForm = () => {
    dispatch(resetCity());
    navigate('/');
  };

  return { forecast, icon, bigIcon, metricSymbol, backToCityForm };
};

export default useForecastWindow;

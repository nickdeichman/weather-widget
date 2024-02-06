import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CELSIUS_SYMBOL,
  FAHRENHEIT_SYMBOL,
  CELSIUS,
} from '../../constants/constants';
import { resetCity } from '../../redux/store/forecast/slice';
import { Button } from '@mui/base';
import service from '../../service/forecastService';

const ForecastWindow = () => {
  const dispatch = useDispatch();
  const { forecast, metricSystem } = useSelector((state) => state.forecast);
  const [icon, setIcon] = useState();
  const [bigIcon, setBigIcon] = useState();
  const metricSymbol =
    metricSystem.toLowerCase() === CELSIUS.toLowerCase()
      ? CELSIUS_SYMBOL
      : FAHRENHEIT_SYMBOL;

  useEffect(() => {
    forecast.icon
      ? (async () => {
          const iconResponse = await service.getWeatherIcon(forecast.icon);
          const bigIconResponse = await service.getBigWeatherIcon(forecast.icon);
          setIcon(iconResponse);
          setBigIcon(bigIconResponse)
        })()
      : null;
  }, [forecast]);
  const handleClick = () => {
    dispatch(resetCity());
  };

  return (
    <div className='forecast-window'>
      <ul>
        {Object.keys(forecast).length ? (
          <>
            <li>City: {forecast.name}</li>
            <li>
              Temperature:{' '}
              {forecast.temperature.toFixed(0) + ` ${metricSymbol}`}
            </li>
            <li>
              Feels like:{' '}
              {forecast['feels_like'].toFixed(0) + ` ${metricSymbol}`}
            </li>
            <li>Weather: {forecast['weather']}</li>
          </>
        ) : null}
      </ul>
      <img src={icon} alt='' />
      <img src={bigIcon} alt='' />
      <Button onClick={() => handleClick()}>Select another city</Button>
    </div>
  );
};

export default ForecastWindow;

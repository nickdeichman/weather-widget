import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CELSIUS_SYMBOL,
  FAHRENHEIT_SYMBOL,
  CELSIUS,
} from '../../constants/constants';
import { resetCity } from '../../redux/store/reducers/forecastSlice';
import { Button } from '@mui/base';

const ForecastWindow = () => {
  const dispatch = useDispatch();
  const { forecast, metricSystem } = useSelector((state) => state.forecast);
  console.log(metricSystem);
  const metricSymbol =
    metricSystem.toLowerCase() === CELSIUS.toLowerCase() ? CELSIUS_SYMBOL : FAHRENHEIT_SYMBOL;

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
      <Button onClick={() => handleClick()}>Select another city</Button>
    </div>
  );
};

export default ForecastWindow;

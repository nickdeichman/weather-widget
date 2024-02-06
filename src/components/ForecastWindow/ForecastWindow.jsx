import React from 'react';
import useForecastWindow from '../../hooks/useForecastWindow';
import ForeCastLoading from '../ForeCastLoading/ForeCastLoading';
import { Button } from '@mui/material';
import { REQUIRED_DATA } from '../../constants/constants';
import ForecastWindowListItem from './ForecastWindowListItem/ForecastWindowListItem';

const ForecastWindow = () => {
  const { forecast, icon, bigIcon, metricSymbol, backToCityForm } =
    useForecastWindow();

  const handleClick = () => {
    backToCityForm();
  };

  return (
    <div className='forecast-window'>
      {forecast ? (
        <>
          <ul className='forecast-window__list'>
            {Object.keys(forecast).map((key) => {
              return REQUIRED_DATA[key] ? (
                <ForecastWindowListItem
                  className='forecast-window__list-item'
                  key={key}
                  description={REQUIRED_DATA[key]}
                  metricSymbol={metricSymbol}
                  value={forecast[key]}
                  imgSrc={icon}
                />
              ) : null;
            })}
            <li className='forecast-window__list-item'>
              Weather: {forecast.weather + ` `}
              <img className='forecast-window__icon-small' src={icon} alt='' />
            </li>
          </ul>
          <Button
            className='forecast-window__btn-back'
            variant='contained'
            onClick={handleClick}
          >
            Select another city
          </Button>
        </>
      ) : (
        <ForeCastLoading />
      )}
    </div>
  );
};

export default ForecastWindow;

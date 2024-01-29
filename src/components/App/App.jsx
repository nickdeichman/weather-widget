import React from 'react';
import CityForm from '../CityForm/CityForm';
import ForecastWindow from '../ForecastWindow/ForecastWindow';
import useForecast from '../../hooks/useForecast';

const App = () => {
 const {isDataConfirmed} = useForecast();

  return isDataConfirmed ? <ForecastWindow /> : <CityForm />;
};

export default App;

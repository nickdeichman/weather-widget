import React from 'react';
import CityForm from '../CityForm/CityForm';
import ForecastWindow from '../ForecastWindow/ForecastWindow';
import useForecast from '../../hooks/useForecast';

const App = () => {
 const {forecast} = useForecast();

  return forecast ? <ForecastWindow /> : <CityForm />;
};

export default App;

import React from 'react'
import { useSelector } from 'react-redux'
import ForecastForm from '../CityForm/ForecastForm'

const App = () => {
  const {forecast} = useSelector(state => state.forecast)

  return (
    <ForecastForm/>
  )
}

export default App
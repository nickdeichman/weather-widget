import { configureStore } from '@reduxjs/toolkit'
import forecastReducer from './forecast/slice'

export default configureStore({
  reducer: {
    forecast: forecastReducer,
  }
})
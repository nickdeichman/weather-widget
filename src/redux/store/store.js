import { configureStore } from '@reduxjs/toolkit'
import forecastReducer from './reducers/forecastSlice'

export default configureStore({
  reducer: {
    forecast: forecastReducer,
  }
})
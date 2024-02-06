import axios from 'axios';
import {
  OPENWEATHER_BASE_URL,
  OPENWEATHER_ICON_URL,
} from '../constants/constants';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const forecast = {
  get: (lat, lon, metricSystem) =>
    axios
      .get(
        OPENWEATHER_BASE_URL +
          `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${metricSystem}`
      )
      .then(({ data }) => data),
  getById: (id, metricSystem) =>
    axios
      .get(
        OPENWEATHER_BASE_URL + `id=${id}&appid=${API_KEY}&units=${metricSystem}`
      )
      .then(({ data }) => data),
  getWeatherIcon: (icon) => OPENWEATHER_ICON_URL + `${icon}.png`,
  getBigWeatherIcon: (icon) => OPENWEATHER_ICON_URL + `${icon}@2x.png`,
};

export default forecast;

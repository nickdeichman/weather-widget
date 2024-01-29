import axios from 'axios';
import { OPENWEATHER_BASE_URL } from '../constants/constants';
const API_KEY =  import.meta.env.VITE_OPENWEATHER_API_KEY

const forecast = {
  get: (lat, lon, metricSystem) =>
    axios
      .get(OPENWEATHER_BASE_URL + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${metricSystem}`)
      .then(({ data }) => data),
};

export default forecast;

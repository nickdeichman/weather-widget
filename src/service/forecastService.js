import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/openWeatherConstants';

const forecast = {
  get: (lat, lon, metricSystem) =>
    axios
      .get(BASE_URL + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${metricSystem}`)
      .then(({ data }) => data),
};

export default forecast;

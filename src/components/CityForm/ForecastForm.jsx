import { Button, TextField } from '@mui/material';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useDispatch } from 'react-redux';
import { setLat, setLon } from '../../redux/store/reducers/forecastSlice';
import ForecastSelect from './ForecastSelect/ForecastSelect';

const ForecastForm = () => {
  const dispatch = useDispatch();
  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_API_KEY,
    onPlaceSelected: (place) => {
      const lat = place.geometry.location.lat();
      const lon = place.geometry.location.lng();
      dispatch(setLat(lat));
      dispatch(setLon(lon));
    },
  });


  return (
    <form>
      <TextField color='secondary' variant='outlined' inputRef={materialRef} />
      <ForecastSelect />
    </form>
  );
};

export default ForecastForm;

import { Button, TextField, styled } from '@mui/material';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDataConfirmed,
  setLat,
  setLon,
} from '../../redux/store/reducers/forecastSlice';
import MetricSystemSelect from './MetricSystemSelect/MetricSystemSelect';
import './cityForm.scss';

const CityForm = () => {
  const { lat } = useSelector((state) => state.forecast);
  const dispatch = useDispatch();
  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_API_KEY,
    onPlaceSelected: (place) => {
      const lat = Number.parseFloat(place.geometry.location.lat()).toFixed(2);
      const lon = Number.parseFloat(place.geometry.location.lng()).toFixed(2);
      dispatch(setLat(lat));
      dispatch(setLon(lon));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    lat ? dispatch(setDataConfirmed()) : null;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}  className='city-data__form'>
      <TextField required inputRef={materialRef} />
      <MetricSystemSelect />
      <Button type='submit'>Confirm city</Button>
    </form>
  );
};

export default CityForm;

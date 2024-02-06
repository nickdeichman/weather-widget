import { Button, TextField } from '@mui/material';
import MetricSystemSelect from './MetricSystemSelect/MetricSystemSelect';
import './cityForm.scss';
import useCityForm from '../../hooks/useCityForm';
import { useNavigate } from 'react-router';

const CityForm = () => {
  const { lat, materialRef, submitData } = useCityForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    lat && submitData();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='city-data__form'>
      <TextField required inputRef={materialRef} />
      <MetricSystemSelect />
      <Button variant='contained' className='city-data__btn-submit' type='submit'>Confirm city</Button>
    </form>
  );
};

export default CityForm;

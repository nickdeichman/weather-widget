import { Button, TextField } from '@mui/material';
import MetricSystemSelect from './MetricSystemSelect/MetricSystemSelect';
import './cityForm.scss';
import useCityForm from '../../hooks/useCityForm';

const CityForm = () => {
  const { lat, lon, materialRef, submitData } = useCityForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    lat && lon ? submitData() : null;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='city-data__form'>
      <TextField required inputRef={materialRef} />
      <MetricSystemSelect />
      <Button type='submit'>Confirm city</Button>
    </form>
  );
};

export default CityForm;

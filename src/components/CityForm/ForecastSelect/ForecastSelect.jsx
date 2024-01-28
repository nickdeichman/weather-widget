import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { CELSIUS, IMPERIAL } from '../../../constants/constants';
import { useDispatch } from 'react-redux';
import { setMetricSystem } from '../../../redux/store/reducers/forecastSlice';

const ForecastSelect = () => {
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    dispatch(setMetricSystem(e.target.value));
  };

  return (
    <Select onChange={(e) => handleSelect(e)} defaultValue={CELSIUS}>
      <MenuItem value={CELSIUS}>{CELSIUS}</MenuItem>
      <MenuItem value={IMPERIAL}>{IMPERIAL}</MenuItem>
    </Select>
  );
};

export default ForecastSelect;

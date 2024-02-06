import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { CELSIUS, IMPERIAL } from '../../../constants/constants';
import useCityForm from '../../../hooks/useCityForm';

const MetricSystemSelect = () => {
  const { changeMetricSystem } = useCityForm();
  const handleSelect = (e) => {
    changeMetricSystem(e.target.value.toLowerCase());
  };

  return (
    <Select onChange={(e) => handleSelect(e)} defaultValue={CELSIUS}>
      <MenuItem value={CELSIUS}>{CELSIUS}</MenuItem>
      <MenuItem value={IMPERIAL}>{IMPERIAL}</MenuItem>
    </Select>
  );
};

export default MetricSystemSelect;

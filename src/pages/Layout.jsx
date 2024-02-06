import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Outlet } from 'react-router';
import useForecast from '../hooks/useForecast';
import { Container } from '@mui/material';

const Layout = () => {
  useForecast();
  return (
    <Container className='weather-container'>
      <h1 className='weather-container__weather-heading'>
        Weather app
      </h1>
      <Outlet />
    </Container>
  );
};

export default Layout;

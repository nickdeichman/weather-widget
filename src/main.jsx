import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.scss';
import store from './redux/store/store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import CityFormRoute from './routes/CityFormRoute.jsx';
import ForecastWindowRoute from './routes/ForecastWindowRoute.jsx';
import ForecastLoadingRoute from './routes/ForecastLoadingRoute.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <CityFormRoute />,
      },
      {
        path: '/loading',
        element: <ForecastLoadingRoute />,
      },
      {
        path: '/forecast/:id',
        element: <ForecastWindowRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

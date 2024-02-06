import React from 'react';

const ForecastWindowListItem = ({ description, value, metricSymbol, className }) => {
  return (
    <li className={className}>
      {description}: {
        description === 'Temperature' || description === 'Feels like' ? value.toFixed(0) + `${metricSymbol}` : value 
      }
    </li>
  );
};

export default ForecastWindowListItem;

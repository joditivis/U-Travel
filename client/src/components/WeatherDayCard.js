import React from 'react';

const WeatherDayCard = props => {
  return (
    <div>
      <h1>7 day forcast here</h1>
      <h2>{props.day}</h2>
      <h2>Current Weather: {props.current}°</h2>
      <h2>High: {props.high}°</h2>
      <h2>Low: {props.low}°</h2>
    </div>
  );
};

export default WeatherDayCard;

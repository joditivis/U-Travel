import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import './style.css';

const WeatherDayCard = props => {
 // console.log(props);
  return (
    <Col>
      <Card className='weather-card'>
        <CardHeader className='weather-header'>{props.day}</CardHeader>
        <CardBody>
          <p className='current-weather'>{props.current}°</p>
          <img
            src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`}
            alt={props.description}
          />
          <p className='high'>High: {props.high}°</p>
          <p className='low'>Low: {props.low}°</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WeatherDayCard;

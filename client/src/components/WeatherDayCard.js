import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';

const WeatherDayCard = props => {
  console.log(props);
  return (
      <Col>
        <Card>
          <CardHeader>{props.day}</CardHeader>
          <CardBody>
            <p>Current Weather: {props.current}°</p>
            <p>High: {props.high}°</p>
            <p>Low: {props.low}°</p>
          </CardBody>
        </Card>
      </Col>
  );
};

export default WeatherDayCard;

import React from 'react';
import { Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

const HotelSearchResults = props => {
  console.log(props.hotel.hotel.name);
  return (
      <Col>
        <Card>
          <CardHeader>Hotel: {props.hotel.hotel.name}</CardHeader>
          <CardBody>
            <p>Room Type: {props.hotel.offers[0].room.typeEstimated.category}</p>
            <p>Price: ${props.hotel.offers[0].price.total} per night</p>
            <p>Rating: {props.hotel.hotel.rating}</p>
            <Button>Save this Hotel</Button>
          </CardBody>
        </Card>
      </Col>
  );
};

export default HotelSearchResults;
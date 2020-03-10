import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';

const TravelSearchResults = props => {
  console.log(props.flight.offerItems[0].services[0].segments[0].flightSegment.carrierCode);
  return (
      <Col>
        <Card>
          <CardHeader>Airline: {props.flight.offerItems[0].services[0].segments[0].flightSegment.carrierCode}</CardHeader>
          <CardBody>
            <p>Departure: {props.flight.offerItems[0].services[0].segments[0].flightSegment.departure.iataCode} at {props.flight.offerItems[0].services[0].segments[0].flightSegment.departure.at}</p>
            <p>Arrival: {props.flight.offerItems[0].services[0].segments[0].flightSegment.arrival.iataCode} at {props.flight.offerItems[0].services[0].segments[0].flightSegment.arrival.at}</p>
            <p>Price: ${props.flight.offerItems[0].price.total}</p>
          </CardBody>
        </Card>
      </Col>
  );
};

export default TravelSearchResults;
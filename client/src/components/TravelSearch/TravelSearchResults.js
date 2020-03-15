import React from 'react';
import { Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import moment from 'moment';

const TravelSearchResults = props => {
  console.log(props.flight.offerItems[0].services[0].segments[0].flightSegment.carrierCode);
  return (
      <Col >
        <Card className="travelCard">
          <CardHeader>Airline: {props.flight.offerItems[0].services[0].segments[0].flightSegment.carrierCode}</CardHeader>
          <CardBody>
            <p>Departure: {props.flight.offerItems[0].services[0].segments[0].flightSegment.departure.iataCode} at {moment(props.flight.offerItems[0].services[0].segments[0].flightSegment.departure.at, ["YYYY", moment.ISO_8601]).format("MM/DD/YYYY h:mm a")}</p>
            <p>Arrival: {props.flight.offerItems[0].services[0].segments[0].flightSegment.arrival.iataCode} at {moment(props.flight.offerItems[0].services[0].segments[0].flightSegment.arrival.at, ["YYYY", moment.ISO_8601]).format("MM/DD/YYYY h:mm a")}</p>
            <p>Price: ${props.flight.offerItems[0].price.total}</p>
            <Button id={props.flight.id}>Save this Flight</Button>
          </CardBody>
        </Card>
      </Col>
  );
};

export default TravelSearchResults;
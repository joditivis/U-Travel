import React from 'react';
import { Card, CardHeader, CardBody, Button } from 'reactstrap';
import moment from 'moment';

const TravelSearchResults = props => {
  console.log(props.flight.offerItems[0].services[0].segments[0].flightSegment.carrierCode);
 
 
  return (
        <Card className="travelCard">
          <CardHeader className="flight-results-header"><h3>Airline: {props.flight.offerItems[0].services[0].segments[0].flightSegment.carrierCode}</h3></CardHeader>
            <CardBody>
                  <p className="flight-details"><h5>Departure:</h5> {props.flight.offerItems[0].services[0].segments[0].flightSegment.departure.iataCode} at {moment(props.flight.offerItems[0].services[0].segments[0].flightSegment.departure.at, ["YYYY", moment.ISO_8601]).format("MM/DD/YYYY h:mm a")}</p>
                  <hr></hr>
                  <p className="flight-details"><h5>Arrival:</h5> {props.flight.offerItems[0].services[0].segments[0].flightSegment.arrival.iataCode} at {moment(props.flight.offerItems[0].services[0].segments[0].flightSegment.arrival.at, ["YYYY", moment.ISO_8601]).format("MM/DD/YYYY h:mm a")}</p>
                  <hr></hr>
                  <p className="flight-details"><h5>Price:</h5> ${props.flight.offerItems[0].price.total}</p>
                  <br></br>
                  <Button className="flight-results-btn" id={props.flight.id} onClick={props.updateDB}>Save Flight</Button>
            </CardBody>
        </Card>
  );
};

export default TravelSearchResults;
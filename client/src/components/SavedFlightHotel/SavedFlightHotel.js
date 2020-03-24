import React, { useState, useEffect, useInterval } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import moment from "moment";
// import "./style.css";

const SavedFlightHotel = props => {
  if (props.flight.flightSegments) {
    console.log(props.flight);
  }

  const [count, setCount] = useState("");
  const [delay, setDelay] = useState(1000);

  const dateCountDown = count;

  return (
    <div>
      <Card className="countdown-card">
        <CardHeader className="countdown-header">
          Saved Flights and Hotel
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg={6}>
              <h5 className="start-date-text">Outgoing Flight</h5>
              {!props.flight.flightSegments ? (
                <p>There is not a saved flight.</p>
              ) : (
                <div>
                  {props.flight.flightSegments[0].segments.map(segment => (
                    <div>
                      <p>
                        Departure: {segment.flightSegment.departure.iataCode} at{" "}
                        {segment.flightSegment.departure.at}
                      </p>
                      <p>
                        Arrival: {segment.flightSegment.arrival.iataCode} at{" "}
                        {segment.flightSegment.arrival.at}
                      </p>
                    </div>
                  ))}
                  <p>Price: {props.flight.price.$numberDecimal}</p>
                </div>
              )}
            </Col>
            <Col lg={6}>
              <h5 className="start-date-text">Return Flight</h5>
              {!props.returnFlight.flightSegments ? (
                <p>There is not a saved return flight.</p>
              ) : (
                <div>
                  {props.returnFlight.flightSegments[0].segments.map(segment => (
                    <div>
                      <p>
                        Departure: {segment.flightSegment.departure.iataCode} at{" "}
                        {segment.flightSegment.departure.at}
                      </p>
                      <p>
                        Arrival: {segment.flightSegment.arrival.iataCode} at{" "}
                        {segment.flightSegment.arrival.at}
                      </p>
                    </div>
                  ))}
                  <p>Price: {props.returnFlight.price.$numberDecimal}</p>
                </div>
              )}
            </Col>
            <Col lg={12}>
              <h5 className="countdown-text">Saved Hotel</h5>
              {!props.hotel.length ? (
                <p>There is not a saved hotel.</p>
              ) : (
                  <div>
                      <p>Hotel: {props.hotel.name}</p>
                      <p>Room Type: {props.hotel.roomType}</p>
                      <p>Dates: {props.hotel.checkInDate} to {props.hotel.checkOutDate}</p>
                      <p>Price: {props.hotel.proce.$numberDecimal}</p>
                  </div>
              )}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default SavedFlightHotel;

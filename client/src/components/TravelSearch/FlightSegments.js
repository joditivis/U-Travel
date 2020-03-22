import React, { Component } from "react";
import { Card, CardHeader, CardBody, Button } from "reactstrap";
import moment from "moment";



const FlightSegments = props => {
  console.log(props);
  return (
    <div className="flight-details">
    <h5>Departure:</h5>          <p className="flight-details">{" "}
    {
      props.segment.segments[0].flightSegment.departure.iataCode
    }{" "}
    at{" "}
    {moment(
      props.segment.segments[0]
        .flightSegment.departure.at,
      ["YYYY", moment.ISO_8601]
    ).format("MM/DD/YYYY h:mm a")}
  </p>
  <hr></hr>

    <h5>Arrival:</h5>          <p className="flight-details">{" "}
    {
      props.segment.segments[0]
        .flightSegment.arrival.iataCode
    }{" "}
    at{" "}
    {moment(
      props.segment.segments[0]
        .flightSegment.arrival.at,
      ["YYYY", moment.ISO_8601]
    ).format("MM/DD/YYYY h:mm a")}
  </p>
  <hr></hr>
  <br></br>
</div>
  );
};

export default FlightSegments;

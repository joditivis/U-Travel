import React, { useState } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import moment from "moment";
import "./style.css";

var FontAwesome = require("react-fontawesome");

const SavedFlightHotel = props => {
  // console.log("Saved Flight Hotel", props);
  // console.log(props.flight.flightSegments);

  if (props.flight.flightSegments) {
   // console.log(props.flight);
  }

  const [display, setDisplay] = useState(false);

  const changeDisplayTrue = () => {
  //  console.log("true clicked", display);
    setDisplay(true);
  };

  const changeDisplayFalse = () => {
   // console.log("clicked", display);
    setDisplay(false);
  };

  return (
    <div>
      <Card className="countdown-card">
        <CardHeader className="countdown-header">
          Saved Flights and Hotel{"  "}
          {display ? (
            <FontAwesome
              className="super-crazy-colors"
              name="chevron-up"
              size="lg"
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              onClick={changeDisplayFalse}
            />
          ) : (
            <FontAwesome
              className="super-crazy-colors"
              name="chevron-down"
              size="lg"
              style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              onClick={changeDisplayTrue}
            />
          )}
        </CardHeader>
        {display && props.flight.flightSegments ? (
          <CardBody className="savedFlightHotel">
            <Row>
              <Col lg={12}>
                <h5 className="start-date-text">Saved Flight(s)</h5>
                {!props.flight.flightSegments.length ? (
                  <div></div>
                ) : (
                  <p>
                    Total Price:{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }).format(props.flight.price.$numberDecimal)}
                  </p>
                )}
              </Col>
              <Col lg={6}>
                <h5 className="start-date-text">Outgoing Flight</h5>
                {!props.flight.flightSegments.length ? (
                  <p>There is not a saved flight.</p>
                ) : (
                  <div>
                    {props.flight.flightSegments[0].segments.map(
                      (segment, index) => (
                        <div key={index}>
                          <p>
                            Departure:{" "}
                            {segment.flightSegment.departure.iataCode} at{" "}
                            {moment(segment.flightSegment.departure.at, [
                              "YYYY",
                              moment.ISO_8601
                            ]).format("MM/DD/YYYY h:mm a")}
                          </p>
                          <p>
                            Arrival: {segment.flightSegment.arrival.iataCode} at{" "}
                            {moment(segment.flightSegment.arrival.at, [
                              "YYYY",
                              moment.ISO_8601
                            ]).format("MM/DD/YYYY h:mm a")}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}
              </Col>
              <Col lg={6}>
                <h5 className="start-date-text">Return Flight</h5>
                {!props.returnFlight.flightSegments || !props.returnFlight.flightSegments.length ? (
                  <p>There is not a saved return flight.</p>
                ) : (
                  <div>
                    {props.returnFlight.flightSegments[0].segments.map(
                      (segment, index) => (
                        <div key={index}>
                          <p>
                            Departure:{" "}
                            {segment.flightSegment.departure.iataCode} at{" "}
                            {moment(segment.flightSegment.departure.at, [
                              "YYYY",
                              moment.ISO_8601
                            ]).format("MM/DD/YYYY h:mm a")}
                          </p>
                          <p>
                            Arrival: {segment.flightSegment.arrival.iataCode} at{" "}
                            {moment(segment.flightSegment.arrival.at, [
                              "YYYY",
                              moment.ISO_8601
                            ]).format("MM/DD/YYYY h:mm a")}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}
              </Col>
              <Col lg={12}>
                <h5 className="countdown-text">Saved Hotel</h5>
                {!props.hotel ? (
                  <p>There is not a saved hotel.</p>
                ) : (
                  <div>
                    <p>Hotel: {props.hotel.name}</p>
                    {props.hotel.roomType ? (
                      <p>Room Type: {props.hotel.roomType}</p>
                    ) : (
                      <div></div>
                    )
                    
                    }
                    <p>
                      Dates: {moment(props.hotel.checkInDate,"YYYY-MM-DD").format("MM/DD/YYYY")} to{" "}
                      {moment(props.hotel.checkOutDate,"YYYY-MM-DD").format("MM/DD/YYYY")}
                    </p>
                    <p>Price: {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: props.hotel.currency || "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(props.hotel.price.$numberDecimal)}</p>
                  </div>
                )}
              </Col>
            </Row>
          </CardBody>
        ) : (
          <div></div>
        )}
      </Card>
    </div>
  );
};

export default SavedFlightHotel;

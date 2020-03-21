import React, { Component } from "react";
import { Card, CardHeader, CardBody, Button } from "reactstrap";
import moment from "moment";

class TravelSearchResults extends Component {
  //console.log(props.flight.offerItems[0].services[0].segments[0].flightSegment.carrierCode);
  constructor() {
    super();
    this.state = {
      saveFlightId: "",
      saveFlightOrigin: "",
      saveFlightDest: "",
      saveFlightDep: "",
      saveFlightArr: "",
      saveFlightPrice: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Set state to a user's username and password
  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(event.currentTarget);
    console.log(event.currentTarget.dataset);
    console.log(this.props);
    this.props.getTripInfoFromButton({
      id: event.currentTarget.id,
      origin: event.currentTarget.dataset.origin,
      destination: event.currentTarget.dataset.destination,
      departure: event.currentTarget.dataset.departure,
      arrival: event.currentTarget.dataset.arrival,
      price: event.currentTarget.dataset.price
    });
  }
  render() {
    return (
      <Card className="travelCard">
        <CardHeader className="flight-results-header">
          <h3>
            Airline:{" "}
            {
              this.props.flight.offerItems[0].services[0].segments[0]
                .flightSegment.carrierCode
            }
          </h3>
        </CardHeader>
        <CardBody className="flight-details">

            <h5>Departure:</h5>          <p className="flight-details">{" "}
            {
              this.props.flight.offerItems[0].services[0].segments[0]
                .flightSegment.departure.iataCode
            }{" "}
            at{" "}
            {moment(
              this.props.flight.offerItems[0].services[0].segments[0]
                .flightSegment.departure.at,
              ["YYYY", moment.ISO_8601]
            ).format("MM/DD/YYYY h:mm a")}
          </p>
          <hr></hr>

            <h5>Arrival:</h5>          <p className="flight-details">{" "}
            {
              this.props.flight.offerItems[0].services[0].segments[0]
                .flightSegment.arrival.iataCode
            }{" "}
            at{" "}
            {moment(
              this.props.flight.offerItems[0].services[0].segments[0]
                .flightSegment.arrival.at,
              ["YYYY", moment.ISO_8601]
            ).format("MM/DD/YYYY h:mm a")}
          </p>
          <hr></hr>

            <h5>Price:</h5>           <p className="flight-details"> ${this.props.flight.offerItems[0].price.total}
          </p>
          <br></br>
          <Button
            className="flight-results-btn"
            id={this.props.flight.id}
            data-origin={
              this.props.flight.offerItems[0].services[0].segments[0]
                .flightSegment.departure.iataCode
            }
            data-destination={
              this.props.flight.offerItems[0].services[0].segments[0]
                .flightSegment.arrival.iataCode
            }
            data-departure={moment(
              this.props.flight.offerItems[0].services[0].segments[0]
                .flightSegment.departure.at,
              ["YYYY", moment.ISO_8601]
            ).format("MM/DD/YYYY h:mm a")}
            data-arrival={moment(
              this.props.flight.offerItems[0].services[0].segments[0]
                .flightSegment.arrival.at,
              ["YYYY", moment.ISO_8601]
            ).format("MM/DD/YYYY h:mm a")}
            data-price={this.props.flight.offerItems[0].price.total}
            onClick={this.handleSubmit}
            type="submit"
          >
            Save Flight
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default TravelSearchResults;

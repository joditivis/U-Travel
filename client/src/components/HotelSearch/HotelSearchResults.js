import React, { Component } from "react";
import { Col, Card, CardHeader, CardBody, Button } from "reactstrap";

class HotelSearchResults extends Component {
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

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(event.currentTarget);
    console.log(event.currentTarget.dataset);
    console.log(this.props);
    this.props.getHotelInfoFromButton({
      id: event.currentTarget.id,
      name: event.currentTarget.dataset.hotelname,
      roomType: event.currentTarget.dataset.room,
      price: event.currentTarget.dataset.price
    });
  }

  render() {
    return (
      <Col>
        <Card className="travelCard">
          <CardHeader className="hotel-results-header">Hotel: {this.props.hotel.hotel.name}</CardHeader>
          <CardBody className="hotel-details">
            <p>
              Room Type: {this.props.hotel.offers[0].room.typeEstimated.category}
            </p>
            <p>Price: ${this.props.hotel.offers[0].price.total} per night</p>
            <p>Rating: {this.props.hotel.hotel.rating}</p>
            <Button
            className="hotel-results-btn"
            id={this.props.hotel.hotel.hotelId}
            data-hotelname={
              this.props.hotel.hotel.name
            }
            data-room={
              this.props.hotel.offers[0].room.typeEstimated.category
            }
            data-price={this.props.hotel.offers[0].price.total}
            onClick={this.handleSubmit}
            type="submit"
          >
            Save this Hotel
          </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default HotelSearchResults;

import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import DatePicker from "../DatePicker/DatePicker";
import './style.css';

class HotelSearchForm extends Component {
  state = {
    city: "",
    date: "",
    numAdults: 1,
    nonStop: false
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // hotelSearch = () => {
  //   this.callApi(this.state.city)
  //     .then(res => this.setState({ origin: res.data }))
  //     // .then(res2 => console.log(this.state.flights))
  //     .catch(err => console.log(err));
  // };

  // callApi = async city => {
  //   const response = await fetch(`/hotel/${city}`);
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.hotelSearch(this.state);
    this.setState({
      origin: "",
      destination: "",
      date: ""
    });
  };

  render() {
    return (
      <div>
        <Form className="hotel-form">
          <Row>
            <Col md={12}>
              <FormGroup className="hotel-form-group">
                <Label className="hotel-form-label" for="hotelSearch">Staying In</Label>
                <Input
                  type="text"
                  name="city"
                  id="hotelSearchInput"
                  placeholder="Kailua Kona, HI"
                  onInput={this.hotelSearch}
                  onChange={this.handleInputChange}
                  value={this.state.city}
                />
              </FormGroup>
            </Col>
          </Row>

          {/* <br></br>
          <p className="hotel-form-label">Check In / Check Out</p>
          <DatePicker /> */}

          <br></br>

          <Row>
            <Col md={12}>
              <FormGroup>
                <Label className="hotel-form-label" for="numOfTravelers">Number of Travelers</Label>
                <Input
                  type="text"
                  name="numOfTravelers"
                  id="numOfTravelersInput"
                  placeholder="2 travelers"
                />
              </FormGroup>
            </Col>
          </Row>

        <br></br>

          <p className="hotel-form-label">Check In / Check Out</p>
          <DatePicker />

        <br></br>
        <br></br>

        </Form>
        <Button className="hotel-form-btn" onClick={this.handleSubmit}>Search</Button>
        <br></br>
      </div>
    );
  }
}

export default HotelSearchForm;

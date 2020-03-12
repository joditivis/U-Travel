import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import DatePicker from "../DatePicker/DatePicker";

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
        <Form>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="hotelSearch">Staying In</Label>
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

          <br></br>
          <p>Check In/Check Out</p>
          <DatePicker />

          <br></br>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="numOfTravelers">Number of Travelers</Label>
                <Input
                  type="text"
                  name="numOfTravelers"
                  id="numOfTravelersInput"
                  placeholder="2 travelers"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <br></br>
        <Button onClick={this.handleSubmit}>Search</Button>
      </div>
    );
  }
}

export default HotelSearchForm;

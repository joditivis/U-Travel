import React, { Component } from "react";
import { Form, Button, Input, Row, Col, FormGroup, Label } from "reactstrap";
import DatePicker from "./DatePicker/DatePicker";
import moment from "moment";

class TravelSearchForm extends Component {
  state = {
    origin: "",
    destination: "",
    date: "2020-04-02",
    numAdults: 1,
    nonStop: false,
    startDate: "",
    endDate: ""
  };

  setDate = datePicker => {
    console.log("dates should be saving");
    console.log(datePicker);
    let startDate =
      datePicker === null
        ? ""
        : moment(datePicker.startDate).format("YYYY-MM-DD");
    let endDate =
      datePicker === null
        ? ""
        : moment(datePicker.endDate).format("YYYY-MM-DD");
    this.setState({
      startDate: startDate,
      endDate: endDate
    });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
    console.log(name, value);
    console.log(this.state);
  };

  airportSearch = () => {
    this.callApi(this.state.origin)
      .then(res => this.setState({ origin: res.data }))
      // .then(res2 => console.log(this.state.flights))
      .catch(err => console.log(err));
  };

  callApi = async city => {
    const response = await fetch(`/airport/${city}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.flightSearch(this.state);
    // this.setState({
    //   origin: "",
    //   destination: "",
    //   date: ""
    // });
  };
  render() {
    return (
      <Form>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="flightSearch">Starting Destination</Label>
              <Input
                type="text"
                name="origin"
                placeholder="Origin City"
                //onInput={this.airportSearch}
                onChange={this.handleInputChange}
                value={this.state.origin}
              />
              <Label for="flightSearch">Ending Destination</Label>
              <Input
                type="text"
                name="destination"
                placeholder="Destination City"
                onChange={this.handleInputChange}
                value={this.state.destination}
              />
              {/* <Input
          type="text"
          name="date"
          placeholder="Start Date"
          onChange={this.handleInputChange}
          value={this.state.date}
        /> */}
            </FormGroup>
          </Col>
        </Row>

        <br></br>

        <p>Flight Date</p>
        <DatePicker setDate={this.setDate} />
        <br></br>

        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="numOfTravelers">Number of Travelers</Label>
              <Input
                type="text"
                name="numAdults"
                id="numOfTravelersInput"
                placeholder="2"
                onChange={this.handleInputChange}
                value={this.state.numAdults}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default TravelSearchForm;

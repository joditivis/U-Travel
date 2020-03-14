import React, { Component } from "react";
import { Form, Button, Input, Row, Col, FormGroup, Label, Card, CardHeader, CardBody, Container } from "reactstrap";
import DatePicker from "./DatePicker/DatePicker";
import moment from "moment";
import './style.css';

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
      <Container>
        <Card className='travel-card'>
          <CardHeader className='travel-header'><h3>Search Flights</h3></CardHeader>
            <CardBody className='travel-body'>
              <Form className='travel-form'>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <Label className='travel-form-label' for="flightSearch">Starting Destination</Label>
                      <Input
                        className='tavel-destination-input'
                        type="text"
                        name="origin"
                        placeholder="Origin City"
                        //onInput={this.airportSearch}
                        onChange={this.handleInputChange}
                        value={this.state.origin}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                        <Label className='travel-form-label' for="flightSearch">Ending Destination</Label>
                        <Input
                          className='tavel-destination-input'
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

                {/* <p>Flight Date</p>
                <DatePicker setDate={this.setDate} />
                <br></br> */}

                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <Label className='travel-form-label' for="numOfTravelers">Number of Travelers</Label>
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

                <br></br>

                <p>Depart / Return</p>
                <DatePicker setDate={this.setDate} />

                <br></br>
                <br></br>

                <Button className='travel-form-btn' onClick={this.handleSubmit}>Submit</Button>
                <br></br>
              </Form>
            </CardBody>
        </Card>
      </Container>
    );
  }
}

export default TravelSearchForm;

import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import DatePicker from '../DatePicker/DatePicker';

const HotelSearchForm = (props) => {

  return (
      <div>
            <Form>
              <Row>
              <Col md={4}>
                <FormGroup>
                    <Label for="hotelSearch">Staying In</Label>
                    <Input type="text" name="hotelSearch" id="hotelSearchInput" placeholder="Kailua Kona, HI" />
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
                    <Input type="text" name="numOfTravelers" id="numOfTravelersInput" placeholder="2 travelers" />
                </FormGroup>
              </Col>
              </Row>
            </Form>
          <br></br>
          <Button>Search</Button>
      </div>
  );
};

export default HotelSearchForm;
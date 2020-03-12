import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Container } from 'reactstrap';
import HotelSearchForm from '../../components/HotelSearch/HotelSearchForm';


class HotelSearchPage extends Component {

render() {
  return (
    <div>
    <Container>
      <Card>
        <CardHeader>Search Hotels</CardHeader>
        <CardBody>
            <HotelSearchForm />
        </CardBody>
      </Card>
    </Container>
    </div>
  )};
};

export default HotelSearchPage;
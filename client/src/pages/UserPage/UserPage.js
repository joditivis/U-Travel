import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PackingList from '../../components/PackingList/PackingList';
import SavedTripInfoCard from '../../components/SavedTripInfo/SavedTripInfoCard';
import WeatherPage from '../WeatherPage/WeatherPage';

class UserPage extends Component {
 
  render() {
    return (
      <Container>
        <Row>
          <Col md={7}>
            <SavedTripInfoCard />
          </Col>
          <Col md={5}>
            <PackingList />
          </Col>
        </Row>
        <WeatherPage />
      </Container>
    );
  }
}

export default UserPage;

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PackingList from '../../components/PackingList/PackingList';
import SavedTripInfoCard from '../../components/SavedTripInfo/SavedTripInfoCard';
import BudgetCard from '../../components/Budget/BudgetCard';
import CountDown from '../../components/DaysUntilTrip/CountDown';
import WeatherPage from '../WeatherPage/WeatherPage';

class UserPage extends Component {
 
  render() {
    return (
      <Container>
        <Row>
          <Col md={7}>
            <SavedTripInfoCard />
            <br></br>
            <CountDown />
            <br></br>
            <PackingList />
          </Col>
          <Col md={5}>
            <BudgetCard />
          </Col>
        </Row>
        <br></br>
        <hr></hr>
        <br></br>
        <WeatherPage />
      </Container>
    );
  }
}

export default UserPage;

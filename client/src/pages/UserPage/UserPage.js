import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PackingList from '../../components/PackingList/PackingList';
import SavedTripInfoCard from '../../components/SavedTripInfo/SavedTripInfoCard';
import BudgetCard from '../../components/Budget/BudgetCard';
import CountDown from '../../components/DaysUntilTrip/CountDown';
import WeatherPage from '../WeatherPage/WeatherPage';
// import DatePicker from '../../components/DatePicker/DatePicker';
import TripInfo from '../../components/SavedTripInfo/TripInfo'

class UserPage extends Component {
 
  render() {
    return (
      <Container>
        <Row>
          <Col md={7}>
            <SavedTripInfoCard />
            <TripInfo />
            <br></br>
            <CountDown />
            <br></br>
            <PackingList />
            <br></br>
            {/* <DatePicker /> */}
          </Col>
          <Col md={5}>
            <BudgetCard />
          </Col>
        </Row>
        <br></br>
        <hr></hr>
        <br></br>
        <WeatherPage />
        <br></br>
      </Container>
    );
  }
}

export default UserPage;

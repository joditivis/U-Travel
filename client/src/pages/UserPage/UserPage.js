import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PackingList from '../../components/PackingList/PackingList';
import BudgetCard from '../../components/Budget/BudgetCard';
import CountDown from '../../components/DaysUntilTrip/CountDown';
import WeatherPage from '../WeatherPage/WeatherPage';
// import DatePicker from '../../components/DatePicker/DatePicker';
import TripInfo from '../../components/SavedTripInfo/TripInfo'

class UserPage extends Component {

  db = async () => {
    const response = await fetch(`/test`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount(){
   this.db().then(res => console.log(res));
  }
 
  render() {
    return (
      <Container>
      <br></br>
      <br></br>
        <Row>
          <Col md={7}>
            <TripInfo />
            {/* <br></br>
            <CountDown /> */}
            <br></br>
            <PackingList />
            <br></br>
            {/* <DatePicker /> */}
          </Col>
          <Col md={5}>
            <CountDown />
            <br></br>
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

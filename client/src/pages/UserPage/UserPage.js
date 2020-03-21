import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  CardHeader,
  Card,
  Table,
  CardBody,
  Button,
  Form,
  Input
} from 'reactstrap';
import PackingList from '../../components/PackingList/PackingList';
import BudgetCard from '../../components/Budget/BudgetCard';
import CountDown from '../../components/DaysUntilTrip/CountDown';
import WeatherPage from '../WeatherPage/WeatherPage';
// import TripInfo from '../../components/SavedTripInfo/TripInfo';
import Trip from '../../components/SavedTripInfo/Trip';
// import AddTripForm from '../../components/SavedTripInfo/AddTripForm';
import './style.css';

const AddTripForm = ({ addTrip }) => {
  const [title, setTitle] = useState('');
  const [peopleOrDays, setPeopleOrDays] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    addTrip(title, peopleOrDays, amount);
    setTitle('');
    setPeopleOrDays('');
    setAmount('');
  };

  return (
    <Form>
      <Input
        className="add-trip-input"
        type="text"
        name="title"
        placeholder="surfing lessons"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <br></br>
      {/* <Input
        className="add-trip-input"
        type="text"
        name="peopleOrDays"
        placeholder="people/days"
        value={peopleOrDays}
        onChange={event => setPeopleOrDays(event.target.value)}
      />
      <br></br> */}
      <Input
        className="add-trip-input"
        type="text"
        name="amount"
        placeholder="$"
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />
      <br></br>
      <Button className="add-item-btn" size="sm" onClick={handleSubmit}>
        Add
      </Button>
    </Form>
  );
};

const UserPage = () => {
  const [trips, setTrip] = useState([
    {
      title: 'Surfing',
      peopleOrDays: 5,
      amount: 400
    },
    {
      title: 'Hiking',
      peopleOrDays: 2,
      amount: 100
    },
    {
      title: 'Helicopter Tour',
      peopleOrDays: 4,
      amount: 1000
    }
  ]);

  const addTrip = (title, peopleOrDays, amount) => {
    console.log('add trip', { title, peopleOrDays, amount });
    const newTrip = [...trips, { title, peopleOrDays, amount }];
    setTrip(newTrip);
  };

  const removeTrip = index => {
    console.log('remove trip', index);
    const newTrip = [...trips];
    newTrip.splice(index, 1);
    setTrip(newTrip);
  };

  return (
    <Container>
      <br></br>
      <br></br>
      <Row>
        <Col md={7}>
          <Card className="trip-card">
            <CardHeader className="trip-header">
              <h4>Planned trip to Kailua Kona, HI</h4>
            </CardHeader>
            {/* <CardHeader>Add to my trip</CardHeader>
      <AddTripForm addTrip={addTrip} /> */}
            <CardBody className="trip-body">
              <Table striped className="trip-table">
                <thead>
                  <tr>
                    <th>Activity</th>
                    {/* <th>People/Days</th> */}
                    <th>Cost</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                {trips.map((trip, index) => (
                  <Trip
                    key={index}
                    index={index}
                    trip={trip}
                    removeTrip={removeTrip}
                  />
                ))}
              </Table>
              <hr></hr>
              <CardHeader className="trip-header">
                <h4>Add to Trip</h4>
              </CardHeader>
              <AddTripForm addTrip={addTrip} />
            </CardBody>
          </Card>

          <br></br>
          <PackingList />
          <br></br>
        </Col>
        <Col md={5}>
          <CountDown />
          <br></br>
          <BudgetCard
          trip={trips} 
          />
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <br></br>
      <WeatherPage />
      <br></br>
    </Container>
  );
};


export default UserPage;

import React, { useState, Component, useEffect } from 'react';
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
import DestinationCard from '../../components/DestinationInput/DestinationCard';
// import AddTripForm from '../../components/SavedTripInfo/AddTripForm';
import './style.css';
import Axios from 'axios';
import { decodeBase64 } from 'bcryptjs';


const AddTripForm = ({ addTrip }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  
    

  const handleSubmit = event => {
    event.preventDefault();
    addTrip(title, amount);
    setTitle('');
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

const UserPage = (props) => {
  const tripdata =[];
  const [tripId, setTripId] = useState(props.trip)
  // const [flight, setflight] = useState(props.trip.flight)
  useEffect(()=>{

   
    Axios.get(`/gettrips/${props.trip}`)
    .then(res=>{
      res.data.trip.forEach(()=>{
        tripdata.push(res.data.trip)
      })
     
      console.log("response:",res)
    })
  })
const [trips, setTrip] = useState(tripdata)
  // const [trips, setTrip] = useState([
    
  //   {
  //     title: 'Surfing',
  //     peopleOrDays: 5,
  //     amount: 400
  //   },
  //   {
  //     title: 'Hiking',
  //     peopleOrDays: 2,
  //     amount: 100
  //   },
  //   {
  //     title: 'Helicopter Tour',
  //     peopleOrDays: 4,
  //     amount: 1000
  //   }
  // ]);
 

  // useEffect(()=>{
  //   console.log("trips data:", trips);
  //   console.log("tripId: ", tripId);
  
  //   Axios.get(`/gettrips/${props.trip}`)
  //   .then(res=>{

  //     // setTrip(
  //     //   tripdata
  //     // )
  //     console.log("response:",res)
  //   })
  // })
  
  
 
//   const addTrip = async(title, peopleOrDays, amount) => {
// //     console.log('add trip', { title, peopleOrDays, amount });
//     const newTrip = [...trips, { title, peopleOrDays, amount }];

// const UserPage = () => {
//   const [trips, setTrip] = useState([
//     {
//       title: 'Surfing',
//       amount: 400
//     },
//     {
//       title: 'Hiking',
//       amount: 100
//     },
//     {
//       title: 'Helicopter Tour',
//       amount: 1000
//     }
//   ]);

  const addTrip = (title, amount) => {
    console.log('add trip', { title, amount });
    const newTrip = [...trips, { title, amount }];
    
    setTrip(newTrip);

    Axios.put(`/userpage/${props.trip}`,{
      trip: newTrip
    })
  
    
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
      <Row>
        <Col md={6}>
          <DestinationCard />
        </Col>
        <Col md={6}>
          <CountDown />
          <br></br>
        </Col>
        <Col md={6}>
          <Card className="trip-card">
            <CardHeader className="trip-header">
              <h4>Planned Activities</h4>
            </CardHeader>
            {/* <CardHeader>Add to my trip</CardHeader>
      <AddTripForm addTrip={addTrip} /> */}
            <CardBody className="trip-body">
              <Table striped className="trip-table">
                <thead>
                  <tr>
                    <th>Activity</th>
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
        <Col md={6}>
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

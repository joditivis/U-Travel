import React, { useState, useEffect } from "react";
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
} from "reactstrap";
import PackingList from "../../components/PackingList/PackingList";
import BudgetCard from "../../components/Budget/BudgetCard";
import CountDown from "../../components/DaysUntilTrip/CountDown";
import WeatherPage from "../WeatherPage/WeatherPage";
import Trip from "../../components/SavedTripInfo/Trip";
import DestinationCard from "../../components/DestinationInput/DestinationCard";
import SavedFlightHotel from "../../components/SavedFlightHotel/SavedFlightHotel";
import "./style.css";
import Axios from "axios";
//import { decodeBase64 } from "bcryptjs";

const AddTripForm = ({ addTrip }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    addTrip(title, amount);
    setTitle("");
    setAmount("");
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

const UserPage = props => {
  const [trips, setTrip] = useState([]);
  const [tripId, setTripId] = useState(props.trip);

  const [savedFlights, setSavedFlights] = useState([]);
  const [savedReturnFlights, setSavedReturnFlights] = useState([]);
  const [savedHotel, setSavedHotel] = useState([]);
  const [flightTrip, setFlightTrip] = useState({
    title: "Flight(s)",
    amount: 0
  });
  const [hotelTrip, setHotelTrip] = useState({
    title: "Hotel",
    amount: 0
  });

  useEffect(() => {
    //const tripId = props.trip;
    setTripId(props.trip);
    console.log("I'm here!!!", tripId, props.trip);

    if (props.trip) {
      Axios.get(`/gettrips/${props.trip}`).then(res => {
        let tripdata = [];
        if (res.data.trip) {
          res.data.trip.forEach(() => {
            tripdata = tripdata.concat(res.data.trip);
          });
        }
        setTrip(res.data.trip || []);

        setSavedFlights(res.data.flight);
        if (res.data.flight) {
          setFlightTrip({
            title: "Flight(s)",
            amount: res.data.flight.price || 0
          });
        }
        setSavedReturnFlights(res.data.returnFlight);
        setSavedHotel(res.data.hotel);

        if (res.data.hotel) {
          console.log("THIS IS RESETTING HOTEL", res.data);
          setHotelTrip({
            title: "Hotel",
            amount: res.data.hotel.price || 0
          });
        }

        console.log("tripdata", tripdata);
        console.log("response:", res);
      });
    }
  }, [props.trip, tripId]);

  const addTrip = (title, amount) => {
    console.log("add trip", { title, amount });
    const newTrip = [...trips, { title, amount }];

    console.log("new", newTrip);

    Axios.put(`/userpage/${props.trip}`, {
      trip: newTrip
    }).then(res => {
      console.log("res.data", res.data.trip);
      setTrip(res.data.trip);
    });
  };

  const removeTrip = index => {
    console.log("remove trip", index);
    const newTrip = [...trips];
    newTrip.splice(index, 1);

    Axios.put(`/userpage/${props.trip}`, {
      trip: newTrip

    }).then(res=>{
      // console.log("res.data",res.data.trip)
      setTrip(res.data.trip)

    });
  };

  function renderFlightRow() {
    if (flightTrip.amount !== 0) {
      return <Trip key={101} index={101} trip={hotelTrip} remove={false} />;
    }
  }

  function renderHotelRow() {
    if (hotelTrip.amount !== 0) {
      return <Trip key={100} index={100} trip={flightTrip} remove={false} />;
    }
  }

  return (
    <Container>
      <br></br>
      <Row>
        <Col md={6}>
          <DestinationCard tripId={tripId} />
          <br></br>
        </Col>

        <Col md={6}>
          <CountDown />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={12}>
          <SavedFlightHotel
            flight={savedFlights}
            returnFlight={savedReturnFlights}
            hotel={savedHotel}
          ></SavedFlightHotel>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={6}>
          <Card className="trip-card">
            <CardHeader className="trip-header">Planned Activities</CardHeader>
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
                {renderFlightRow()}
                {renderHotelRow()}
                {trips.map((trip, index) => {

                  return (
                    <Trip
                      key={index}
                      index={index}
                      trip={trip}
                      removeTrip={removeTrip}
                      remove={true}
                    />
                  );
                })}
              </Table>
              <hr></hr>
              <CardHeader className="trip-header">Add to Trip</CardHeader>
              <AddTripForm addTrip={addTrip} />
            </CardBody>
          </Card>

          <br></br>
          <PackingList tripId={tripId} />
          <br></br>
        </Col>
        <Col md={6}>

          <BudgetCard trip={trips} flightTrip={flightTrip} hotelTrip={hotelTrip} tripId={tripId}/>

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

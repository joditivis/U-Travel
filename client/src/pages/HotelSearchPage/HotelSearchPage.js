import React, { Component } from "react";
import { Card, CardHeader, CardBody, Container } from "reactstrap";
import HotelSearchForm from "../../components/HotelSearch/HotelSearchForm";
import HotelSearchResults from "../../components/HotelSearch/HotelSearchResults";
import './style.css';
import axios from 'axios';

class HotelSearchPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      hotels: [],
      trip: "",
      user: "",
    };
    //this.setState = this.setState.bind(this);
    this.getHotelInfoFromButton = this.getHotelInfoFromButton.bind(this);
  }
  
    deleteItem = id => {
      console.log(id);
      const hotels = this.state.hotels.filter(hotel => {
        return hotel.id !== id;
      });
      this.setState({ hotels });
    };

    componentDidMount() {
      console.log(this.props.user);
      console.log(this.props.trip);
      this.setState({
        trip: this.props.trip,
        user: this.props.user
      }, () =>console.log(this.state));
      ;
    }
  
    hotelSearch = (hotelSearch) => {
      this.callApi(hotelSearch.city, hotelSearch.checkInDate)
        .then(res => this.setState({ hotels: res.data }))
        // .then(res2 => console.log(this.state.flights))
        .catch(err => console.log(err));
    }
  
    callApi = async (city, checkInDate) => {
      
      const response = await fetch(`/hotels/${city}/${checkInDate}`);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
  
      return body;
    };

  getHotelInfoFromButton(hotelObject) {
      console.log(hotelObject);
      this.updateDB(this.state.trip, hotelObject);
      console.log("hotel is updated");
      console.log(this.state);
  }

  db = async (requestOptions, trip_id) => {
    const response = await axios.put(`/savehotel/${trip_id}`, requestOptions);
    const body = await response;
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  updateDB = (trip_id, hotelInfo) => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      hotel: hotelInfo
    };
    this.db(requestOptions, trip_id).then(data => console.log(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  render() {
    return (
      <div>
        <Container>
          <Card className="hotel-card">
            <CardHeader className="hotel-header"><h3>Search Hotels</h3></CardHeader>
            <CardBody className="hotel-body">
              <HotelSearchForm hotelSearch={this.hotelSearch}/>
            </CardBody>
          </Card>
          {this.state.hotels.map(hotel => (
            <HotelSearchResults key={hotel.hotel.hotelId} hotel={hotel} getHotelInfoFromButton={this.getHotelInfoFromButton}/>
          ))}
        </Container>
      </div>
    );
  }
}

export default HotelSearchPage;

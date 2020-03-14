import React, { Component } from "react";
import { Card, CardHeader, CardBody, Container } from "reactstrap";
import HotelSearchForm from "../../components/HotelSearch/HotelSearchForm";
import HotelSearchResults from "../../components/HotelSearch/HotelSearchResults";
import './style.css';

class HotelSearchPage extends Component {

    state = {
      hotels: []
    };
  
    deleteItem = id => {
      console.log(id);
      const hotels = this.state.hotels.filter(hotel => {
        return hotel.id !== id;
      });
      this.setState({ hotels });
    };
  
    hotelSearch = (hotelSearch) => {
      this.callApi(hotelSearch.city)
        .then(res => this.setState({ hotels: res.data }))
        // .then(res2 => console.log(this.state.flights))
        .catch(err => console.log(err));
    }
  
    callApi = async (city) => {
      
      const response = await fetch(`/hotels/${city}`);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
  
      return body;
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
            <HotelSearchResults hotel={hotel} />
          ))}
        </Container>
      </div>
    );
  }
}

export default HotelSearchPage;

import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import TravelSearchForm from '../../components/TravelSearchForm';
import TravelSearchResults from '../../components/TravelSearchResults';

class TravelSearch extends Component {
  state = {
    flights: []
  };

  deleteItem = id => {
    console.log(id);
    const flights = this.state.flights.filter(flight => {
      return flight.id !== id;
    });
    this.setState({ flights });
  };

//   addItem = flight => {
//     flight.id = Math.random();
//     let items = [...this.state.flights, flight];
//     this.setState({
//       flights
//     });
//   };

  flightSearch = (flightSearch) => {
    this.callApi(flightSearch.origin, flightSearch.destination, flightSearch.startDate, flightSearch.numAdults)
      .then(res => this.setState({ flights: res.data }))
      // .then(res2 => console.log(this.state.flights))
      .catch(err => {
        console.log(process.env.AMADEUS_CLIENT_ID);
        console.log(process.env.AMADEUS_CLIENT_SECRET);
        console.log(err)});
  }

  callApi = async (origin, destination, date, adults) => {
    
    const response = await fetch(`/flights/${origin}/${destination}/${date}/${adults}/true`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Container>
        <TravelSearchForm flightSearch={this.flightSearch} />
        {this.state.flights.map(flight => (
          <Row >
          <TravelSearchResults flight={flight} />
        </Row>
        ))}
        
      </Container>
    );
  }
}

export default TravelSearch;

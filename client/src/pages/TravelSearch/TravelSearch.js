import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import TravelSearchForm from '../../components/TravelSearch/TravelSearchForm';
import TravelSearchResults from '../../components/TravelSearch/TravelSearchResults';
import TravelSearchAnyResults from '../../components/TravelSearch/TravelSearchAnyResults';

class TravelSearch extends Component {
  state = {
    flights: [],
    flightsAny: []
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
        console.log(err)});
  }

  flightSearchAny = (flightSearch) => {
    this.callApiAny(flightSearch.origin, flightSearch.startDate, flightSearch.numAdults)
      .then(res => this.setState({ flightsAny: res.data }))
      // .then(res2 => console.log(this.state.flights))
      .catch(err => {
        console.log(err)});
  }

  callApi = async (origin, destination, date, adults) => {
    
    const response = await fetch(`/flights/${origin}/${destination}/${date}/${adults}/true`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callApiAny = async (origin, date, adults) => {
    
    const response = await fetch(`/flightDestinations/${origin}/${date}/true`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Container>
        <TravelSearchForm flightSearch={this.flightSearch} flightSearchAny={this.flightSearchAny}/>
        {this.state.flights.map(flight => (
          <Row >
          <TravelSearchResults flight={flight} />
        </Row>
        ))}
        {this.state.flightsAny.map(flight => (
          <Row >
          <TravelSearchAnyResults flight={flight} />
        </Row>
        ))}
      </Container>
    );
  }
}

export default TravelSearch;

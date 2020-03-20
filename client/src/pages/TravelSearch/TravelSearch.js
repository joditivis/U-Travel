import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import TravelSearchForm from "../../components/TravelSearch/TravelSearchForm";
import TravelSearchResults from "../../components/TravelSearch/TravelSearchResults";
import TravelSearchAnyResults from "../../components/TravelSearch/TravelSearchAnyResults";

class TravelSearch extends Component {
  state = {
    flights: [],
    flightsAny: [],
    trip: "",
    user: ""
  };

  db = async (requestOptions, trip_id) => {
    const response = await fetch(`/savetrip/${trip_id}`, requestOptions);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  updateDB = () => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ destination: "here is the destination" })
    };
    const trip_id = "5e6fd0f1beec473d50eb1b2e";
    this.db(requestOptions, trip_id)
    .then(data => console.log(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
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

  deleteItem = id => {
    console.log(id);
    const flights = this.state.flights.filter(flight => {
      return flight.id !== id;
    });
    this.setState({ flights });
  };

  flightSearch = flightSearch => {
    this.callApi(
      flightSearch.origin,
      flightSearch.destination,
      flightSearch.startDate,
      flightSearch.numAdults
    )
      .then(res => this.setState({ flights: res.data }))
      // .then(res2 => console.log(this.state.flights))
      .catch(err => {
        console.log(err);
      });
  };

  flightSearchAny = flightSearch => {
    this.callApiAny(
      flightSearch.origin,
      flightSearch.startDate,
      flightSearch.numAdults
    )
      .then(res => this.setState({ flightsAny: res.data }))
      // .then(res2 => console.log(this.state.flights))
      .catch(err => {
        console.log(err);
      });
  };

  callApi = async (origin, destination, date, adults) => {
    const response = await fetch(
      `/flights/${origin}/${destination}/${date}/${adults}/true`
    );
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
        <TravelSearchForm
          flightSearch={this.flightSearch}
          flightSearchAny={this.flightSearchAny}
        />
        {this.state.flights.map(flight => (
          <Row>
            <TravelSearchResults flight={flight} updateDB={this.updateDB} />
          </Row>
        ))}
        {this.state.flightsAny.map(flight => (
          <Row>
            <TravelSearchAnyResults flight={flight} />
          </Row>
        ))}
      </Container>
    );
  }
}

export default TravelSearch;

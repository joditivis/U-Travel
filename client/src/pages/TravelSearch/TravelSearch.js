import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import TravelSearchForm from "../../components/TravelSearch/TravelSearchForm";
import TravelSearchResults from "../../components/TravelSearch/TravelSearchResults";
import TravelSearchAnyResults from "../../components/TravelSearch/TravelSearchAnyResults";
import axios from "axios";

class TravelSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      flights: [],
      flightsAny: [],
      trip: "",
      user: "",
      saveFlightId: '',
      saveFlightOrigin: '',
      saveFlightDest: '',
      saveFlightDep: '',
      saveFlightArr: '',
      saveFlightPrice: ''
    };
    //this.setState = this.setState.bind(this);
    this.getTripInfoFromButton = this.getTripInfoFromButton.bind(this);
  }


   db = async (requestOptions, trip_id) => {
    const response = await axios.put(`/saveflight/${trip_id}`, requestOptions);
    const body = await response;
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  updateDB = (trip_id, flightInfo) => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      flight: flightInfo
    };
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

  getTripInfoFromButton(tripObject) {
    console.log(tripObject);
    this.updateDB(this.state.trip, tripObject);
    console.log("trip is updated");
    console.log(this.state);
  }
  
  render() {
    return (
      <Container>
        <TravelSearchForm
          flightSearch={this.flightSearch}
          flightSearchAny={this.flightSearchAny}
        />
        {this.state.flights.map(flight => (
          <Row>
            <TravelSearchResults flight={flight} updateDB={this.updateDB} getTripInfoFromButton={this.getTripInfoFromButton} trip={this.state.trip_id} />
          </Row>
        ))}
        {this.state.flightsAny.map(flight => (
          <Row>
            <TravelSearchAnyResults flight={flight}  />
          </Row>
        ))}
      </Container>
    );
  }
}

export default TravelSearch;

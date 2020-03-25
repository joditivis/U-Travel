import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import axios from "axios";

// Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import InstructionsCard from "./components/HomePage/HomeInstructionsCard";
import LogInPage from "./pages/LogInPage/LogInPage";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";
import NoMatch from "./components/404Page/NoMatch";
import WeatherPage from "./pages/WeatherPage/WeatherPage";
import UserPage from "./pages/UserPage/UserPage";
import TravelSearch from "./pages/TravelSearch/TravelSearch";
import HotelSearchPage from "./pages/HotelSearchPage/HotelSearchPage";
import Footer from "./components/Footer/Footer";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userName: null,
      email: null,
      userId: null,
      results: [],
      tripID: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
    console.log("user is updated");
    if (this.state.userId) {
      this.findTripByUser(this.state.userId);
    }
  }

  findTrip = async user_id => {
    const response = await fetch(`/findtrip/${user_id}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  findTripByUser = async user_id => {
    this.findTrip(user_id).then(data => {
      if (!data) {
        this.addNewTrip();
      } else {
        this.setState({
          tripID: data._id
        });
      }
    });
  };

  dbAddTrip = async requestOptions => {
    const response = await axios.post("/addtrip", requestOptions);
    const body = await response;
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  addNewTrip = () => {
    console.log("addnewtrip");
    const requestOptions = {
      user: this.state.userId,
      destination: " "
    };
    this.dbAddTrip(requestOptions).then(data => {
      this.setState({
        tripID: data.data._id
      });
    });
  };

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          email: response.data.user.email,
          userName: response.data.user.userName
        });
      } else {
        console.log("Get user: No user logged in.");
        this.setState({
          loggedIn: false,
          userName: null,
          email: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

          <Header />
          <Container>
            {/* <Col lg={12}> */}
            {this.state.loggedIn && (
              <p className="welcome-user">Hi, {this.state.userName}!</p>
            )}
            {/* </Col> */}
          </Container>

          <Switch>
            {/* routes to different components */}
            <Route exact path="/" component={InstructionsCard} />
            <Route
              path="/login"
              render={() => <LogInPage updateUser={this.updateUser} />}
            />
            <Route path="/createaccount" render={() => <CreateAccountPage />} />
            <Route path="/weather" component={WeatherPage} />
            <Route
              path="/userpage"
              render={() => (
                <UserPage user={this.state.userId} trip={this.state.tripID} />
              )}
            />
            <Route
              path="/flightSearchPage"
              render={() => (
                <TravelSearch
                  user={this.state.userId}
                  trip={this.state.tripID}
                />
              )}
            />
            <Route
              path="/hotelSearchPage"
              render={() => (
                <HotelSearchPage
                  user={this.state.userId}
                  trip={this.state.tripID}
                />
              )}
            />
            <Route component={NoMatch} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

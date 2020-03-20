import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

// Components
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import InstructionsCard from './components/HomePage/HomeInstructionsCard';
import LogInPage from './pages/LogInPage/LogInPage';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import NoMatch from './components/404Page/NoMatch';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import UserPage from "./pages/UserPage/UserPage"
import TravelSearch from "./pages/TravelSearch/TravelSearch";
import HotelSearchPage from './pages/HotelSearchPage/HotelSearchPage';
import Footer from './components/Footer/Footer';
import './style.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
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
    console.log(this.state.userId);
    if(this.state.userId){
      console.log("should be updating this");
      this.findTripByUser(this.state.userId);
      console.log(this.state);
    }
  }

  findTrip = async (user_id) => {
    const response = await fetch(`/findtrip/${user_id}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  findTripByUser = async user_id => {
    this.findTrip(user_id).then(data=> {
      console.log(data);
      if(!data){
        this.addNewTrip();
      } else {
        this.setState({
          tripID: data._id
        });
        console.log(this.state);
      }
    });
  };

  dbAddTrip = async (requestOptions) => {
    const response = await axios.post("/addtrip", requestOptions);
    const body = await response;
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  addNewTrip = () => {
    const requestOptions = {
      user: this.state.userId,
      destination: " "
    };
    this.dbAddTrip(requestOptions)
      .then(data => {
        this.setState({
        tripID: data.data._id
      });
      console.log(this.state);
    });
  };

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          email: response.data.user.email
        });
      } else {
        console.log("Get user: No user logged in.");
        this.setState({
          loggedIn: false,
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
          {this.state.loggedIn && <h2 className="welcome-user">Hi, {this.state.email}!</h2>}

          <Switch>
            {/* routes to different components */}
            <Route exact path="/" component={InstructionsCard} />
            <Route
              path="/login"
              render={() => <LogInPage updateUser={this.updateUser}/>}
            />
            <Route path="/createaccount" render={() => <CreateAccountPage />} />
            <Route path="/weather" component={WeatherPage} />
            <Route path="/userpage" component={UserPage} />
            <Route 
            path="/flightSearchPage"
            render={() => <TravelSearch user={this.state.userId} trip={this.state.tripID} />} 
            />
            <Route path="/hotelSearchPage" component={HotelSearchPage} />
            <Route component={NoMatch} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

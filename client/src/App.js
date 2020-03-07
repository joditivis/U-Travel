import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Components
import Header from './components/Header';
import NavBar from './components/NavBar';
import InstructionsCard from './components/HomeInstructionsCard';
import LogInPage from './pages/LogInPage/LogInPage';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import NoMatch from './components/NoMatch';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import UserPage from "./pages/UserPage/UserPage"


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      results: []
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }


  callApi = async () => {
    const response = await fetch('/airport/DEN');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  componentDidMount() {
    this.getUser();
    this.callApi()
      .then(res => this.setState({ results: res.data }))
      .then(res2 => console.log(this.state.results))
      .catch(err => console.log(err));
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

render() {
    return (
      <Router>
        <div className='App'>

          <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* Display user to page to show they are logged in */}
          {this.state.loggedIn &&
            <p>Hi, {this.state.username}!</p>
          }

          <Header />

          <Switch>
          {/* routes to different components */}
            <Route 
              exact path="/" 
              component={InstructionsCard} 
            />
            <Route 
              path="/login" 
              render={() =>
                <LogInPage
                  updateUser={this.updateUser}
                />} 
            />
            <Route 
              path="/createaccount" 
              render={() =>
                <CreateAccountPage/>
              }
            />
            <Route 
              path="/weather" 
              component={WeatherPage} 
            />
            <Route 
              path="/userpage" 
              component={UserPage} 
            />
            <Route 
              component={NoMatch} 
            />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;

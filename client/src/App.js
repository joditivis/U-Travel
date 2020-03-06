import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import InstructionsCard from './components/HomeInstructionsCard';
import NoMatch from './components/NoMatch';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import UserPage from "./pages/UserPage/UserPage"

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/" component={InstructionsCard} />
          <Route exact path="/weather" component={WeatherPage} />
          <Route exact path="/user" component={UserPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

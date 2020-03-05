import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import moment from 'moment';
import WeatherSearchBar from './components/WeatherSearchBar';
import WeatherDayCard from './components/WeatherDayCard';
import API from './utils/API';
import Header from './components/Header';
import NavBar from './components/NavBar';
import InstructionsCard from './components/HomeInstructionsCard';
import NoMatch from './components/NoMatch';


const App = () => {
  // using react hook to set state
  const [data, setData] = useState({
    days: [],
    location: '',
    searchTerm: ''
  });

  // destructure state object to make it easier to use
  const { days, location, searchTerm } = data;

  // useEffect replaces componentDidMount when using Hooks. Denver will show until the user types a search.
  useEffect(() => {
    getWeather('Denver, CO');
  }, []);

  const handleInputChange = event => {
    // when using hooks use spread to make a copy of key value pairs. Copies in exsiting state so we don't loose it and add change on top.
    setData({
      ...data,
      searchTerm: event.target.value
    });
  };

  const getWeather = city => {
    API.getWeather(city)
      .then(res => {
        console.log(res);
        setData({
          searchTerm: '',
          days: res.data.data,
          location: res.data.city_name + ', ' + res.data.state_code
        });
      })
      .catch(err => console.log(err));
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      getWeather(searchTerm);
    } else {
      alert('You must type a city to search');
    }
  };

  // return (
  //   <div className="App">
  //     <Header />
  //     <NavBar />
  //     <InstructionsCard />
  //     <WeatherSearchBar
  //       searchTerm={searchTerm}
  //       handleInputChange={handleInputChange}
  //       handleFormSubmit={handleFormSubmit}
  //     />
  //     <h1>Weather for {location}</h1>
  //     {/* map over WeatherDayCard to get results */}
  //     {days.map(day => (
  //       <WeatherDayCard
  //         // need a unique key - using timestamp (ts) from API
  //         key={day.ts}
  //         day={moment(day.valid_date, 'YYYY-MM-DD').format('dddd')}
  //         current={day.temp}
  //         high={day.max_temp}
  //         low={day.min_temp}
  //       />
  //     ))}
  //   </div>
  // );
  return (
    <Router>
      <div>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/" component={InstructionsCard} />
          <Route exact path="/weather" component={WeatherDayCard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

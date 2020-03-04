import axios from 'axios';
// const weatherKey = process.env.REACT_APP_WEATHERBIT_KEY;

export default {
  getWeather: function(city) {
    return axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?days=7&units=I&key=weatherKeyGoesHere&city=${city}`
    );
  }
};

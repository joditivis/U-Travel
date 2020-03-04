import React from 'react';

const WeatherSearchBar = props => {
  return (
    <div>
      <h2>SearchBar</h2>
      <form>
        {/* <label for="searchTerm">Search by Location</label> */}
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="City and State"
          value={props.searchTerm}
          onChange={props.handleInputChange}
        />

        <button onClick={props.handleFormSubmit}>Get Weather</button>
      </form>
    </div>
  );
};

export default WeatherSearchBar;

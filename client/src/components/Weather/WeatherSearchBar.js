import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './style.css';

const WeatherSearchBar = props => {
  return (
    <Form>
      <FormGroup>
        <Input
          className="weather-search"
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="City and State"
          value={props.searchTerm}
          onChange={props.handleInputChange}
        />
        <br></br>
        <Button className='weather-search-btn' onClick={props.handleFormSubmit}>Get Weather</Button>
      </FormGroup>
    </Form>
  );
};

export default WeatherSearchBar;

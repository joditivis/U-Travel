import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const WeatherSearchBar = props => {
  return (
    <Form>
      <FormGroup>
        <Input
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="City and State"
          value={props.searchTerm}
          onChange={props.handleInputChange}
        />
        <Button onClick={props.handleFormSubmit}>Get Weather</Button>
      </FormGroup>
    </Form>
  );
};

export default WeatherSearchBar;

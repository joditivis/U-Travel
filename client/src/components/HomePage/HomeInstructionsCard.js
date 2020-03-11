import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const InstructionsCard = (props) => {
  return (
    <div>
    <Container>
      <Jumbotron>
        <p className="display-4">Ready to take your next vacation?</p>
        <p className="lead">We're ready to help you get there.</p>
        <p>1. Create an account to start saving your plans</p>
        <p>2. Search for flights, hotels, rental cars, and things to do</p>
        <p>3. Let us calculate how much you need to save to get to where you want to go</p>
        <p className="lead">
          <Button color="primary" href='/flightSearchResults'>Start Planning</Button>
        </p>
      </Jumbotron>
    </Container>
    </div>
  );
};

export default InstructionsCard;
import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import './style.css';

const InstructionsCard = (props) => {
  return (
    <div>
    <Container>
      <Jumbotron className="instruction-jumbo">
        <p className="lead-instructions">Ready to take your next vacation?</p>
        <hr className="line-break"></hr>
        <p className="instructions">1. Create an account to start saving your plans</p>
        <p className="instructions">2. Search for flights and hotels</p>
        <p className="instructions">3. Save your packing list so you don't forget the most important items</p>
        <p className="instructions">4. Add all of your trip expenses and let us calculate 
        <br></br>
        how much you need to save to get to where you want to go</p>
        <br></br>

          <Button className="start-planning-btn">
          <Link to={`/createaccount`} className="nav-link">
            Start Planning</Link></Button>
      </Jumbotron>
    </Container>
    </div>
  );
};

export default InstructionsCard;
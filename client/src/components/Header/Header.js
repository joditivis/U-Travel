import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


export const Header = (props) => {
  return (
    <div>
    <Container>
      <Jumbotron>
          <h1 className="display-3 text-center">U Travel</h1>
      </Jumbotron>
    </Container>
    </div>
  );
};


export default Header;
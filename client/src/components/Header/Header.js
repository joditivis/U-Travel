import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './style.css';


export const Header = (props) => {
  return (
    <div>
    <Container>
      <Jumbotron className="header-jumbo">
          <h1 className="display-2 text-center header">u-Travel</h1>
      </Jumbotron>
    </Container>
    </div>
  );
};


export default Header;